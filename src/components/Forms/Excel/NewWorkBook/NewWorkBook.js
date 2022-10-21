import React, { useState, useEffect } from "react";
import { Button, Form, Input, Col, Row, Typography, Popover, Tabs } from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import data from '../../syntax.json'
import "../Write/ExcelWrite.css"


let id = Date.now();
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

  const [click, setClick] = useState(false);
  const [inputs, setInputs] = useState([
    <>
      <Row>
        <Col span={10}>
          <Form.Item
            label="NewWB in"
            name={[`path` + id, "path"]}
            rules={[
              {
                required: true,
                message: "Please indicate the workbook path",
              },
            ]}
          >
            <Input type="text" placeholder="<path>" />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item
            label="as"
            name={[`as` + id, "as"]}
            rules={[
              {
                required: true,
                message: "Porfavor indicar el alias de la hoja",
              },
            ]}
          >
            <Input type="text" placeholder="<workbookName>" />
          </Form.Item>
        </Col>
      </Row>
    </>
  ]);

  const [click2, setClick2] = useState(false);
  const [inputs2, setInputs2] = useState([
    <>
      <Row>
        <Col span={16}>
          <Form.Item
            label="NewWb create in"
            name={[`newWB` + id, "newWB"]}
            rules={[
              {
                required: true,
                message: "Please indicate the workbook path name",
              },
            ]}
          >
            <Input type="text" placeholder="<pathWithNameh>" />
          </Form.Item>
        </Col>
      </Row>
    </>
  ]);

  const remove = () => {
    const values = [...inputs];
    values.splice(id, 1);
    setInputs(values);
  }

  const remove2 = () => {
    const values = [...inputs2];
    values.splice(id, 1);
    setInputs2(values);
  }

  const add = () => {
    setInputs([...inputs,
    <Row>
      <Col span={10}>
        <Form.Item
          label="NewWB in"
          name={[`path` + id, "path"]}
          rules={[
            {
              required: true,
              message: "Please indicate the workbook path",
            },
          ]}
        >
          <Input type="text" placeholder="<path>" />
        </Form.Item>
      </Col>
      <Col span={10}>
        <Form.Item
          label="as"
          name={[`as` + id, "as"]}
          rules={[
            {
              required: true,
              message: "Porfavor indicar el alias de la hoja",
            },
          ]}
        >
          <Input type="text" placeholder="<workbookName>" />
        </Form.Item>
      </Col>
      <Button
        type="solid"
        onClick={() => remove()}
        shape="circle"
        icon={<MinusCircleOutlined />}
      >
      </Button>
    </Row>])
    setClick(true);
  }

  const add2 = () => {
    setInputs2([...inputs2,
    <Row>
      <Col span={16}>
        <Form.Item
          label="NewWb create in"
          name={[`newWB` + id, "newWB"]}
          rules={[
            {
              required: true,
              message: "Please indicate the workbook path name",
            },
          ]}
        >
          <Input type="text" placeholder="<pathWithNameh>" />
        </Form.Item>
      </Col>
      <Button
        type="solid"
        onClick={() => remove2()}
        shape="circle"
        icon={<MinusCircleOutlined />}
      >
      </Button>
    </Row>])
    setClick(true);
  }

  useEffect(() => {
    id = Date.now();
    setClick(false);
  }, [click])

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
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
      <Tabs desaultActiveKey="1" key="1">
        <Tabs.TabPane tab="Syntax 1" key="1">
          {inputs.map((input) => {
            return (input)
          })}
          <Row>
            <Col offset={12}>
              <Button
                type="dashed"
                onClick={() => add()}
                shape="circle"
                icon={<PlusOutlined />}
              >
              </Button>
            </Col>
          </Row>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Syntax 2" key="2">
          {inputs2.map((input2) => {
            return (input2)
          })}
          <Row>
            <Col offset={12}>
              <Button
                type="dashed"
                onClick={() => add2()}
                shape="circle"
                icon={<PlusOutlined />}
              >
              </Button>
            </Col>
          </Row>
        </Tabs.TabPane>
      </Tabs>
    </Form>
  );
}

export default NewWorkBook;