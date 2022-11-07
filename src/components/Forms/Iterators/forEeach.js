import React, { useState, useForm, useEffect } from "react";
import { Form, Input, Card, Modal, Button, Popover, Row, Col, Tabs, Radio, Select, Space, Tooltip, Typography, } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useModalForm } from "sunflower-antd";
import "../../../App.css";
import Frida from "../../FRIDA/FRIDA";
const { Meta } = Card;
const { Option } = Select;
const options = [
    { id: 1, name: "var1" },
    { id: 2, name: "var2" },
    { id: 3, name: "var3" },
    { id: 4, name: "var4" },
];

export default function ForEach(props) {
    const [open, setOpen] = useState(false);
    const [fridaString1, setfridaString1] = useState(new Map());
    const [id, setId] = useState(0);
    const [form] = Form.useForm();
    const {
        modalProps,
        formProps,
        show,
        formLoading,
        formValues,
        formResult,
    } = useModalForm({
        defaultVisible: false,
        autoSubmitClose: false,
        autoResetForm: false,
        submit(data) {
            const tempData = Object.values(data);
            let frida1 = ['foreach ' + tempData.variable + " in range"];
            console.log("fridaString1", Array.from(fridaString1.values()));
            frida1 = frida1.concat([].concat.apply([], Array.from(fridaString1.values())));
            props.setCode(props.code.set(props.id, frida1.concat("end")))
        },
        form,
    });


    return (
        <>
            <Card
                hoverable
                style={{ width: 800 }}
                cover={<img alt="excel icon" src="../../../../img/foreach.png" />}
                onClick={() => setOpen(true)}
                maskClosable={true}
            >
                <Meta title="ForEach" description="Iterate an array of elements." />
            </Card>
            <Modal
                title="useModalForm"
                {...modalProps}
                open={open}
                onCancel={() => setOpen(false)}
                okText="submit"
                width={1200}
                height={800}
            >
                <>
                    <Form layout="flex" {...formProps}  >
                        <Row>
                            <Col>
                                <h3>foreach</h3>
                            </Col>
                            <Col offset={1}>
                                <Form.Item
                                    name={["if", "variable"]}
                                    noStyle
                                    rules={[
                                        {
                                            required: true,
                                            message: "este campo es requerido",
                                        },
                                    ]}
                                >
                                    <Select placeholder="Selecciona una variable">
                                        {options.map((option) => (
                                            <Option key={option.name}>{option.name}</Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Col>

                            <Col offset={1}>
                                <h3>in  range</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={32}>
                                <Frida code={fridaString1} setCode={setfridaString1} id={id} setId={setId} />
                            </Col>
                        </Row>
                    </Form>
                </>

            </Modal>
        </>
    );
}
