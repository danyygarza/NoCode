import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react"
import { Form, Input, Checkbox, Button, Menu, Dropdown, Space, Col, Row, Typography } from 'antd'
import { MinusCircleOutlined, PlusOutlined, SmileOutlined, DownOutlined } from '@ant-design/icons';
import { Done } from "@mui/icons-material";
import Test from "../../Test/test";
import "../RemoveDuplicate/RemoveDuplicate.css";

let id = Date.now();
const { Title } = Typography;


const ExcelWrite = forwardRef((props, ref) => {
    const [click, setClick] = useState(false);
    const [inputs, setInputs] = useState([
        <>
            <Row>
                <Col span={8}>
                    <Form.Item
                        name={[`write` + id, "write"]}
                        label="Write"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<Something>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>

                <Col span={8}>
                    <Form.Item
                        name={[`in` + id, "in"]}
                        label="in"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<WorksheetKey>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        name={[`cell` + id, "cell"]}
                        label="Cell"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<ColRow>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>
            </Row></>
    ]);


    const add = () => {
        setInputs([...inputs, <Row>
            <Col span={8}>
                < Form.Item
                    name={[`write` + id, "write"]}
                    label="Write"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<Something>"} />
                </Form.Item >
            </Col>

            <Col span={8}>
                < Form.Item
                    name={[`in` + id, "in"]}
                    label="in"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<WorksheetKey>"} />
                </Form.Item >
            </Col>
            <Col span={8}>
                < Form.Item
                    name={[`cell` + id, "cell"]}
                    label="Cell"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<ColRow>"} />
                </Form.Item >
            </Col>
        </Row>])
        setClick(true);
    }

    //
    useImperativeHandle(ref, () => ({
        showAlert(values) {
            console.log("pressing button from Excel write")
            form.submit()
        },
    }))

    const onFinish = (values) => {
        form.validateFields().then((test) => {
            console.log('Success:', values);
            console.log(Object.values(values))
            //! Logic to generate the FRIDA code from the component

        })
    };
    useEffect(() => {
        id = Date.now();
        setClick(false);
    }, [click])

    const [form] = Form.useForm();
    console.log(ref)
    return (
        <div>
            <Form form={form} onFinish={onFinish}>
                <Row justify="center">
                    <Col>
                        <Title level={5}>ExcelWrite</Title>
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

});


export default ExcelWrite