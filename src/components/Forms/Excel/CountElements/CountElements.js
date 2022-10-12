import React from "react";
import { Button, Checkbox, Form, Input, Col, Row } from "antd";
import { Typography } from "antd";
const { Title } = Typography;

function CountElements() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
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
      <Row justify="center">
            <Col >
            <Title level={5}>CountElements</Title>
            </Col>
      </Row>
      

      <Form.Item
        label="Contar elementos en la variable"
        name="countElements"
        rules={[
          {
            required: true,
            message: "Porfavor llenar campo",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Guardar variable como"
        name="variable"
        rules={[
          {
            required: true,
            message: "Porfavor indica como guardar la variable",
          },
        ]}
      >
        <Input />
      </Form.Item>

      

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        
      </Form.Item>
    </Form>
  );
}

export default CountElements;