import React from "react";
import { Button, Checkbox, Form, Input, Col, Row, Typography, InputNumber, Popover } from "antd";
import data from '../../syntax.json'
import "../Write/ExcelWrite.css"

const { Title } = Typography;
const buttonWidth = 70;

const description = (
  <>
    {data.fridaExcelReadersSyntaxNewWorkbook.Description}
  </>
);

const parameters = (
  <>
    {data.fridaExcelReadersSyntaxNewWorkbook.Parameters}
  </>
);

const syntax = (
  <>
    {data.fridaExcelReadersSyntaxNewWorkbook.Syntax1}<br />
    {data.fridaExcelReadersSyntaxNewWorkbook.Syntax2}<br />
    {data.fridaExcelReadersSyntaxNewWorkbook.Syntax3}<br />
  </>
);

const examples = (
  <>
    {data.fridaExcelReadersSyntaxNewWorkbook.Example1}<br />
    {data.fridaExcelReadersSyntaxNewWorkbook.Example2}<br />
  </>
)

function NewWorkBook() {
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
          <Title level={5}>New Workbook</Title>
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
      <Form.Item
        label="Path"
        name="Path"
        rules={[
          {
            required: true,
            message: "Pofavor indicar el path",
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
            message: "Porfavor indicar el alias de la hoja",
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
            message: "Porfavor indicar el indice o nombre de la hoja",
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

export default NewWorkBook;