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

function RemoveColumn() {
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
          <Title level={5}>Remove Column</Title>
        </Col>
      </Row>
      <Row>       

        
      <Col span={8}>
          <Form.Item
            label="Hoja de Excel"
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
        </Col>
        
        <Col span={8}>
          <Form.Item
            label="Indice de columna"
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

export default RemoveColumn;