import React, { useState, useEffect } from "react";
import { Button, Form, Input, Col, Row, Typography, Card, Popover, Tabs, Modal } from "antd";
import "./RemoveDuplicate.css"
import "../Write/ExcelWrite.css"
import data from '../../syntax.json'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';



let id = Date.now();
const { Title } = Typography;
const { Meta } = Card;
const buttonWidth = 70;

const description = (
    <>
        {data.fridaExcelReadersSyntaxRemoveDuplicate.Description}
    </>
);

const parameters = (
    <>
        {data.fridaExcelReadersSyntaxRemoveDuplicate.Parameters}
    </>
);

const syntax = (
    <>
        {data.fridaExcelReadersSyntaxRemoveDuplicate.Syntax1}<br />
        {data.fridaExcelReadersSyntaxRemoveDuplicate.Syntax2}<br />
        {data.fridaExcelReadersSyntaxRemoveDuplicate.Syntax3}<br />
        {data.fridaExcelReadersSyntaxRemoveDuplicate.Syntax4}<br />
    </>
);

const examples = (
    <>
        {data.fridaExcelReadersSyntaxRemoveDuplicate.Example1}<br />
        {data.fridaExcelReadersSyntaxRemoveDuplicate.Example2}<br />
        {data.fridaExcelReadersSyntaxRemoveDuplicate.Example3}<br />
    </>
);

function RemoveDuplicate() {
    const onFinish = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const [click, setClick] = useState(false);
    const [inputs, setInputs] = useState([
        <>
            <Row>
                <Col span={16}>
                    <Form.Item
                        label="RemoveDuplicates from"
                        name={[`WSname` + id, "WSname"]}
                        rules={[
                            {
                                required: true,
                                message: "Please input the worksheet name"
                            }]}
                    >
                        <Input type="text" placeholder="<worksheetKey>" />
                    </Form.Item>
                </Col>
            </Row>
        </>
    ]);

    const [click2, setClick2] = useState(false);
    const [inputs2, setInputs2] = useState([
        <>
            <Row>
                <Col span={12}>
                    <Form.Item
                        label="RemoveDuplicates from"
                        name={[`WSname` + id, "WSname"]}
                        rules={[
                            {
                                required: true,
                                message: "Please input the worksheet name"
                            }]}
                    >
                        <Input type="text" placeholder="<worksheetKey>" />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        label="with_header"
                        name={[`header` + id, "header"]}
                        rules={[
                            {
                                required: true,
                                message: "Please input the header"
                            }]}
                    >
                        <Input type="text" placeholder="<hasHeader>" />
                    </Form.Item>
                </Col>
            </Row>
        </>
    ]);

    const [click3, setClick3] = useState(false);
    const [inputs3, setInputs3] = useState([
        <>
            <Row>
                <Col span={13}>
                    <Form.Item
                        label="RemoveDuplicates from"
                        name={[`WSname` + id, "WSname"]}
                        rules={[
                            {
                                required: true,
                                message: "Please input the worksheet name"
                            }]}
                    >
                        <Input type="text" placeholder="<worksheetKey>" />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        label="at"
                        name={[`at` + id, "at"]}
                        rules={[
                            {
                                required: true,
                                message: "Please input the column index"
                            }]}
                    >
                        <Input type="text" placeholder="<columnIndex>" />
                    </Form.Item>
                </Col>
            </Row>
        </>
    ]);

    //TODO: syntax #4

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

    const add = () => {
        setInputs([...inputs,
        <Row>
            <Col span={16}>
                <Form.Item
                    label="RemoveDuplicates from"
                    name={[`WSname` + id, "WSname"]}
                    rules={[
                        {
                            required: true,
                            message: "Please input the worksheet name"
                        }]}
                >
                    <Input type="text" placeholder="<worksheetKey>" />
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
        setClick(true);
    }

    const add2 = () => {
        setInputs2([...inputs2,
        <Row>
            <Col span={12}>
                <Form.Item
                    label="RemoveDuplicates from"
                    name={[`WSname` + id, "WSname"]}
                    rules={[
                        {
                            required: true,
                            message: "Please input the worksheet name"
                        }]}
                >
                    <Input type="text" placeholder="<worksheetKey>" />
                </Form.Item>
            </Col>
            <Col span={8}>
                <Form.Item
                    label="with_header"
                    name={[`header` + id, "header"]}
                    rules={[
                        {
                            required: true,
                            message: "Please input the header"
                        }]}
                >
                    <Input type="text" placeholder="<hasHeader>" />
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
        setClick(true);
    }

    const add3 = () => {
        setInputs3([...inputs3,
        <Row>

            <Col span={16}>
                <Form.Item
                    label="at"
                    name={[`at` + id, "at"]}
                    rules={[
                        {
                            required: true,
                            message: "Please input the column index"
                        }]}
                >
                    <Input type="text" placeholder="<columnIndex>" />
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
        setClick(true);
    }

    const [form] = Form.useForm();
    useEffect(() => {
        id = Date.now();
        setClick(false);
    }, [click])

    const [open, setOpen] = useState(false);
    const [closed, setclosed] = useState(false);

    return (
        <>
            <div>
                <Card hoverable style={{ width: 240 }} cover={<img alt="excel remove duplicate" src="../../../../removeduplicate.webp" />} onClick={() => setOpen(true)} maskClosable={true}>
                    <Meta title="Remove Duplicate" description="Removes the duplicate rows from a given sheet." />
                </Card>
                <Modal
                    title="Remove Duplicate"
                    centered
                    open={open}
                    onOk={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                    width={900}
                >
                    <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                        <Row justify="center">
                            <Col>
                                <Title level={5}>RemoveDuplicate</Title>
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
                            <Tabs.TabPane tab="Syntax 3" key="3">
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
                            <Tabs.TabPane tab="Syntax 4" key="4">
                                Syntax 4
                            </Tabs.TabPane>
                        </Tabs>
                    </Form>
                </Modal>
            </div>
        </>
    );
}

export default RemoveDuplicate;