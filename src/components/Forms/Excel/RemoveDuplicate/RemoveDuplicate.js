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
    Space
} from "antd";
import "./RemoveDuplicate.css"


const { Title } = Typography;
const { Option } = Select;

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