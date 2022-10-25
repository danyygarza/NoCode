import React, { useState, useForm, useEffect } from "react";
import { Form, Input, Card, Modal, Button, Popover, Row, Col, Tabs } from "antd";

import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";

const { Meta } = Card;


export default function Testform(props) {
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();
    const [data, setData] = useState([]);

    useEffect(() => {
        async function Readers() {
            var arr = [];
            var i = 0;
            const querySnapshot = await getDocs(collection(db, "Excel"));
            querySnapshot.forEach((doc) => {
                arr[i] = [];
                console.log(doc.id, "=>", doc.data());
                arr[i] = doc.data();
                i++;
            });
            console.log(arr);
            setData(arr);
        }
        Readers();
    }, []);

    

    const description = (
        data.map((dato, index) => (
            <>
                {dato.ExcelWriteDescription}<br />
                {dato.ExcelWriteDescription2}<br />
                {dato.ExcelWriteDescription3}<br />
                {dato.ExcelWriteDescription4}<br />
                {dato.ExcelWriteDescription5}
            </>
        ))
    );

    const parameters = (
        data.map((dato, index) => (
            <>
                {dato.ExcelWriteParameters}
            </>
        ))
    );

    const syntax = (
        data.map((dato, index) => (
            <>
                {dato.ExcelWriteSyntax1}<br />
                {dato.ExcelWriteSyntax2}<br />
                {dato.ExcelWriteSyntax3}<br />
                {dato.ExcelWriteSyntax4}
            </>
        ))
    );

    const examples = (
        data.map((dato, index) => (
            <>
                {dato.ExcelWriteExample1}<br/>
                {dato.ExcelWriteExample2}<br/>
                {dato.ExcelWriteExample3}<br/>
                {dato.ExcelWriteExample4}<br/>
                {dato.ExcelWriteExample5}<br/>
                {dato.ExcelWriteExample6}<br/>
                {dato.ExcelWriteExample7}
            </>
        ))
    )

    const buttonWidth = 70;

    const onFinish = (values) => {
        console.log("Success:", values);
        props.setSubmit(false)
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
        props.setSubmit(false)
    };
    // console.log("data", props.data);
    console.log('data', props.data.forms[0]);
    let id = Date.now();
    // const test = { forms: [["name", "text"], ["in", 'text'], ["cell", "text"]], syntax: { } }
    // console.log(test.forms[0])
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

                                    <Popover placement="topLeft" title="Description" content={description} trigger="click" className='popover-position'>
                                        <Button>Description</Button>
                                    </Popover><Popover placement="topLeft" title="Parameters" content={parameters} trigger="click" className='popover-position'>
                                        <Button>Parameters</Button>
                                    </Popover><Popover placement="top" title="Syntax" content={syntax} trigger="click" className='popover-position'>
                                        <Button>Syntax</Button>
                                    </Popover><Popover placement="topRight" title="Examples" content={examples} trigger="click">
                                        <Button>Examples</Button>
                                    </Popover>

                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Tabs defaultActiveKey="1">
                        <Tabs.TabPane tab="Syntax 1" key="1">
                            <Col span={8}>
                               {props.data.forms.map((item) => {
                                    return (
                                        <>
                                            {console.log(item.type)}
                                            {/* //!  for text inputs */}

                                            {
                                                item.type === "text" &&
                                                <>
                                                    <Col>
                                                        <Form.Item name={[`${item.title}` + id, item.title]} label={item.title} rules={[{ required: true, message: 'Please input your username!' }]} style={{ width: 'auto' }}>
                                                            <Input type={item.type} placeholder={item.title} onChange={props.onChange} />
                                                        </Form.Item>
                                                    </Col>
                                                </>
                                            }
                                        </>
                                        // <h1>test</h1>
                                    )
                                })}
                            </Col>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Syntax 2" key="2">
                            {props.data.forms.map((item) => {
                                return (
                                    // <>
                                    //     {console.log(item[1])}
                                    //     {/* //!  for text inputs */}
                                    //     <Col span={8}>
                                    //         {
                                    //             item[1] === "text" &&
                                    //             <Form.Item
                                    //                 name={[`write` + id, item[0]]}
                                    //                 label={item[0]}
                                    //                 rules={[{ required: true, message: 'Please input your username!' }]}
                                    //                 style={{ width: 'auto' }}
                                    //             >
                                    //                 <Input type="text" placeholder={item[0]} onChange={props.onChange} />
                                    //             </Form.Item>
                                    //         }
                                    //     </Col>
                                    // </>
                                    <h1>testing</h1>
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