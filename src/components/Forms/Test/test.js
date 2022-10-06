import { MinusCircleOutlined, PlusOutlined, SmileOutlined, DownOutlined } from '@ant-design/icons';
import { Spa } from '@mui/icons-material';
import { Form, Input, Checkbox, Button, Menu, Dropdown, Space, Col, Row } from 'antd'
import React, { useState } from 'react';

const change = (event) => {
    console.log(event.target.value);
}

function Test() {
    return (
        <div style={{background:"white"}}>
        <Row>
            <Col span={12}>
                <Form.Item
                    label="Something should go here"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"testing1"} onChange={change} addonBefore="this is a really long text to try" />
                </Form.Item>
            </Col>

            <Col span={12}>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"testing2"} onChange={change} addonBefore="Excel" />
                </Form.Item>
            </Col>
        </Row>
        </div>

    )
};

export default Test;    