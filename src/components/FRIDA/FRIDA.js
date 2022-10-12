import React, { useEffect, useState, useForm, forwardRef, useImperativeHandle } from 'react'
import { Form, Input, Checkbox, Button, Menu, Dropdown, Space, Col, Row } from 'antd'
import { MinusCircleOutlined, PlusOutlined, SmileOutlined, DownOutlined } from '@ant-design/icons';

const Frida = forwardRef((props, ref) => {
    const [form] = Form.useForm();

    //! this is used to pass the function to code(parent component) //
    useImperativeHandle(ref, () => ({
        showAlert(values) {
            console.log("testing", form.getFieldValue())
            console.log(Object.values(form.getFieldsValue()));
        },
    }))

    return (
        <>
            {console.log(props.forms.lenght)}
            <div className="main">
                <Form form={form}>
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