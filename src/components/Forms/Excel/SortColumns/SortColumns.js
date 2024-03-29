import React, { useState, useEffect } from "react";
import { Button, Form, Input, Col, Row, Popover, Card, Modal } from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import "../Write/ExcelWrite.css";


let id = Date.now();
const { Meta } = Card;
const buttonWidth = 70;
/*
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
*/

function SortColumns() {
  const onFinish = (values) => {
  };

  const onFinishFailed = (errorInfo) => {
  };

  const [click, setClick] = useState(false);
  const [inputs, setInputs] = useState([
    <>
      <Row>
        <Col span={7}>
          <Form.Item
            label="SortColumns in"
            name={[`sortcolumnsin` + id, "sortcolumnsin"]}
            rules={[
              {
                required: true,
                message: "Please indicate the worksheetKey",
              },
            ]}
          >
            <Input type="text" placeholder="<worksheetKey>" />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            label="by column"
            name={[`bycolumn` + id, "bycolumn"]}
            rules={[
              {
                required: true,
                message: "Please indicate the column index",
              },
            ]}
          >
            <Input type="text" placeholder="<colindex>" />
          </Form.Item>
        </Col>
        <Col span={4}>
          <Form.Item
            label="order"
            name={[`order` + id, "order"]}
            rules={[
              {
                required: true,
                message: "Porfavor indica el orden",
              },
            ]}
          >
            <Input type="text" placeholder="<order>" />
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item
            label="header"
            name={[`header` + id, "header"]}
            rules={[
              {
                required: true,
                message: "Porfavor indica el orden",
              },
            ]}
          >
            <Input type="text" placeholder="<isHeader>" />
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
      <Col span={7}>
        <Form.Item
          label="SortColumns in"
          name={[`sortcolumnsin` + id, "sortcolumnsin"]}
          rules={[
            {
              required: true,
              message: "Please indicate the worksheetKey",
            },
          ]}
        >
          <Input type="text" placeholder="<worksheetKey>" />
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label="by column"
          name={[`bycolumn` + id, "bycolumn"]}
          rules={[
            {
              required: true,
              message: "Please indicate the column index",
            },
          ]}
        >
          <Input type="text" placeholder="<colindex>" />
        </Form.Item>
      </Col>
      <Col span={4}>
        <Form.Item
          label="order"
          name={[`order` + id, "order"]}
          rules={[
            {
              required: true,
              message: "Porfavor indica el orden",
            },
          ]}
        >
          <Input type="text" placeholder="<order>" />
        </Form.Item>
      </Col>
      <Col span={5}>
        <Form.Item
          label="header"
          name={[`header` + id, "header"]}
          rules={[
            {
              required: true,
              message: "Porfavor indica el orden",
            },
          ]}
        >
          <Input type="text" placeholder="<isHeader>" />
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
        <Card hoverable style={{ width: 800 }} cover={<img alt="escel sort columns" src="../../../../sortColumns.png" />} onClick={() => setOpen(true)} maskClosable={true}>
          <Meta title="Sort Columns" description="Sort by a Column. Maximum 3 columns to sort in a worksheet." />
        </Card>
        <Modal
          title="Sort Columns"
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={900}
        >
          <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Row>
              <Col>
                <div className="demo">
                  <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
                    <Popover placement="topLeft" title="Description"  trigger="click" className='popover-position'>
                      <Button>Description</Button>
                    </Popover>
                    <Popover placement="topLeft" title="Parameters" trigger="click" className='popover-position'>
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

export default SortColumns;