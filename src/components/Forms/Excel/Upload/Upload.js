import React from "react";
import { Button, Checkbox, Form, Input, Col, Row, Typography, InputNumber } from "antd";
import "../RemoveDuplicate/RemoveDuplicate.css"
import data from '../../syntax.json'

let id = Date.now();
const { Title } = Typography;

const buttonWidth = 70;

function Upload() {
    const onFinish = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const description = (
        <>
            {data.fridaExcelReadersSyntaxUploadFile.description}
        </>
    );

    const parameters = (
        <>
            {data.fridaExcelReadersSyntaxUploadFile.parameters}
        </>
    );

    const syntax = (
        <>
            {data.fridaExcelReadersSyntaxUploadFile.Syntax1}<br />
            {data.fridaExcelReadersSyntaxUploadFile.Syntax2}<br />
            {data.fridaExcelReadersSyntaxUploadFile.Syntax3}<br />
            {data.fridaExcelReadersSyntaxUploadFile.Syntax4}<br />
        </>
    );

    const exmaples = (
        <>
            {data.fridaExcelReadersSyntaxUploadFile.Example1}<br />
            {data.fridaExcelReadersSyntaxUploadFile.Example2}<br />
            {data.fridaExcelReadersSyntaxUploadFile.Example3}<br />
        </>

    )


    return (
        <>
            <Row justify="center">
                <Col span={8}>
                    <Title level={5}>UploadFile</Title>
                </Col>
            </Row><Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >

                <Form.Item
                    label="Path"
                    name="Path"
                    rules={[
                        {
                            required: true,
                            message: "Porfavor indicar el path",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Alias"
                    name="Alias"
                    rules={[
                        {
                            required: true,
                            message: "Please input the alias for your file",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Sheet number/name"
                    name="Sheet"
                    rules={[
                        {
                            required: true,
                            message: "Porfavor indicar el indice o nombre de la columna",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                </Form.Item>
            </Form>
        </>
    );
}

export default Upload;