import React, { useState, useEffect } from "react"
import { Form, Input, Button, Col, Row, Typography, Popover, Tabs } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import "../RemoveDuplicate/RemoveDuplicate.css";
import data from '../../syntax.json'


let id = Date.now();
const { Title } = Typography;
const buttonWidth = 70;



const parameters = (
    <>
        {data.fridaExcelReadersSyntaxWrite.Parameters}
    </>
);

const syntax = (
    <>
        {data.fridaExcelReadersSyntaxWrite.Syntax1}<br />
        {data.fridaExcelReadersSyntaxWrite.Syntax2}<br />
        {data.fridaExcelReadersSyntaxWrite.Syntax3}<br />
        {data.fridaExcelReadersSyntaxWrite.Syntax4}<br />
    </>
);

const examples = (
    <>
        {data.fridaExcelReadersSyntaxWrite.Example1}<br />
        {data.fridaExcelReadersSyntaxWrite.Example2}<br />
        {data.fridaExcelReadersSyntaxWrite.Example3}<br />
        {data.fridaExcelReadersSyntaxWrite.Example4}<br />
        {data.fridaExcelReadersSyntaxWrite.Example5}<br />
        {data.fridaExcelReadersSyntaxWrite.Example6}<br />
        {data.fridaExcelReadersSyntaxWrite.Example7}<br />
    </>
)

function ExcelWrite(props) {

    console.log("submit in write is", props.submit)
    const [click, setClick] = useState(false);
    const [inputs, setInputs] = useState([
        <>
            <Row>
                <Col span={7}>
                    <Form.Item
                        name={[`write` + id, "write"]}
                        label="Write"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<something>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>

                <Col span={7}>
                    <Form.Item
                        name={[`in` + id, "in"]}
                        label="in"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<worksheetKey>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>
                <Col span={5}>
                    <Form.Item
                        name={[`cell` + id, "cell"]}
                        label="cell"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<ColRow>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>
            </Row>
        </>
    ]);
    const [click2, setClick2] = useState(false);
    const [inputs2, setInputs2] = useState([
        <>
            <Row>
                <Col span={5}>
                    <Form.Item
                        name={[`write` + id, "write"]}
                        label="Write"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<something>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>

                <Col span={4.5}>
                    <Form.Item
                        name={[`in` + id, "in"]}
                        label="in"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<worksheetKey>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item
                        name={[`cell` + id, "cell"]}
                        label="cell"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<ColRow>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>
                <Col span={5}>
                    <Form.Item
                        name={[`format` + id, "format"]}
                        label="with format"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<format>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>
            </Row>
        </>
    ]);

    const [click3, setClick3] = useState(false);
    const [inputs3, setInputs3] = useState([
        <>
            <Row>
                <Col span={4}>
                    <Form.Item
                        name={[`write` + id, "write"]}
                        label="Write"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<something>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>

                <Col span={4}>
                    <Form.Item
                        name={[`in` + id, "in"]}
                        label="in"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<worksheetKey>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item
                        name={[`cell` + id, "cell"]}
                        label="cell"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<ColRow>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item
                        name={[`format` + id, "format"]}
                        label="with format"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<format>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>
                <Col span={5}>
                    <Form.Item
                        name={[`source` + id, "source"]}
                        label="source"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<originalFormat>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>
            </Row>
        </>
    ]);

    const [click4, setClick4] = useState(false);
    const [inputs4, setInputs4] = useState([
        <>
            <Row>
                <Col span={4.5}>
                    <Form.Item
                        name={[`write` + id, "write"]}
                        label="Write"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<something>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>

                <Col span={4.5}>
                    <Form.Item
                        name={[`in` + id, "in"]}
                        label="in"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<worksheetKey>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item
                        name={[`row` + id, "row"]}
                        label="row"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<rowIndex>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>
                <Col span={5}>
                    <Form.Item
                        name={[`column` + id, "column"]}
                        label="and column"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<colIndex>"} onChange={props.onChange} />
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
            <Col span={7}>
                < Form.Item
                    name={[`write` + id, "write"]}
                    label="Write"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<Something>"} />
                </Form.Item >
            </Col>

            <Col span={7}>
                < Form.Item
                    name={[`in` + id, "in"]}
                    label="in"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<WorksheetKey>"} />
                </Form.Item >
            </Col>
            <Col span={5}>
                < Form.Item
                    name={[`cell` + id, "cell"]}
                    label="Cell"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<ColRow>"} />
                </Form.Item >
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
            <Col span={5}>
                <Form.Item
                    name={[`write` + id, "write"]}
                    label="Write"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<something>"} onChange={props.onChange} />
                </Form.Item>
            </Col>

            <Col span={4.5}>
                <Form.Item
                    name={[`in` + id, "in"]}
                    label="in"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<worksheetKey>"} onChange={props.onChange} />
                </Form.Item>
            </Col>
            <Col span={4}>
                <Form.Item
                    name={[`cell` + id, "cell"]}
                    label="cell"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<ColRow>"} onChange={props.onChange} />
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item
                    name={[`format` + id, "format"]}
                    label="with format"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<format>"} onChange={props.onChange} />
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
        setClick2(true);
    }

    const add3 = () => {
        setInputs3([...inputs3,
        <Row>
            <Col span={4}>
                <Form.Item
                    name={[`write` + id, "write"]}
                    label="Write"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<something>"} onChange={props.onChange} />
                </Form.Item>
            </Col>

            <Col span={4}>
                <Form.Item
                    name={[`in` + id, "in"]}
                    label="in"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<worksheetKey>"} onChange={props.onChange} />
                </Form.Item>
            </Col>
            <Col span={4}>
                <Form.Item
                    name={[`cell` + id, "cell"]}
                    label="cell"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<ColRow>"} onChange={props.onChange} />
                </Form.Item>
            </Col>
            <Col span={4}>
                <Form.Item
                    name={[`format` + id, "format"]}
                    label="with format"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<format>"} onChange={props.onChange} />
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item
                    name={[`source` + id, "source"]}
                    label="source"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<originalFormat>"} onChange={props.onChange} />
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
        setClick3(true);
    }

    const add4 = () => {
        setInputs4([...inputs4,
        <Row>
            <Col span={4.5}>
                <Form.Item
                    name={[`write` + id, "write"]}
                    label="Write"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<something>"} onChange={props.onChange} />
                </Form.Item>
            </Col>

            <Col span={4.5}>
                <Form.Item
                    name={[`in` + id, "in"]}
                    label="in"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<worksheetKey>"} onChange={props.onChange} />
                </Form.Item>
            </Col>
            <Col span={4}>
                <Form.Item
                    name={[`row` + id, "row"]}
                    label="row"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<rowIndex>"} onChange={props.onChange} />
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item
                    name={[`column` + id, "column"]}
                    label="and column"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<colIndex>"} onChange={props.onChange} />
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
        setClick4(true);
    }

    const [form] = Form.useForm();

    if (props.submit) {
        console.log('submitted')
        form.submit();
    }
    const onFinish = (values) => {
        console.log("Success:", values);
        props.setSubmit(false)
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
        props.setSubmit(false)
    };

    useEffect(() => {
        id = Date.now();
        setClick(false);
    }, [click])

    console.log(props.submit);

    return (
        <div>
            <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} id={id}>
                <Row justify="center">
                    <Col>
                        <Title level={5}>ExcelWrite</Title>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="demo">
                            <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
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
        </div>

    )

};


export default ExcelWrite