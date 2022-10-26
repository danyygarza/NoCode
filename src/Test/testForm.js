
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore";
import React, { useState, useForm, useEffect } from "react";
import { Form, Input, Card, Modal, Button, Popover, Row, Col, Tabs, Radio } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { useModalForm } from 'sunflower-antd';
const { Meta } = Card;

export default function Testform(props) {
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();
    const [key, setKey] = useState(0);
    const [forms, setForms] = useState(Object.values(props.data.forms)[key])
    const [item, setItem] = useState([])
    // const forms = Object.values(props.data.forms)[key]; 
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

    const {
        modalProps,
        formProps,
        show,
        formLoading,
        formValues,
        formResult,
    } = useModalForm({
        defaultVisible: false,
        autoSubmitClose: true,
        autoResetForm: true,
        async submit(data) {
            console.log('beforeSubmit');
            await new Promise(r => setTimeout(r, 1000));
            console.log('afterSubmit', data);
            return 'ok';
        },
        form,
    });
    
    const add = () => {
        // setForm(...forms,Object.values(props.data.forms)[key])
        // Object.values(props.data.forms)[key].map((item)=>{
        //     const tempArray = []
        //     forms.push(item)
        //     setForm(item);  

        // })
        // console.log(forms); 

        setForms(forms.concat(item)); 

    }

    useEffect(() => {
        const tempArray = []
        Object.values(props.data.forms)[key].map((item)=>{
            tempArray.push(item)
        })
        setItem(tempArray)
        // setForm()
        console.log(forms)
    }, [forms])

    
    console.log(Object.keys(props.data.forms))
    return (
        <>
            < Card hoverable style={{ width: 800, }
            } cover={< img alt="excel icon" src="../../../../excelIcon.ico" />} onClick={() => setOpen(true)} maskClosable={true} >
                <Meta title="Excel Write" description="Write something in a given cell in a worksheet." />
            </Card >
            <Modal {...modalProps} title="useModalForm" open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)} okText="submit" width={1200} >
                <>
                    <p>
                        submit: username {formValues.username} email {formValues.email}
                    </p>
                    <p>result: {formResult}</p>
                    <Form layout="inline" {...formProps}>
                        <Radio.Group defaultValue="a" buttonStyle="solid" onChange={(e) => setKey(e.target.value)}>
                            {Object.keys(props.data.forms).map((_, index) => {
                                return (
                                    <Radio.Button value={index}>syntax: {index}</Radio.Button>
                                )
                            })}
                        </Radio.Group>
                        <Row>
                            {forms.map((item) => {
                                console.log("map", item); 
                                return (
                                    <>
                                        {console.log(item.type)}
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

                        </Row>
                        <Row>
                            <Button type="primary" shape="circle" icon={<PlusOutlined />} size={'large'} onClick={() => add()} />
                        </Row>


                    </Form>
                </>
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
    <input> // 
    </Form.Item>} */}
{/* //!  for text date */ }
{/* {item[1] === "date" &&
    <Form.Item
        name={[`${item[0] + id}`, `${item[0]}`]}
        label={item[0]}
        rules={[{ required: true, message: 'Please input your username!' }]}
    >
    </Form.Item>} */}