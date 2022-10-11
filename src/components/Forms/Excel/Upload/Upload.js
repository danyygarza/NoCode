import React from "react";
import { Button, Checkbox, Form, Input, Col, Row, Typography, InputNumber  } from "antd";
const { Title } = Typography;

function Upload() {
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

      <Form.Item
        label="Path"
        name="Path"
        rules={[
          {
            required: true,
            message: "Porfavor indicar el path",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Alias"
        name="Alias"
        rules={[
          {
            required: true,
            message: "Please input the alias for your file",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Sheet number/name"
        name="Sheet"
        rules={[
          {
            required: true,
            message: "Porfavor indicar el indice o nombre de la columna",
          },
        ]}
      >
        <Input/>
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

export default Upload;