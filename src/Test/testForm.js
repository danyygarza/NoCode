import React, { useState, useForm } from "react";
import { Form, Input, Card, Modal } from "antd";

const { Meta } = Card;

export default function Testform(props) {
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Success:", values);
        props.setSubmit(false)
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
        props.setSubmit(false)
    };

    let id = Date.now();
    const test = { forms: [["name", "text"], ["in", 'text'], ["cell", "text"]], syntax: {} }
    console.log(test.forms)
    return (
        <>
            < Card hoverable style={{ width: 240, }
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


                    {test.forms.map((item) => {
                        return (
                            <>
                                {console.log(item[1])}
                                {/* //!  for text inputs */}
                                {
                                    item[1] === "text" &&
                                    <Form.Item
                                        name={[`write` + id, item[0]]}
                                        label= {item[0]}
                                        rules={[{ required: true, message: 'Please input your username!' }]}
                                    >
                                        <Input type="text" placeholder={item[0]} onChange={props.onChange} />
                                    </Form.Item>}
                                {/* //!  for text file picker */}
                                {/* {item[1] === "file" &&
                                <Form.Item
                                    name={[`${item[0] + id}`, `${item[0]}`]}
                                    label={item[0]}
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                </Form.Item>} */}
                                {/* //!  for text date */}
                                {/* {item[1] === "date" &&
                                <Form.Item
                                    name={[`${item[0] + id}`, `${item[0]}`]}
                                    label={item[0]}
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                </Form.Item>} */}
                            </>
                        )
                    })}


                </Form>
            </Modal>
        </>
    )


}

