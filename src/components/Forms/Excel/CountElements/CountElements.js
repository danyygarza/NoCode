import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input, Col, Row, Popover } from "antd";
import { Typography } from "antd";
import data from '../../syntax.json'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


let id = Date.now();
const { Title } = Typography;

const buttonWidth = 70;

function CountElements() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const description = (
    <>
      {data.fridaExcelReadersSyntaxCountElements.Description}
    </>
  );

  const parameters = (
    <>
      {data.fridaExcelReadersSyntaxCountElements.Parameters}
    </>
  );

  const syntax = (
    <>
      {data.fridaExcelReadersSyntaxCountElements.Syntax1}
    </>
  );

  const examples = (
    <>
      {data.fridaExcelReadersSyntaxCountElements.Example1}<br />
      {data.fridaExcelReadersSyntaxCountElements.Example2}<br />
      {data.fridaExcelReadersSyntaxCountElements.Example3}<br />
    </>
  );

  const [click, setClick] = useState(false);
  const [inputs, setInputs] = useState([
    <>
      <Row>
        <Col span={10}>
          <Form.Item
            label="CountItems in"
            name={[`countitemsin` + id, "countitemsin"]}
            rules={[
              {
                required: true,
                message: "Porfavor fill in the form",
              },
            ]}
          >
            <Input type="text" placeholder="<varName>" />
          </Form.Item>
        </Col>
        <Col span={10}>
          <Form.Item
            label="and save_as"
            name={[`variable` + id, "variable"]}
            rules={[
              {
                required: true,
                message: "Please indicate how to save the variable as",
              },
            ]}
          >
            <Input type="text" placeholder="<varName2>" />
          </Form.Item>
        </Col>
      </Row>
    </>
  ]);

  const remove = () => {
    const values = [...inputs];
    values.splice = (id, 1);
    setInputs(values);
  }

  const add = () => {
    setInputs([...inputs,
    <Row>
      <Col span={10}>
        <Form.Item
          label="CountItems in"
          name={[`countitemsin` + id, "countitemsin"]}
          rules={[
            {
              required: true,
              message: "Porfavor fill in the form",
            },
          ]}
        >
          <Input type="text" placeholder="<varName>" />
        </Form.Item>
      </Col>
      <Col span={10}>
        <Form.Item
          label="and save_as"
          name={[`variable` + id, "variable"]}
          rules={[
            {
              required: true,
              message: "Please indicate how to save the variable as",
            },
          ]}
        >
          <Input type="text" placeholder="<varName2>" />
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
    ]);
    setClick(true);
  }

  const [form] = Form.useForm();
  useEffect(() => {
    id = Date.now();
    setClick(false);
  }, [click])

  return (
    <Form
      name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
      <Row justify="center">
        <Col >
          <Title level={5}>CountElements</Title>
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

export default CountElements;