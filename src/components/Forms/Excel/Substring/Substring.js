import React, { useState, useEffect } from "react";
import { Button, Form, Input, Col, Row,  Popover, Tabs, Modal, Card } from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';




let id = Date.now();
const { Meta } = Card;
const buttonWidth = 70;
/*
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
*/
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

  const [inputs2, setInputs2] = useState([
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
        <Col span={5}>
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
        <Col span={5}>
          <Form.Item
            label="length"
            name={[`length` + id, "length"]}
            rules={[
              {
                required: true,
                message: "Please indicate the new variable name",
              },
            ]}
          >
            <Input type="text" placeholder="<stringLength>" />
          </Form.Item>
        </Col>
        <Col span={6}>
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

  const remove2 = () => {
    const values = [...inputs2];
    values.splice(id, 1);
    setInputs2(values);
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

  const add2 = () => {
    setInputs2([...inputs2,
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
      <Col span={5}>
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
      <Col span={5}>
        <Form.Item
          label="length"
          name={[`length` + id, "length"]}
          rules={[
            {
              required: true,
              message: "Please indicate the new variable name",
            },
          ]}
        >
          <Input type="text" placeholder="<stringLength>" />
        </Form.Item>
      </Col>
      <Col span={6}>
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
        onClick={() => remove2()}
        shape="circle"
        icon={<MinusCircleOutlined />}
      >
      </Button>
    </Row>
    ])
  }


  useEffect(() => {
    id = Date.now();
    setClick(false);
  }, [click])

  const [open, setOpen] = useState(false);


  return (
    <>
      <div>
        <Card hoverable style={{ width: 800 }} cover={<img alt="excel substring" src="../../../../substring.svg" />} onClick={() => setOpen(true)} maskClosable={true}>
          <Meta title="Substring" description="Extracts part of the content of a string, given the input and the startIndex." />
        </Card>
        <Modal
          title="Substring"
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={900}
        >
          <Form onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
            <Row>
              <Col>
                <div className="demo">
                  <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
                    <Popover placement="topLeft" title="Description" trigger="click" className='popover-position'>
                      <Button>Description</Button>
                    </Popover>
                    <Popover placement="topLeft" title="Parameters"  trigger="click" className='popover-position'>
                      <Button>Parameters</Button>
                    </Popover>
                    <Popover placement="top" title="Syntax" trigger="click" className='popover-position'>
                      <Button>Syntax</Button>
                    </Popover>
                    <Popover placement="topRight" title="Examples"  trigger="click" >
                      <Button>Examples</Button>
                    </Popover>
                  </div>
                </div>
              </Col>
            </Row>
            <Tabs defaultActiveKey="1" key="1">
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
        </Modal>
      </div>
    </>
  );
}

export default Substring;