import React from "react";
import { Button, Checkbox, Form, Input, Col, Row } from "antd";
import { Typography } from "antd";
const { Title } = Typography;

function ApplyFilter() {
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
            <Title level={5}>Save Wb</Title>
            </Col>
      </Row>
      

      <Form.Item
        label="Nombre de la hoja"
        name="sheetName"
        rules={[
          {
            required: true,
            message: "Porfavor indica el nombre de la hoja",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Indice de la columna"
        name="colIndex"
        rules={[
          {
            required: true,
            message: "Porfavor indica el indice la columna",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Con el Criterio"
        name="criterion"
        rules={[
          {
            required: true,
            message: "Porfavor indica el criterio",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Nombre de la variable"
        name="variable"
        rules={[
          {
            required: true,
            message: "Porfavor indica el nombre de la variable",
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

export default ApplyFilter;