import React, { useState, useForm } from "react";
import { Form, Input, Card, Modal, Button, Popover, Row, Col, Tabs } from "antd";

const { Meta } = Card;

export default function Testform(props) {
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();

    const buttonWidth = 70;

    const onFinish = (values) => {
        console.log("Success:", values);
        props.setSubmit(false)
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
        props.setSubmit(false)
    };

    let id = Date.now();
    const test = { forms: [["name", "text"], ["in", 'text'], ["cell", "text"]], syntax: { } }
    console.log(test.forms)
    return (
        <>
            < Card hoverable style={{ width: 800, }
            } cover={< img alt="excel icon" src="../../../../excelIcon.ico" />} onClick={() => setOpen(true)} maskClosable={true} >
                <Meta title="Excel Write" description="Write something in a given cell in a worksheet." />
            </Card >
            <Modal
                title="Excel Write"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={900}
            >
                <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} id={id}>
                    <Row>
                        <Col>
                            <div className="demo">
                                <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
                                    <Popover placement="topLeft" title="Description" /*content={description}*/ trigger="click" className='popover-position'>
                                        <Button>Description</Button>
                                    </Popover>
                                    <Popover placement="topLeft" title="Parameters" /*content={parameters}*/ trigger="click" className='popover-position'>
                                        <Button>Parameters</Button>
                                    </Popover>
                                    <Popover placement="top" title="Syntax" /*content={syntax}*/ trigger="click" className='popover-position'>
                                        <Button>Syntax</Button>
                                    </Popover>
                                    <Popover placement="topRight" title="Examples" /*content={examples}*/ trigger="click">
                                        <Button>Examples</Button>
                                    </Popover>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Tabs defaultActiveKey="1">
                        <Tabs.TabPane tab="Syntax 1" key="1">
                            <Col span={8}>
                                {test.forms.map((item) => {
                                    return (
                                        <>
                                            {console.log(item[1])}
                                            {/* //!  for text inputs */}

                                            {
                                                item[1] === "text" &&
                                                <>
                                                    <Col>
                                                        <Form.Item name={[`write` + id, item[0]]} label={item[0]} rules={[{ required: true, message: 'Please input your username!' }]} style={{ width: 'auto' }}>
                                                            <Input type="text" placeholder={item[0]} onChange={props.onChange} />
                                                        </Form.Item>
                                                    </Col>
                                                </>
                                            }

                                        </>
                                    )
                                })}
                            </Col>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Syntax 2" key="2">
                            {test.forms.map((item) => {
                                return (
                                    <>
                                        {console.log(item[1])}
                                        {/* //!  for text inputs */}
                                        <Col span={8}>
                                            {
                                                item[1] === "text" &&
                                                <Form.Item
                                                    name={[`write` + id, item[0]]}
                                                    label={item[0]}
                                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                                    style={{ width: 'auto' }}
                                                >
                                                    <Input type="text" placeholder={item[0]} onChange={props.onChange} />
                                                </Form.Item>
                                            }
                                        </Col>
                                    </>
                                )
                            })}
                        </Tabs.TabPane>
                    </Tabs>

                </Form>
            </Modal>
        </>
    )
}

{/* //!  for text file picker */ }
{/* {item[1] === "file" &&
    <Form.Item
        name={[`${item[0] + id}`, `${item[0]}`]}
        label={item[0]}
        rules={[{ required: true, message: 'Please input your username!' }]}
    >
    </Form.Item>} */}
{/* //!  for text date */ }
{/* {item[1] === "date" &&
    <Form.Item
        name={[`${item[0] + id}`, `${item[0]}`]}
        label={item[0]}
        rules={[{ required: true, message: 'Please input your username!' }]}
    >
    </Form.Item>} */}