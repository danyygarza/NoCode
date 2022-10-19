import React from "react";
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

    return (
        <>
            <Row justify="center">
                <Col span={8}>
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
            <Form
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

                <Row>


                    <Col span={8}>
                        <Form.Item
                            label="Hoja de Excel"
                            name="sheetName"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input the sheet name",
                                },
                            ]}
                        >

                            <Input />
                        </Form.Item>
                    </Col>

                    <Col span={8}>
                        <Form.Item
                            label="Indice de columna"
                            name="colIndex"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input the col index",
                                },
                            ]}
                        >

                            <Input />
                        </Form.Item>
                    </Col>

                </Row>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                </Form.Item>
            </Form></>
    );
}

export default RemoveDuplicate;