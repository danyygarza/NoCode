import React, { useEffect, useState, useForm, forwardRef, useImperativeHandle } from 'react'
import { Form, Input, Checkbox, Button, Menu, Dropdown, Space, Col, Row } from 'antd'
import Forms from "../../components/Forms/Forms";


const { createRef } = React;

const testing = async (test) => {
    console.log("in testing function")
    const temp = await test;
    console.log("temp", temp);
    return temp;
}

const Frida = forwardRef((props, ref) => {
    const [form] = Form.useForm();
    const [forms, setForms] = useState([]); // forms array
    const [elRefs, setElRefs] = React.useState([]); // reference array
    const [code, addCode] = useState([]);
    useImperativeHandle(ref, () => ({
        validate() {
            // ! This binds validate function to Codes' reference  
            const codeArr = [];

            elRefs.forEach((element, index) => {
                if(element.current != null){
                    const temp = element.current.submit()
                    testing(temp); 
                    console.log("temp",temp); 
                    // codeArr.push(temp); 
                }
            })
            // console.log('codeArr', codeArr)
            // return codeArr; 
        }
    }));

    //! Function  which is triggered by the imperative handle from child
    const handleValidate = () => {
        console.log('elRef lenght', elRefs.length);
        console.log(elRefs)
        const res = elRefs.map((item, index) => {
            console.log(index);
            console.log(item.current.submit());
        });
    }

    const Testing = () => {
        // elRefs.map((item, index) => {
        //     console.log("doing get code")
        //     console.log("testing Frida code: ", item.current.getCode());
        // })

        console.log("code from FRIDA", code);
    }

    const remove = (index) => {
        setForms(forms.splice(index, 1));
    };

    //! this will create array of refs from size of forms
    useEffect(() => {
        setElRefs((elRefs) =>
            Array(forms.length + 1)
                .fill()
                .map((_, i) => elRefs[i] || createRef()),
        );
    }, [forms]);

    return (
        <>
            < div className="main" >
                {
                    forms.length === 0 ? <h1>Empty</h1> : forms.map((form, index) => {
                        return (
                            <Space
                                style={{
                                    display: 'flex',
                                    marginBottom: 8,
                                }}
                                align="baseline">
                                {form}
                                <Button
                                    onClick={() => {
                                        console.log("index from click: ", index, form);
                                        remove(index);
                                        console.log(index);
                                        const temp = [...elRefs]
                                        temp.splice(index, 1);
                                        setElRefs(temp);
                                    }}
                                >
                                    Delete Action
                                </Button>
                            </Space>
                        )
                    })
                }
                < Row >
                    <Col >
                        {
                            elRefs.length > 0 &&
                            elRefs.map((ref, index) => (
                                <>
                                    {
                                        //! this is a temporary solution that whill only render the last button from the map
                                        //! for some aparent reason it doesn't work by just assgning the last element of the ref array 
                                        index === elRefs.length - 1 && <Forms setForms={setForms} forms={forms} ref={ref} code={code} addCode={addCode} />
                                    }
                                    {console.log(ref)}
                                </>
                            ))
                        }
                    </Col>
                </Row >
            </div >
        </>
    );
})
export default Frida;
