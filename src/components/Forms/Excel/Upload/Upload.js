import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input, Col, Row, Typography, InputNumber, Popover } from "antd";
import "../RemoveDuplicate/RemoveDuplicate.css"
import data from '../../syntax.json'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

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

    const examples = (
        <>
            {data.fridaExcelReadersSyntaxUploadFile.Example1}<br />
            {data.fridaExcelReadersSyntaxUploadFile.Example2}<br />
            {data.fridaExcelReadersSyntaxUploadFile.Example3}<br />
        </>

    );

    const [click, setClick] = useState(false);
    const [inputs, setInputs] = useState([
        <>
            <Row>
                <Col span={8}>
                    <Form.Item
                        name={[`name` + id, "name"]}
                        label="Path"
                        rules={[
                            {
                                required: true,
                                message: "Porfavor indicar el path",
                            },
                        ]}
                    >
                        <Input type="text" placeholder=""/>
                    </Form.Item>
                </Col>
                <Col span={8}>
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
                </Col>
                <Col span={8}>
                    <Form.Item
                        label="Sheet name"
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
                </Col>
            </Row>
        </>


    ]);

    const remove = () => {
        const values = [...inputs];
        values.splice = (id, 1);
        setInputs(values);
    }

    const add = () => {
        setInputs([...inputs,
        <Row>
            <Col span={8}>
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
            </Col>
            <Col span={8}>
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
            </Col>
            <Col span={8}>
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
            </Col>
            <Form.Item>
                <Button
                    type="solid"
                    onClick={() => remove()}
                    shape="circle"
                    icon={<MinusCircleOutlined />}
                >
                </Button>
            </Form.Item>
        </Row>])
        setClick(true);
    }
    const [form] = Form.useForm();
    useEffect(() => {
        id = Date.now();
        setClick(false);
    }, [click])

    return (
        <div>
            <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Row justify="center">
                    <Col>
                        <Title level={5}>UploadFile</Title>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="demo">
                            <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
                                <Popover placement="topLeft" title="Description" content={description} trigger="click" className='popover-position'>
                                    <Button>Description</Button>
                                </Popover>
                                <Popover placement="topLeft" title="Parameters" content={parameters} trigger="click" className='popover-position'>
                                    <Button>Parameters</Button>
                                </Popover>
                                <Popover placement="top" title="Syntax" content={syntax} trigger="click" className='popover-position'>
                                    <Button>Syntax</Button>
                                </Popover>
                                <Popover placement="topRight" title="Examples" content={examples} trigger="click" >
                                    <Button>Examples</Button>
                                </Popover>
                            </div>
                        </div>
                    </Col>
                </Row>
                {inputs.map((input) => {
                    return (input)
                })}
                <Row>
                    <Col offset={12}>
                        <Button
                            type="dashed"
                            onClick={() => add()}
                            shape="circle"
                            icon={<PlusOutlined />}
                        >
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default Upload;