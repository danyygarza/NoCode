import React, { useEffect, useState, useForm, forwardRef, useImperativeHandle } from 'react'
import { Form, Input, Checkbox, Button, Menu, Dropdown, Space, Col, Row } from 'antd'
import { MinusCircleOutlined, PlusOutlined, SmileOutlined, DownOutlined } from '@ant-design/icons';

//!Testing 
import Test from '../Test/test';
import ExcelWrite from './Write/ExcelWrite';
import ExcelWriteTest from './Write/ExcelWriteTest';
import { FormLabel } from '@mui/material';
import { ThirtyFpsSelect } from '@mui/icons-material';
const change = (event) => {
    console.log(event.target.value);
}

const Excel = forwardRef((props, ref) => {

    const [formFields, setFormFields] = useState([]);
    const [form] = Form.useForm();

    // useImperativeHandle(ref, () => ({
    //     showAlert(values) {
    //         console.log("testing")
    //         console.log(Object.values(form.getFieldsValue()));
    //     },

    // }))

    //!Drop down
    const menu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <a onClick={() => { addFields(1) }}>
                            test 1
                        </a>
                    ),
                },
                {
                    key: '2',
                    label: (
                        <a onClick={() => { addFields(2) }}>
                            test 2
                        </a>
                    ),
                },
                {
                    key: '3',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                            3rd menu item (disabled)
                        </a>
                    ),
                    disabled: true,
                },
                {
                    key: '4',
                    danger: true,
                    label: 'a danger item',
                },
            ]}
        />
    );


    const addFields = (key) => {
        switch (key) {
            case 1:
                setFormFields([...formFields, <ExcelWriteTest onChange={change} finish={props.finish} />]);
                console.log("key 1 was choosen");
                console.log(formFields)
                break;
            case 2:
                setFormFields([...formFields, <Test />]);
                console.log("key 2 was choosen");
                console.log(formFields)
                break;
            case 3:
             
                console.log(formFields)
                break;
            default:
                break;
        }
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    return (
        <div className="main">
            <Form form={form}>
                {formFields.lenght === 0 ? <h1>Empty</h1> : formFields.map((form) => {
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
            <Row>
                <Col span={12}>
                    <Dropdown overlay={menu}>
                        <a onClick={(event) => {
                            event.preventDefault();
                            console.log(event)
                        }}>
                            <Space>
                                Hover me
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </Col>
                <Col span={12}>
                    <Button type="primary" htmlType="submit" hidden="true" ref={this}>
                        Submit
                    </Button>
                </Col>
            </Row>
        </div >
    );
})

export default Excel