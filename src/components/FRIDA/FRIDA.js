import React, { useEffect, useState, useForm, forwardRef, useImperativeHandle } from 'react'
import { Form, Input, Checkbox, Button, Menu, Dropdown, Space, Col, Row } from 'antd'
import Forms from "../../components/Forms/Forms";


const { createRef } = React;


const Frida = forwardRef((props, ref) => {
    const [form] = Form.useForm();
    const [forms, setForms] = useState([]); // forms array
    const [elRefs, setElRefs] = React.useState([]); // reference array
    useImperativeHandle(ref, () => ({
        validate() {
            // ! This binds validate function to Codes' reference  
            return handleValidate();
        },
    }));

    //! Function  which is triggered by the imperative handle
    const handleValidate = () => {
        console.log('elRef lenght', elRefs.length);
        console.log(elRefs)
        const res = elRefs.map((item, index) => {
            return item.current.submit();
        });
    }

    React.useEffect(() => {
        // *add or remove refs
        console.log("use effect is triggered");

        setElRefs((elRefs) =>
            Array(forms.length + 1)
                .fill()
                .map((_, i) => elRefs[i] || createRef()),
        );
    }, [forms]);
    //! this is used to pass the function to code(parent component) //



    return (
        <>
            < div className="main" >
                {
                    forms.length === 0 ? <h1>Empty</h1> : forms.map((form) => {
                        return (
                            <Space
                                style={{
                                    display: 'flex',
                                    marginBottom: 8,
                                }}
                                align="baseline">
                                {console.log(form.component)}
                                {form.component}
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
                                        index === elRefs.length - 1 && <Forms setForms={setForms} forms={forms} ref={ref} />
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

export default Frida