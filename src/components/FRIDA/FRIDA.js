import React, { useEffect, useState, useForm, forwardRef, useImperativeHandle } from 'react'
import { Form, Input, Checkbox, Button, Menu, Dropdown, Space, Col, Row } from 'antd'
import { MinusCircleOutlined, PlusOutlined, SmileOutlined, DownOutlined, ConsoleSqlOutlined } from '@ant-design/icons';
import { ExcelWriteModel } from '../Forms/Excel/Write/ExcelWriteModel';
import Forms from "../../components/Forms/Forms";


const { createRef } = React;


const Frida = forwardRef((props, ref) => {
    const [form] = Form.useForm();
    const [forms, setForms] = useState([]);
    const [elRefs, setElRefs] = React.useState([]);
    let temp = elRefs[elRefs.length - 1];
    let size = forms.length;

    useImperativeHandle(ref, () => ({
        validate() {
            console.log("trigger from Code")
            return handleValidate();
        },
    }));

    const handleValidate = () => {
        console.log('elRef lenght', elRefs.length);
        console.log(elRefs)
        const res = elRefs.map((item, index) => {
            return item.current.submit();
        });
    }
    // temp = elRefs[elRefs.length - 1]; 
    React.useEffect(() => {
        // add or remove refs
        // console.log(forms);
        // console.log("use effect is triggered")
        // console.log("forms lengt :", forms.length)

        setElRefs((elRefs) =>
            Array(forms.length + 1)
                .fill()
                .map((_, i) => elRefs[i] || createRef()),
        );

        // console.log("after setting elRefs: ", elRefs);
        // console.log("what is size of forms: ", forms.length + 1);
        // console.log("what is size of elRefs: ", elRefs.length + 1);
        // console.log("what is inside Ref arr at index of size: ", elRefs[elRefs.length-1]);
        // console.log("what is inside Ref arr at index with temp var ",temp);
    }, [forms]);
    //! this is used to pass the function to code(parent component) //



    return (
        <>
            < div className="main" >

                {
                    forms.lenght === 0 ? <h1>Empty</h1> : forms.map((form) => {
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
                                    <Forms setForms={setForms} forms={forms} ref={ref} />
                                    {console.log(ref)}
                                </>
                            ))
                        }
                        {/* <Forms setForms={setForms} forms={forms} elRefs={elRefs} setElRefs={setElRefs} ref={temp} index={elRefs.length} /> */}
                    </Col>
                </Row >
            </div >
        </>
    );
})

export default Frida