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
const { Title } = Typography;
const { Option } = Select;

function Substring() {
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
        <Col>
          <Title level={5}>Substring</Title>
        </Col>
      </Row>
      <Row>       

        
      <Col >
          <Form.Item
            label="String Inicial"
            name="inicialString"
            rules={[
              {
                required: true,
                message: "Porfavor indica el string inicial",
              },
            ]}
          >
            
            <Input />
          </Form.Item>
        </Col>
        
        <Col span={6}>
          <Form.Item
            label="Indice de inicio"
            name="inicialIndex"
            rules={[
              {
                required: true,
                message: "Porfavor indica el indice inicial",
              },
            ]}
          >
            
            <Input />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item
            label="Longitud del String"
            name="stringLength"
            rules={[
              {
                required: true,
                message: "Porfavor indica la longitud del string",
              },
            ]}
          >
            
            <Input />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item
            label="Guardar como"
            name="substring"
            rules={[
              {
                required: true,
                message: "Porfavor indica el nombre del substring",
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
    </Form>
  );
}

export default Substring;