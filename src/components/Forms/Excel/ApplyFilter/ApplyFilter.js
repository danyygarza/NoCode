import React, { useState, useEffect } from "react";
import { Button, Card, Form, Input, Col, Row, Popover, Modal } from "antd";
import { Typography } from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import data from
  '../../syntax.json'
import { TryOutlined } from "@mui/icons-material";


let id = Date.now();
const { Title } = Typography;
const { Meta } = Card;
const buttonWidth = 70;
/*
const description = (
  <>
    {data.fridaExcelReadersSyntaxApplyFilter.Description}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Description2}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Description3}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Description4}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Description5}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Description6}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Description7}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Description8}<br />
  </>
);

const parameters = (
  <>
    {data.fridaExcelReadersSyntaxApplyFilter.Parameters}
  </>
);

const syntax = (
  <>
    {data.fridaExcelReadersSyntaxApplyFilter.Syntax1}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Syntax2}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Syntax3}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Syntax4}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Syntax5}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Syntax6}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Syntax7}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Syntax8}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Syntax9}<br />
  </>
);

const examples = (
  <>
    {data.fridaExcelReadersSyntaxApplyFilter.Example1}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Example2}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Example3}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Example4}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Example5}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Example6}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Example7}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Example8}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Example9}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Example10}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Example11}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Example12}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Example13}<br />
    {data.fridaExcelReadersSyntaxApplyFilter.Example14}<br />
  </>
)
*/
function ApplyFilter() {
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
        <Col span={8}>
          <Form.Item
            label="Applyfilter to the worksheet"
            name={[`worksheet` + id, "worksheet"]}
            rules={[
              {
                required: true,
                message: "Please indicate thworksheet key",
              },
            ]}
          >
            <Input type="text" placeholder="<worksheetKey>" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="to the column with the index"
            name={[`column` + id, "column"]}
            rules={[
              {
                required: true,
                message: "Please indicate the column index",
              },
            ]}
          >
            <Input type="text" placeholder="<columnIndex>" />
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item
            label="with the criteria"
            name={[`criteria` + id, "criteria"]}
            rules={[
              {
                required: true,
                message: "Please indicate the criteria",
              },
            ]}
          >
            <Input type="text" placeholder="<criteria>" />
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
      <Col span={8}>
        <Form.Item
          label="Applyfilter to the worksheet"
          name={[`worksheet` + id, "worksheet"]}
          rules={[
            {
              required: true,
              message: "Please indicate thworksheet key",
            },
          ]}
        >
          <Input type="text" placeholder="<worksheetKey>" />
        </Form.Item>
      </Col>
      <Col span={8}>
        <Form.Item
          label="to the column with the index"
          name={[`column` + id, "column"]}
          rules={[
            {
              required: true,
              message: "Please indicate the column index",
            },
          ]}
        >
          <Input type="text" placeholder="<columnIndex>" />
        </Form.Item>
      </Col>
      <Col span={5}>
        <Form.Item
          label="with the criteria"
          name={[`criteria` + id, "criteria"]}
          rules={[
            {
              required: true,
              message: "Please indicate the criteria",
            },
          ]}
        >
          <Input type="text" placeholder="<criteria>" />
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
        <Card hoverable style={{ width: 800 }} cover={<img alt="filter exceñ" src="../../../../filter.png" />} onClick={() => setOpen(true)} maskClosable={true} >
          <Meta title="Apply Filter" description="Apply a filter to a column located in a given index." />
        </Card>
        <Modal
          title="Apply Filter"
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

export default ApplyFilter;