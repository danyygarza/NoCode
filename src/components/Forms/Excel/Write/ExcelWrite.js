import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react"
import { Form, Input, Checkbox, Button, Menu, Dropdown, Space, Col, Row, Typography, Popover } from 'antd'
import { MinusCircleOutlined, PlusOutlined, SmileOutlined, DownOutlined } from '@ant-design/icons';
import { Done, Splitscreen } from "@mui/icons-material";
import Test from "../../Test/test";
import "../RemoveDuplicate/RemoveDuplicate.css";
import data from '../../syntax.json'

let id = Date.now();
const { Title } = Typography;
const buttonWidth = 70;

const description = (
    <>
        {data.fridaExcelReadersSyntaxWrite.Description}
    </>
);

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
                        <Input type="text" placeholder={"<Something>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>

                <Col span={7}>
                    <Form.Item
                        name={[`in` + id, "in"]}
                        label="in"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<WorksheetKey>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>
                <Col span={7}>
                    <Form.Item
                        name={[`cell` + id, "cell"]}
                        label="Cell"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<ColRow>"} onChange={props.onChange} />
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
            <Col span={7}>
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
            <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Row justify="center">
                    <Col>
                        <Title level={5}>ExcelWrite</Title>
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

    )

};


export default ExcelWrite