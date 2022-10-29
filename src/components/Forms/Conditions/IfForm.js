import React, { useState, useForm, useEffect } from "react";
import {
  Form,
  Input,
  Card,
  Modal,
  Button,
  Popover,
  Row,
  Col,
  Tabs,
  Radio,
  Select,
  Space,
  Tooltip,
  Typography,
} from "antd";
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

export default function IfElseForm(props) {
  const [open, setOpen] = useState(false);
  const [variables, setVariables] = useState(["option"]);
  

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
    autoSubmitClose: true,
    autoResetForm: true,
    async submit({ username, email }) {
      console.log('beforeSubmit');
      await new Promise(r => setTimeout(r, 1000));
      console.log('afterSubmit', username, email);
      return 'ok';
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
          <p>submit: username email</p>
          <p>result: </p>
          <Form layout="flex" {...formProps}>
            <Row>
              <Form.Item label="IF">
                <Input.Group compact>
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
                      {options.map((option) => (
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
                      <Frida />
                    </Col>
                  </Row>
            <Row>
              <Col span={32}>
                ELSE:
                <Frida />
              </Col>
            </Row>
          </Form>
        </>
      </Modal>
    </>
  );
}
