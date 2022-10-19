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
  Popover
} from "antd";
import data from '../../syntax.json'
import "../Write/ExcelWrite.css"


const { Title } = Typography;
const { Option } = Select;
const buttonWidth = 70;

const description = (
  <>
    {data.fridaExcelReadersSyntaxInsertColumn.Description}
  </>
);

const parameters = (
  <>
    {data.fridaExcelReadersSyntaxInsertColumn.Parameters}
  </>
);

const syntax = (
  <>
    {data.fridaExcelReadersSyntaxInsertColumn.Syntax1}
  </>
);

const examples = (
  <>
    {data.fridaExcelReadersSyntaxInsertColumn.Example1}
  </>
);


function InsertColumn() {
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
          <Title level={5}>Insertar Columna</Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="demo">
            <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
              <Popover placement="topLeft" title="Description" content={description} trigger="click" className='popover-position'>
                <Button>Description</Button>
              </Popover>
              <Popover placement="topLeft" title="Parameters" content={parameters} trigger="click" className='popover-position'>
                <Button>Parameters</Button>
              </Popover>
              <Popover placement="top" title="Syntax" content={syntax} trigger="click" className='popover-position'>
                <Button>Syntax</Button>
              </Popover>
              <Popover placement="topRight" title="Examples" content={examples} trigger="click" >
                <Button>Examples</Button>
              </Popover>
            </div>
          </div>
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
                message: "Porfavor indicar el nombre del libro",
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
                message: "Porfavor indicar el indice de la columna",
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

export default InsertColumn;