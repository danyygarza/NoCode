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
  Space,
} from "antd";
const { Title } = Typography;
const { Option } = Select;

function CopyColumn() {
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
          <Title level={5}>Copiar Columna</Title>
        </Col>
      </Row>
      <Row>
        <Col span={11}>
          <Form.Item
            label="Libro de origen"
            name="bookOrigin"
            rules={[
              {
                required: true,
                message: "Porfavor inndicar el libro de origen",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={11}>
          <Form.Item
            label="Indice de Columna de origen "
            name="originColIndex"
            rules={[
              {
                required: true,
                message: "Porfavor escribir el Indice de la Columna de origen",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={11}>
          <Form.Item
            label="Offset de fila de origen"
            name="sheetName"
            rules={[
              {
                required: true,
                message: "Porfavor escribir el offset de la Columna de origen",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={11}>
          <Form.Item
            label="Libro de destino"
            name="endBook"
            rules={[
              {
                required: true,
                message: "Porfavor ingresa el libreo de destino",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={11}>
          <Form.Item
            label="Indice de columna de destino"
            name="endColIndex"
            rules={[
              {
                required: true,
                message: "Porfavor escribir  indice de la columna de destino",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>


        <Col span={11}>
          <Form.Item
            label="Offset de fila de destino"
            name="endRowIndex"
            rules={[
              {
                required: true,
                message: "Porfavor escribir el ofsset de la fila de destino",
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

export default CopyColumn;