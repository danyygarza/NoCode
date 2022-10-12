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

function DefineVariable() {
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
          <Title level={5}>DefineVariable</Title>
        </Col>
      </Row>
      <Row>       

        
      <Col >
          <Form.Item
            label="Variable"
            name="variableName"
            rules={[
              {
                required: true,
                message: "Porfavor indica el nombre de la varable",
              },
            ]}
          >
            
            <Input />
          </Form.Item>
        </Col>
        
        <Col span={6}>
          <Form.Item
            label="Valor de variable"
            name="variable-value"
            rules={[
              {
                required: true,
                message: "Porfavor indica el valor de la variable",
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

export default DefineVariable;