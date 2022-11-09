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

function GetDate() {
  const onFinish = (values) => {
  };

  const onFinishFailed = (errorInfo) => {
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
          <Title level={5}>GetCurrentDate</Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Item
            label="Date"
            name="Date"
            rules={[
              {
                required: true,
                message: "Porfavor indica la fecha",
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
        </Col>

        <Col>
          <Form.Item
            label="Format"
            name="Format"
            rules={[
              {
                required: true,
                message: "Porfavor indica el formato de la fecha",
              },
            ]}
          >
            <Select
              defaultValue="dd/mm/yy"
              style={{
                width: 120,
              }}
            >
              <Option value="dd/mm/yy">dd/mm/yy</Option>
              <Option value="mm/dd/yy">dd/mm/yy</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            label="Guardar Como"
            name="SaveAs"
            rules={[
              {
                required: true,
                message: "Guarcar como",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Space></Space>
        
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

export default GetDate;