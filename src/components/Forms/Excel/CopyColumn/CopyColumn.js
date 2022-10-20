import React, { useState, useEffect } from "react";
import { Button, Form, Input, Col, Row, Typography, DatePicker, Select, Space, Popover } from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import data from '../../syntax.json'


let id = Date.now();
const { Title } = Typography;
const { Option } = Select;
const buttonWidth = 70;

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

  const remove = () => {
    const values = [...inputs];
    values.splice = (id, 1);
    setInputs(values);
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

  const [form] = Form.useForm();
  useEffect(() => {
    id = Date.now();
    setClick(false);
  }, [click])

  return (
    <Form onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
      <Row justify="center">
        <Col>
          <Title level={5}>Copiar Columna</Title>
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

export default CopyColumn;