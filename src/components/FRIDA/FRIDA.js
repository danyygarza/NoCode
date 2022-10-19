import React, { useEffect, useState, useForm, forwardRef, useImperativeHandle } from 'react'
import { Form, Input, Checkbox, Button, Menu, Dropdown, Space, Col, Row } from 'antd'
import { MinusCircleOutlined, PlusOutlined, SmileOutlined, DownOutlined, ConsoleSqlOutlined } from '@ant-design/icons';
import { ExcelWriteModel } from '../Forms/Excel/Write/ExcelWriteModel';
import Forms from "../../components/Forms/Forms";


const { createRef } = React;


const Frida = forwardRef((props, ref) => {
    const [form] = Form.useForm();
    const [forms, setForms] = useState([]); // array de formularios / componentes
    const [elRefs, setElRefs] = React.useState([]); // array de referencias
    const [test, setTest] = useState();
    // const [items, setItems] = useState(-1); 
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

    React.useEffect(() => {
        // add or remove refs
        console.log("use effect is triggered");

        setElRefs((elRefs) =>
            Array(forms.length + 1)
                .fill()
                .map((_, i) => elRefs[i] || createRef()),
        );

        // setTest(elRefs[forms.length]);
        // setItems(items+1); 
        // console.log("useEffect itet", items+1); 
        // console.log("ref array", elRefs)
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
                                    {/* <Forms setForms={setForms} forms={forms} ref={ref} /> */}
                                    {index === elRefs.length - 1 && <Forms setForms={setForms} forms={forms} ref={ref} />}
                                    {console.log(ref)}
                                </>
                            ))
                        }
                        {/*                                                                        index = array.length -1,   [null] -> ref.current.submit() */}
                        {/* <Forms setForms={setForms} forms={forms} ref={test} />
                        <h3>index: {elRefs.length - 1}</h3>
                        {console.log('testing', elRefs[elRefs.length - 2])} */}
                        {/* <Forms setForms={setForms} forms={forms} elRefs={elRefs} setElRefs={setElRefs} ref={temp} index={elRefs.length} /> */}
                    </Col>
                </Row >
            </div >
        </>
    );
})

export default Frida