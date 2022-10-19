import React, { useState, useEffect } from "react";
import {
    Button,
    Form,
    Input,
    Col,
    Row,
    Typography,
    DatePicker,
    Select,
    Space,
    Popover
} from "antd";
import "./RemoveDuplicate.css"
import "../Write/ExcelWrite.css"
import data from '../../syntax.json'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';



let id = Date.now();
const { Title } = Typography;
const { Option } = Select;
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

    const remove = () => {
        const values = [...inputs];
        values.splice = (id, 1);
        setInputs(values);
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

    const [form] = Form.useForm();
    useEffect(() => {
        id = Date.now();
        setClick(false);
    }, [click])

    return (
        <>
            <div>
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
        </>
    );
}

export default RemoveDuplicate;