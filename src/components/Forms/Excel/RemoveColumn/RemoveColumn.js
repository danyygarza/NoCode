import React, { useState, useEffect } from "react";
import { Button, Form, Input, Col, Row,  Popover, Card, Modal } from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';




let id = Date.now();
const { Meta } = Card;
const buttonWidth = 70;
/*
const description = (
  <>
    {data.fridaExcelReadersSyntaxRemoveColumns.Description}
  </>
);

const parameters = (
  <>
    {data.fridaExcelReadersSyntaxRemoveColumns.Parameters}
  </>
);

const syntax = (
  <>
    {data.fridaExcelReadersSyntaxRemoveColumns.Syntax1}
  </>
);

const examples = (
  <>
    {data.fridaExcelReadersSyntaxRemoveColumns.Example1}<br />
    {data.fridaExcelReadersSyntaxRemoveColumns.Example2}<br />
  </>
)
*/
function RemoveColumn() {
  const onFinish = (values) => {
  };

  const onFinishFailed = (errorInfo) => {
  };

  const [click, setClick] = useState(false);
  const [inputs, setInputs] = useState([
    <>
      <Row>
        <Col span={12}>
          <Form.Item
            label="RemoveCols from"
            name={[`removeCols` + id, "removeCols"]}
            rules={[
              {
                required: true,
                message: "Please indicate the worksheet key",
              },
            ]}
          >
            <Input type="text" placeholder="<worksheetKey>" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="at"
            name={[`index` + id, "index"]}
            rules={[
              {
                required: true,
                message: "Please indicate the column index",
              },
            ]}
          >
            <Input type="text" placeholder="<index>" />
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
      <Col span={12}>
        <Form.Item
          label="RemoveCols from"
          name={[`removeCols` + id, "removeCols"]}
          rules={[
            {
              required: true,
              message: "Please indicate the worksheet key",
            },
          ]}
        >
          <Input type="text" placeholder="<worksheetKey>" />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          label="at"
          name={[`index` + id, "index"]}
          rules={[
            {
              required: true,
              message: "Please indicate the column index",
            },
          ]}
        >
          <Input type="text" placeholder="<index>" />
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

  useEffect(() => {
    id = Date.now();
    setClick(false);
  }, [click])

  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <Card hoverable style={{ width: 800 }} cover={<img alt="remove column form" src="../../../../removeColumns.png" />} onClick={() => setOpen(true)} maslClosable={true} >
          <Meta title="Remove Column" description="Deletes its specified columns." />
        </Card>
        <Modal
          title="Remove Column"
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
                    <Popover placement="topLeft" title="Description"  trigger="click" className='popover-position'>
                      <Button>Description</Button>
                    </Popover>
                    <Popover placement="topLeft" title="Parameters"  trigger="click" className='popover-position'>
                      <Button>Parameters</Button>
                    </Popover>
                    <Popover placement="top" title="Syntax"  trigger="click" className='popover-position'>
                      <Button>Syntax</Button>
                    </Popover>
                    <Popover placement="topRight" title="Examples"  trigger="click" >
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
        </Modal>
      </div>
    </>
  );
}

export default RemoveColumn;