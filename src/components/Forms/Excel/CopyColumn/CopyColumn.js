import React, { useState, useEffect } from "react";
import { Button, Form, Input, Col, Row, Card,  Modal, Popover, Tabs } from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';



let id = Date.now();
const { Meta } = Card;
const buttonWidth = 70;
/*
const description = (
  <>
    {data.fridaExcelReadersSyntaxCopyColumn.Description}
  </>
);

const parameters = (
  <>
    {data.fridaExcelReadersSyntaxCopyColumn.Parameters}
  </>
);

const syntax = (
  <>
    {data.fridaExcelReadersSyntaxCopyColumn.Syntax1}<br />
    {data.fridaExcelReadersSyntaxCopyColumn.Syntax2}<br />
    {data.fridaExcelReadersSyntaxCopyColumn.Syntax3}<br />
  </>
);

const examples = (
  <>
    {data.fridaExcelReadersSyntaxCopyColumn.Example1}<br />
    {data.fridaExcelReadersSyntaxCopyColumn.Example2}<br />
  </>
)
*/
function CopyColumn() {
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
            label="CopyColumn"
            name={[`CopyColumn` + id, "CopyColumn"]}
            rules={[
              {
                required: true,
                message: "Porfavor indicate the column you want to copy",
              },
            ]}
          >
            <Input type="text" placeholder="<columnIndexOrig>" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="from"
            name={[`from` + id, "from"]}
            rules={[
              {
                required: true,
                message: "Pleade indicate the column origin",
              },
            ]}
          >
            <Input type="text" placeholder="<worksheetKeyOrig>" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="start_at"
            name={[`startAt` + id, "startAt"]}
            rules={[
              {
                required: true,
                message: "Please indicate the origin column offset",
              },
            ]}
          >
            <Input type="text" placeholder="<worOffsetOrig>" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="to the sheet"
            name={[`sheetDest` + id, "sheetDest"]}
            rules={[
              {
                required: true,
                message: "Please indicate the worksheet key destiny",
              },
            ]}
          >
            <Input type="text" placeholder="<worksheetKeyDest>" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="in column"
            name={[`inColumn` + id, "inColumn"]}
            rules={[
              {
                required: true,
                message: "Please indicate the column index destiny",
              },
            ]}
          >
            <Input type="text" placeholder="<columnIndexDest>" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="start_at"
            name={[`startAt` + id, "startAt"]}
            rules={[
              {
                required: true,
                message: "Please indictae the row offset destiny",
              },
            ]}
          >
            <Input type="text" placeholder="<rowOffsetDest>" />
          </Form.Item>
        </Col>
      </Row>
    </>
  ]);

  const [click2, setClick2] = useState(false);
  const [inputs2, setInputs2] = useState([
    <>
      <Row>
        <Col span={6}>
          <Form.Item
            label="CopyColumn"
            name={[`CopyColumn` + id, "CopyColumn"]}
            rules={[
              {
                required: true,
                message: "Porfavor indicate the column you want to copy",
              },
            ]}
          >
            <Input type="text" placeholder="<columnIndexOrig>" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="from"
            name={[`from` + id, "from"]}
            rules={[
              {
                required: true,
                message: "Pleade indicate the column origin",
              },
            ]}
          >
            <Input type="text" placeholder="<worksheetKeyOrig>" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="to the sheet"
            name={[`to` + id, "to"]}
            rules={[
              {
                required: true,
                message: "Please indicate the origin column offset",
              },
            ]}
          >
            <Input type="text" placeholder="<worksheetKeyDest>" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="in column"
            name={[`column` + id, "column"]}
            rules={[
              {
                required: true,
                message: "Please indicate the worksheet key destiny",
              },
            ]}
          >
            <Input type="text" placeholder="<columnIndexDest>" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="start_at"
            name={[`startAt` + id, "startAt"]}
            rules={[
              {
                required: true,
                message: "Please indictae the row offset destiny",
              },
            ]}
          >
            <Input type="text" placeholder="<rowOffsetDest>" />
          </Form.Item>
        </Col>
      </Row>
    </>
  ]);

  const [click3, setClick3] = useState(false);
  const [inputs3, setInputs3] = useState([
    <>
      <Row>
        <Col span={6}>
          <Form.Item
            label="CopyColumn value"
            name={[`CopyColumn` + id, "CopyColumn"]}
            rules={[
              {
                required: true,
                message: "Porfavor indicate the column you want to copy",
              },
            ]}
          >
            <Input type="text" placeholder="<columnIndexOrig>" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="from"
            name={[`from` + id, "from"]}
            rules={[
              {
                required: true,
                message: "Pleade indicate the column origin",
              },
            ]}
          >
            <Input type="text" placeholder="<worksheetKeyOrig>" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="start_at"
            name={[`to` + id, "to"]}
            rules={[
              {
                required: true,
                message: "Please indicate the origin column offset",
              },
            ]}
          >
            <Input type="text" placeholder="<rowOffsetOrigt>" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="to the sheet"
            name={[`sheet` + id, "sheet"]}
            rules={[
              {
                required: true,
                message: "Please indicate the worksheet key destiny",
              },
            ]}
          >
            <Input type="text" placeholder="<worksheetKeyDest>" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="in column"
            name={[`startAt` + id, "startAt"]}
            rules={[
              {
                required: true,
                message: "Please indictae the row offset destiny",
              },
            ]}
          >
            <Input type="text" placeholder="<columnIndexDest>" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="start_at"
            name={[`startAt` + id, "startAt"]}
            rules={[
              {
                required: true,
                message: "Please indictae the row offset destiny",
              },
            ]}
          >
            <Input type="text" placeholder="<rowOffsetDest>" />
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

  const remove2 = () => {
    const values = [...inputs2];
    values.splice = (id, 1);
    setInputs2(values);
  }

  const remove3 = () => {
    const values = [...inputs3];
    values.splice = (id, 1);
    setInputs3(values);
  }

  const add = () => {
    setInputs([...inputs,
    <Row>
      <Col span={6}>
        <Form.Item
          label="CopyColumn"
          name={[`CopyColumn` + id, "CopyColumn"]}
          rules={[
            {
              required: true,
              message: "Porfavor indicate the column you want to copy",
            },
          ]}
        >
          <Input type="text" placeholder="<columnIndexOrig>" />
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label="from"
          name={[`from` + id, "from"]}
          rules={[
            {
              required: true,
              message: "Pleade indicate the column origin",
            },
          ]}
        >
          <Input type="text" placeholder="<worksheetKeyOrig>" />
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label="start_at"
          name={[`startAt` + id, "startAt"]}
          rules={[
            {
              required: true,
              message: "Please indicate the origin column offset",
            },
          ]}
        >
          <Input type="text" placeholder="<worOffsetOrig>" />
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label="to the sheet"
          name={[`sheetDest` + id, "sheetDest"]}
          rules={[
            {
              required: true,
              message: "Please indicate the worksheet key destiny",
            },
          ]}
        >
          <Input type="text" placeholder="<worksheetKeyDest>" />
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label="in column"
          name={[`inColumn` + id, "inColumn"]}
          rules={[
            {
              required: true,
              message: "Please indicate the column index destiny",
            },
          ]}
        >
          <Input type="text" placeholder="<columnIndexDest>" />
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label="start_at"
          name={[`startAt` + id, "startAt"]}
          rules={[
            {
              required: true,
              message: "Please indictae the row offset destiny",
            },
          ]}
        >
          <Input type="text" placeholder="<rowOffsetDest>" />
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
          label="CopyColumn"
          name={[`CopyColumn` + id, "CopyColumn"]}
          rules={[
            {
              required: true,
              message: "Porfavor indicate the column you want to copy",
            },
          ]}
        >
          <Input type="text" placeholder="<columnIndexOrig>" />
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label="from"
          name={[`from` + id, "from"]}
          rules={[
            {
              required: true,
              message: "Pleade indicate the column origin",
            },
          ]}
        >
          <Input type="text" placeholder="<worksheetKeyOrig>" />
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label="to the sheet"
          name={[`to` + id, "to"]}
          rules={[
            {
              required: true,
              message: "Please indicate the origin column offset",
            },
          ]}
        >
          <Input type="text" placeholder="<worksheetKeyDest>" />
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label="in column"
          name={[`column` + id, "column"]}
          rules={[
            {
              required: true,
              message: "Please indicate the worksheet key destiny",
            },
          ]}
        >
          <Input type="text" placeholder="<columnIndexDest>" />
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label="start_at"
          name={[`startAt` + id, "startAt"]}
          rules={[
            {
              required: true,
              message: "Please indictae the row offset destiny",
            },
          ]}
        >
          <Input type="text" placeholder="<rowOffsetDest>" />
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
    setClick2(true);
  }

  const add3 = () => {
    setInputs3([...inputs3,
    <Row>
      <Col span={6}>
        <Form.Item
          label="CopyColumn value"
          name={[`CopyColumn` + id, "CopyColumn"]}
          rules={[
            {
              required: true,
              message: "Porfavor indicate the column you want to copy",
            },
          ]}
        >
          <Input type="text" placeholder="<columnIndexOrig>" />
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label="from"
          name={[`from` + id, "from"]}
          rules={[
            {
              required: true,
              message: "Pleade indicate the column origin",
            },
          ]}
        >
          <Input type="text" placeholder="<worksheetKeyOrig>" />
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label="start_at"
          name={[`to` + id, "to"]}
          rules={[
            {
              required: true,
              message: "Please indicate the origin column offset",
            },
          ]}
        >
          <Input type="text" placeholder="<rowOffsetOrigt>" />
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label="to the sheet"
          name={[`sheet` + id, "sheet"]}
          rules={[
            {
              required: true,
              message: "Please indicate the worksheet key destiny",
            },
          ]}
        >
          <Input type="text" placeholder="<worksheetKeyDest>" />
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label="in column"
          name={[`startAt` + id, "startAt"]}
          rules={[
            {
              required: true,
              message: "Please indictae the row offset destiny",
            },
          ]}
        >
          <Input type="text" placeholder="<columnIndexDest>" />
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label="start_at"
          name={[`startAt` + id, "startAt"]}
          rules={[
            {
              required: true,
              message: "Please indictae the row offset destiny",
            },
          ]}
        >
          <Input type="text" placeholder="<rowOffsetDest>" />
        </Form.Item>
      </Col>
      <Button
        type="solid"
        onClick={() => remove3()}
        shape="circle"
        icon={<MinusCircleOutlined />}
      >
      </Button>
    </Row>
    ])
    setClick3(true);
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
        <Card hoverable style={{ width: 800 }} cover={<img alt="copy column form" src="../../../../copyColumn.png" />} onClick={() => setOpen(true)} maskClosable={true}>
          <Meta title="Copy Column" description="Copy the full column to another place (in the same sheet or another)." />
        </Card>
        <Modal
          title="Copy Column"
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={900}
        >
          <Form onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
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
            <Tabs defaultActiveKey="1">
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
              <Tabs.TabPane tab="Syntax 3" key="3">
                {inputs3.map((input3) => {
                  return (input3)
                })}
                <Row>
                  <Col offset={12}>
                    <Button
                      type="dashed"
                      onClick={() => add3()}
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

export default CopyColumn;