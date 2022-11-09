import React, { useState, useEffect } from "react";
import { Button, Form, Input, Col, Row,  Card,  Modal, Popover } from "antd";

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import "../Write/ExcelWrite.css"



let id = Date.now();
const { Meta } = Card;
const buttonWidth = 70;
/*
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

*/
function InsertColumn() {
  const onFinish = (values) => {

  };

  const onFinishFailed = (errorInfo) => {

  };

  const [click, setClick] = useState(false);
  const [inputs, setInputs] = useState([
    <>
      <Row>
        <Col span={10}>
          <Form.Item
            label="InsertCol in"
            name={[`InsertColIn` + id, "InsertColIn"]}
            rules={[
              {
                required: true,
                message: "Porfavor indicar el nombre del libro",
              },
            ]}
          >
            <Input type="text" placeholder="<worksheetKey" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="at"
            name={[`at` + id, "at"]}
            rules={[
              {
                required: true,
                message: "Porfavor indicar el indice de la columna",
              },
            ]}
          >
            <Input type="text" placeholder="<colIndex>" />
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
          label="InsertCol in"
          name={[`InsertColIn` + id, "InsertColIn"]}
          rules={[
            {
              required: true,
              message: "Porfavor indicar el nombre del libro",
            },
          ]}
        >
          <Input type="text" placeholder="<worksheetKey" />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          label="at"
          name={[`at` + id, "at"]}
          rules={[
            {
              required: true,
              message: "Porfavor indicar el indice de la columna",
            },
          ]}
        >
          <Input type="text" placeholder="<colIndex>" />
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

  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <Card hoverable style={{ width: 800 }} cover={<img alt="insert column" src="../../../../addColumn.webp" />} onClick={() => setOpen(true)} maskClosable={true}>
          <Meta title="Insert Column" description="Inserts a Column at index (1-based)." />
        </Card>
        <Modal
          title="Insert Column"
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

export default InsertColumn;