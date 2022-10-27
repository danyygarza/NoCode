import React, { useState, useEffect } from "react";
import { Button,  Form, Input, Col, Row, Card, Popover, Tabs, Modal } from "antd";
import "../RemoveDuplicate/RemoveDuplicate.css"
import data from '../../syntax.json'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


let id = Date.now();
const { Meta } = Card;

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
            {data.fridaExcelReadersSyntaxUploadFile.Description}
        </>
    );

    const parameters = (
        <>
            {data.fridaExcelReadersSyntaxUploadFile.Parameters}
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
                <Col span={10}>
                    <Form.Item
                        name={[`path` + id, "path"]}
                        label="LoadWBook"
                        rules={[{ required: true, message: 'Please input the workbook path!' }]}
                    >
                        <Input type="text" placeholder={"<workbookPath>"} />
                    </Form.Item>
                </Col>

                <Col span={8}>
                    <Form.Item
                        name={[`alias` + id, "alias"]}
                        label="as"
                        rules={[{ required: true, message: 'Please input your workbook alias!' }]}
                    >
                        <Input type="text" placeholder={"<workbookKey>"} />
                    </Form.Item>
                </Col>

            </Row>
        </>
    ]);

    const [inputs2, setInputs2] = useState([
        <>
            <Row>
                <Col span={6}>
                    <Form.Item
                        name={[`path` + id, "path"]}
                        label="LoadWB"
                        rules={[{ required: true, message: 'Please input the workbook path!' }]}
                    >
                        <Input type="text" placeholder={"<workbookPath>"} />
                    </Form.Item>
                </Col>
                <Col span={5}>
                    <Form.Item
                        name={[`alias` + id, "alias"]}
                        label="as"
                        rules={[{ required: true, message: 'Please input your workbook alias!' }]}
                    >
                        <Input type="text" placeholder={"<workbookKey>"} />
                    </Form.Item>
                </Col>
                <Col span={9}>
                    <Form.Item
                        name={[`parameters` + id, "parameters"]}
                        label="with_parameters UpdateLinks:"
                        rules={[{ required: true, message: 'Please input your workbook alias!' }]}
                    >
                        <Input type="text" placeholder={"<updLinks>"} />
                    </Form.Item>
                </Col>
            </Row>
        </>
    ]);

    const [inputs3, setInputs3] = useState([
        <>
            <Row>
                <Col span={6}>
                    <Form.Item
                        name={[`path` + id, "path"]}
                        label="LoadWB"
                        rules={[{ required: true, message: 'Please input the workbook path!' }]}
                    >
                        <Input type="text" placeholder={"<workbookPath>"} />
                    </Form.Item>
                </Col>
                <Col span={5}>
                    <Form.Item
                        name={[`alias` + id, "alias"]}
                        label="as"
                        rules={[{ required: true, message: 'Please input your workbook alias!' }]}
                    >
                        <Input type="text" placeholder={"<workbookKey>"} />
                    </Form.Item>
                </Col>
                <Col span={9}>
                    <Form.Item
                        name={[`parameters` + id, "parameters"]}
                        label="with_parameters Password:"
                        rules={[{ required: true, message: 'Please input your workbook alias!' }]}
                    >
                        <Input type="text" placeholder={"<password>"} />
                    </Form.Item>
                </Col>
            </Row>
        </>
    ]);

    const [inputs4, setInputs4] = useState([
        <>
            <Row>
                <Col span={5}>
                    <Form.Item
                        name={[`path` + id, "path"]}
                        label="LoadWB"
                        rules={[{ required: true, message: 'Please input the workbook path!' }]}
                    >
                        <Input type="text" placeholder={"<workbookPath>"} />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item
                        name={[`alias` + id, "alias"]}
                        label="as"
                        rules={[{ required: true, message: 'Please input your workbook alias!' }]}
                    >
                        <Input type="text" placeholder={"<workbookKey>"} />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        name={[`parameters` + id, "parameters"]}
                        label="with_parameters Password:"
                        rules={[{ required: true, message: 'Please input your workbook alias!' }]}
                    >
                        <Input type="text" placeholder={"<password>"} />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item
                        name={[`parameters` + id, "parameters"]}
                        label="UpdateLinks:"
                        rules={[{ required: true, message: 'Please input your workbook alias!' }]}
                    >
                        <Input type="text" placeholder={"<updLinks>"} />
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

    const remove2 = () => {
        const values = [...inputs2];
        values.splice = (id, 1);
        setInputs2(values);
    }
    const remove3 = () => {
        const values = [...inputs3];
        values.splice = (id, 1);
        setInputs3(values);
    }
    const remove4 = () => {
        const values = [...inputs4];
        values.splice = (id, 1);
        setInputs4(values);
    }

    const add = () => {
        setInputs([...inputs,
        <Row>
            <Col span={10}>
                <Form.Item
                    name={[`path` + id, "path"]}
                    label="LoadWBook"
                    rules={[{ required: true, message: 'Please input the workbook path!' }]}
                >
                    <Input type="text" placeholder={"<workbookPath>"} />
                </Form.Item>
            </Col>

            <Col span={8}>
                <Form.Item
                    name={[`alias` + id, "alias"]}
                    label="as"
                    rules={[{ required: true, message: 'Please input your workbook alias!' }]}
                >
                    <Input type="text" placeholder={"<workbookKey>"} />
                </Form.Item>
            </Col>
            <Button
                type="solid"
                onClick={() => remove()}
                shape="circle"
                icon={<MinusCircleOutlined />}
            >
            </Button>
        </Row>])

    }

    const add2 = () => {
        setInputs2([...inputs2,
        <Row>
            <Col span={6}>
                <Form.Item
                    name={[`path` + id, "path"]}
                    label="LoadWB"
                    rules={[{ required: true, message: 'Please input the workbook path!' }]}
                >
                    <Input type="text" placeholder={"<workbookPath>"} />
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item
                    name={[`alias` + id, "alias"]}
                    label="as"
                    rules={[{ required: true, message: 'Please input your workbook alias!' }]}
                >
                    <Input type="text" placeholder={"<workbookKey>"} />
                </Form.Item>
            </Col>
            <Col span={9}>
                <Form.Item
                    name={[`parameters` + id, "parameters"]}
                    label="with_parameters UpdateLinks:"
                    rules={[{ required: true, message: 'Please input your workbook alias!' }]}
                >
                    <Input type="text" placeholder={"<updLinks>"} />
                </Form.Item>
            </Col>
            <Button
                type="solid"
                onClick={() => remove2()}
                shape="circle"
                icon={<MinusCircleOutlined />}
            >
            </Button>
        </Row>])

    }

    const add3 = () => {
        setInputs3([...inputs3,
        <Row>
            <Col span={6}>
                <Form.Item
                    name={[`path` + id, "path"]}
                    label="LoadWB"
                    rules={[{ required: true, message: 'Please input the workbook path!' }]}
                >
                    <Input type="text" placeholder={"<workbookPath>"} />
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item
                    name={[`alias` + id, "alias"]}
                    label="as"
                    rules={[{ required: true, message: 'Please input your workbook alias!' }]}
                >
                    <Input type="text" placeholder={"<workbookKey>"} />
                </Form.Item>
            </Col>
            <Col span={9}>
                <Form.Item
                    name={[`parameters` + id, "parameters"]}
                    label="with_parameters Password:"
                    rules={[{ required: true, message: 'Please input your workbook alias!' }]}
                >
                    <Input type="text" placeholder={"<password>"} />
                </Form.Item>
            </Col>
            <Button
                type="solid"
                onClick={() => remove3()}
                shape="circle"
                icon={<MinusCircleOutlined />}
            >
            </Button>
        </Row>])

    }

    const add4 = () => {
        setInputs4([...inputs4,
        <Row>
            <Col span={5}>
                <Form.Item
                    name={[`path` + id, "path"]}
                    label="LoadWB"
                    rules={[{ required: true, message: 'Please input the workbook path!' }]}
                >
                    <Input type="text" placeholder={"<workbookPath>"} />
                </Form.Item>
            </Col>
            <Col span={4}>
                <Form.Item
                    name={[`alias` + id, "alias"]}
                    label="as"
                    rules={[{ required: true, message: 'Please input your workbook alias!' }]}
                >
                    <Input type="text" placeholder={"<workbookKey>"} />
                </Form.Item>
            </Col>
            <Col span={6}>
                <Form.Item
                    name={[`parameters` + id, "parameters"]}
                    label="with_parameters Password:"
                    rules={[{ required: true, message: 'Please input your workbook alias!' }]}
                >
                    <Input type="text" placeholder={"<password>"} />
                </Form.Item>
            </Col>
            <Col span={4}>
                <Form.Item
                    name={[`parameters` + id, "parameters"]}
                    label="UpdateLinks:"
                    rules={[{ required: true, message: 'Please input your workbook alias!' }]}
                >
                    <Input type="text" placeholder={"<updLinks>"} />
                </Form.Item>
            </Col>
            <Button
                type="solid"
                onClick={() => remove4()}
                shape="circle"
                icon={<MinusCircleOutlined />}
            >
            </Button>
        </Row>])

    }


    const [form] = Form.useForm();
    useEffect(() => {
        id = Date.now();
        setClick(false);
    }, [click])

    const [open, setOpen] = useState(false);

    return (
        <div>
            <Card hoverable style={{ width: 800 }} cover={<img alt="excel upload" src="../../../../uploadicon.png" />} onClick={() => setOpen(true)} MaskClosable={true}>
                <Meta title="Excel Upload" description="Opens a given workbook and saves a variable for future reference." />
            </Card>
            <Modal
                title="Load Workbook"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={900}
            >
                <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
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
                    <Tabs defaultActiveKey="1">
                        <Tabs.TabPane tab="Syntax 1" key="1">
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
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Syntax 2" key="2">
                            {inputs3.map((input3) => {
                                return (input3)
                            })}
                            <Row>
                                <Col offset={12}>
                                    <Button
                                        type="dashed"
                                        onClick={() => add3()}
                                        shape="circle"
                                        icon={<PlusOutlined />}
                                    >
                                    </Button>
                                </Col>
                            </Row>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Syntax 3" key="3">
                            {inputs2.map((input2) => {
                                return (input2)
                            })}
                            <Row>
                                <Col offset={12}>
                                    <Button
                                        type="dashed"
                                        onClick={() => add2()}
                                        shape="circle"
                                        icon={<PlusOutlined />}
                                    >
                                    </Button>
                                </Col>
                            </Row>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Syntax 4" key="4">
                            {inputs4.map((input4) => {
                                return (input4)
                            })}
                            <Row>
                                <Col offset={12}>
                                    <Button
                                        type="dashed"
                                        onClick={() => add4()}
                                        shape="circle"
                                        icon={<PlusOutlined />}
                                    >
                                    </Button>
                                </Col>
                            </Row>
                        </Tabs.TabPane>
                    </Tabs>
                </Form>
            </Modal>
        </div>
    );
}

export default Upload;