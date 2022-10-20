import React, { useState, useEffect } from "react";
import { Button, Form, Input, Col, Row, Typography, Popover } from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import data from '../../syntax.json'



let id = Date.now();
const { Title } = Typography;
const buttonWidth = 70;

const description = (
  <>
    {data.fridaExcelReadersSyntaxSubstring.Description}
  </>
);

const parameters = (
  <>
    {data.fridaExcelReadersSyntaxSubstring.Parameters}
  </>
);

const syntax = (
  <>
    {data.fridaExcelReadersSyntaxSubstring.Syntax1}<br />
    {data.fridaExcelReadersSyntaxSubstring.Syntax2}<br />
  </>
);

const examples = (
  <>
    {data.fridaExcelReadersSyntaxSubstring.Example1}<br />
    {data.fridaExcelReadersSyntaxSubstring.Example2}<br />
  </>
)

function Substring() {
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
        <Col span={6}>
          <Form.Item
            label="Substring"
            name={[`substring` + id, "substring"]}
            rules={[
              {
                required: true,
                message: "Please indicate the substring",
              },
            ]}>
            <Input type="text" placeholder="<inputString>" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="start"
            name={[`start` + id, "start"]}
            rules={[
              {
                required: true,
                message: "Please indicate the start index",
              },
            ]}
          >
            <Input type="text" placeholder="<startIndex>" />
          </Form.Item>
        </Col>
        <Col span={7}>
          <Form.Item
            label="and save as"
            name={[`andSaveAs` + id, "andSaveAs"]}
            rules={[
              {
                required: true,
                message: "Please indicate the new variable name",
              },
            ]}
          >
            <Input type="text" placeholder="<newVarName>" />
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

  const add = () => {
    setInputs([...inputs,
    <Row>
      <Col span={6}>
        <Form.Item
          label="Substring"
          name={[`substring` + id, "substring"]}
          rules={[
            {
              required: true,
              message: "Please indicate the substring",
            },
          ]}
        >

          <Input type="text" placeholder="<inputString>" />
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label="start"
          name={[`start` + id, "start"]}
          rules={[
            {
              required: true,
              message: "Please indicate the start index",
            },
          ]}
        >

          <Input type="text" placeholder="<startIndex>" />
        </Form.Item>
      </Col>
      <Col span={7}>
        <Form.Item
          label="and save as"
          name={[`andSaveAs` + id, "andSaveAs"]}
          rules={[
            {
              required: true,
              message: "Please indicate the new variable name",
            },
          ]}
        >

          <Input type="text" placeholder="<newVarName>" />
        </Form.Item>
      </Col>
      <Button
        type="solid"
        onClick={() => remove()}
        shape="circle"
        icon={<MinusCircleOutlined />}
      >
      </Button>
    </Row>
    ])
    setClick(true);
  }

  const [form] = Form.useForm();

  useEffect(() => {
    id = Date.now();
    setClick(false);
  }, [click])


  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
      <Row justify="center">
        <Col>
          <Title level={5}>Substring</Title>
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
    </Form>
  );
}

export default Substring;