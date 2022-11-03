import React, { useState, useForm, useEffect } from "react";
import { Form, Input, Card, Modal, Button, Popover, Row, Col, Tabs, Radio, Select, Space, Tooltip, Typography, } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useModalForm } from "sunflower-antd";
import "../../../App.css";
import Frida from "../../FRIDA/FRIDA";
import { push } from "@firebase/database";
const { Meta } = Card;
const { Option } = Select;
const options = [
    { id: 1, name: "var1" },
    { id: 2, name: "var2" },
    { id: 3, name: "var3" },
    { id: 4, name: "var4" },
];
const logicOperators = [
    { id: 1, name: "greater than ", operand: ">" },
    { id: 2, name: "less than", operand: "<" },
    { id: 3, name: "greater than equal to", operand: ">=" },
    { id: 4, name: "less than equal to ", operand: "<=" },
    { id: 5, name: "equal to", operand: "==" },
    { id: 6, name: "not equal to", operand: "!=" },
];

export default function IfElseForm(props) {
    const [open, setOpen] = useState(false);
    const [fridaString1, setfridaString1] = useState(new Map());
    const [fridaString2, setfridaString2] = useState(new Map());
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
            console.log(Object.values(data));
            let frida1 = ['if'];
            let frida2 = ['else'];
            frida1 = frida1.concat([].concat.apply([], Array.from(fridaString1.values())));

            console.log("FridaString 2 length ", Array.from(fridaString2.values()).length);
            Array.from(fridaString2.values()).length === 0 ? props.setCode(props.code.set(props.id, frida1)) : props.setCode(props.code.set(props.id, frida1.concat(["else"], [].concat.apply([], Array.from(fridaString2.values())))))
        },
        form,
    });


    return (
        <>
            <Card
                hoverable
                style={{ width: 800 }}
                cover={<img alt="excel icon" src="../../../../excelIcon.ico" />}
                onClick={() => setOpen(true)}
                maskClosable={true}
            >
                <Meta title="IF/ELSE" description="Conditional Actions." />
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
                    <Form layout="flex" {...formProps}>
                        <Row>
                            <Form.Item label="IF">
                                <Input.Group >
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
                                                <Option key={option.id}>{option.name}</Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        name={["if", "operador"]}
                                        noStyle
                                        rules={[
                                            {
                                                required: true,
                                                message: "Este campo es requerido",
                                            },
                                        ]}
                                    >
                                        <Select placeholder="Selecciona un operador">
                                            {logicOperators.map((option) => (
                                                <Option key={option.id}>{option.name}</Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                    <Form.Item
                                        name={["if", "variable/input"]}
                                        placeholder="variable/input"
                                        style={{
                                            maxWidth: 300,
                                        }}
                                        rules={[
                                            {
                                                required: true,
                                                message: "Este camp es requerido",
                                            },
                                        ]}
                                    >
                                        <Input></Input>
                                    </Form.Item>
                                </Input.Group>
                            </Form.Item>
                        </Row>
                        <Row>
                            <Col span={32}>
                                <Frida code={fridaString1} setCode={setfridaString1} id={id} setId={setId} />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={32}>
                                ELSE:
                                <Frida code={fridaString2} setCode={setfridaString2} id={id} setId={setId} />
                            </Col>
                        </Row>
                    </Form>
                </>

            </Modal>
        </>
    );
}
