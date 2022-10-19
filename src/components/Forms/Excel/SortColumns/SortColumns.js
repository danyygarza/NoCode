import React from "react";
import { Button, Checkbox, Form, Input, Col, Row, Popover } from "antd";
import { Typography } from "antd";
import "../Write/ExcelWrite.css"
import data from '../../syntax.json'

const { Title } = Typography;
const buttonWidth = 70;

const description = (
  <>
    {data.fridaExcelReadersSyntaxSortColumns.Description}
  </>
);

const parameters = (
  <>
    {data.fridaExcelReadersSyntaxSortColumns.Parameters}
  </>
);

const syntax = (
  <>
    {data.fridaExcelReadersSyntaxSortColumns.Syntax1}<br />
    {data.fridaExcelReadersSyntaxSortColumns.Syntax2}<br />
  </>
);

const examples = (
  <>
    {data.fridaExcelReadersSyntaxSortColumns.Example1}<br />
    {data.fridaExcelReadersSyntaxSortColumns.Example2}<br />
    {data.fridaExcelReadersSyntaxSortColumns.Example3}<br />
  </>
);


function SortColumns() {
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
          <Title level={5}>SortColumns</Title>
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
        label="Orden"
        name="colInorderdex"
        rules={[
          {
            required: true,
            message: "Porfavor indica el orden",
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

export default SortColumns;