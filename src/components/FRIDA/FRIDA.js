import React, { useEffect, useState, useForm, forwardRef, useImperativeHandle } from 'react'
import { Form, Input, Checkbox, Button, Menu, Dropdown, Space, Col, Row } from 'antd'
import { MinusCircleOutlined, PlusOutlined, SmileOutlined, DownOutlined, ConsoleSqlOutlined } from '@ant-design/icons';
import { ExcelWriteModel } from '../Forms/Excel/Write/ExcelWriteModel';

const Frida = forwardRef((props, ref) => {
    const [form] = Form.useForm();

    const getValue = (obj) =>{
        console.log(Object.values(obj)[0])
       return Object.values(obj)[0]
    }
    const onFinish = (values) => {
       form.validateFields().then((test)=>{
        console.log("validate: ", test); 
        console.log('Success:', values);
       })   
    };

    // const onFinishFailed = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    // };


    //! this is used to pass the function to code(parent component) //
    useImperativeHandle(ref, () => ({
        showAlert(values) {
            form.submit(); 
            // console.log(Object.values(form.getFieldsValue()));
            // const array = Object.values(form.getFieldsValue())
            // console.log("array"+ array); 
            // console.log(array.length); 
            // const tempArr = []; 
            // for (let i = array.length-1; i>= 0; i = Math.round(i/3)) {
            //     const temp = new ExcelWriteModel(); 
            //     console.log(getValue(array[i - 2]));
            //     temp.setcode(getValue(array[i-2]),getValue(array[i-1]), getValue(array[i])); 
            //     console.log(temp);  
                
            // }
        },
    }))

    return (
        <>
            {console.log(props.forms.lenght)}
            <div className="main">
                <Form form={form}
                    onFinish = {onFinish}
                >
                    {props.forms.lenght === 0 ? <h1>Empty</h1> : props.forms.map((form) => {
                        return (
                            <Space
                                style={{
                                    display: 'flex',
                                    marginBottom: 8,
                                }}
                                align="baseline">
                                {form}
                            </Space>
                        )
                    })}
                </Form>

            </div >
        </>
    );
})

export default Frida