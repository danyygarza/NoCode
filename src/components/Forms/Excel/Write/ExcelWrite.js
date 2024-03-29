import React, { useState, useEffect } from "react"
import { Form, Input, Button, Col, Row, Typography,  Card, Modal } from 'antd'
import { MinusCircleOutlined } from '@ant-design/icons';
import "../RemoveDuplicate/RemoveDuplicate.css";
import Testform from "../../../../Test/testForm";


const { Meta } = Card;
let id = Date.now();
const { Title } = Typography;
const buttonWidth = 70;

/*const description = (
    <>
        {data.fridaExcelReadersSyntaxWrite.Description}
    </>
)

const parameters = (
    <>
        {data.fridaExcelReadersSyntaxWrite.Parameters}
    </>
);

const syntax = (
    <>
        {data.fridaExcelReadersSyntaxWrite.Syntax1}<br />
        {data.fridaExcelReadersSyntaxWrite.Syntax2}<br />
        {data.fridaExcelReadersSyntaxWrite.Syntax3}<br /return ref.current.validate();
>
        {data.fridaExcelReadersSyntaxWrite.Syntax4}<br />
    </>
);

const examples = (
    <>
        {data.fridaExcelReadersSyntaxWrite.Example1}<br />
        {data.fridaExcelReadersSyntaxWrite.Example2}<br />
        {data.fridaExcelReadersSyntaxWrite.Example3}<br />
        {data.fridaExcelReadersSyntaxWrite.Example4}<br />
        {data.fridaExcelReadersSyntaxWrite.Example5}<br />
        {data.fridaExcelReadersSyntaxWrite.Example6}<br />
        {data.fridaExcelReadersSyntaxWrite.Example7}<br />
    </>
)
*/

function ExcelWrite(props) {

    const [click, setClick] = useState(false);
    const [inputs, setInputs] = useState([
        <>
            <Row>
                <Col span={7}>
                    <Form.Item
                        name={[`write` + id, "write"]}
                        label="Write"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<something>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>

                <Col span={7}>
                    <Form.Item
                        name={[`in` + id, "in"]}
                        label="in"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<worksheetKey>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>
                <Col span={5}>
                    <Form.Item
                        name={[`cell` + id, "cell"]}
                        label="cell"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<ColRow>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>
            </Row>
        </>
    ]);
    const [click2, setClick2] = useState(false);
    const [inputs2, setInputs2] = useState([
        <>
            <Row>
                <Col span={5}>
                    <Form.Item
                        name={[`write` + id, "write"]}
                        label="Write"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<something>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>

                <Col span={4.5}>
                    <Form.Item
                        name={[`in` + id, "in"]}
                        label="in"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<worksheetKey>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item
                        name={[`cell` + id, "cell"]}
                        label="cell"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<ColRow>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>
                <Col span={5}>
                    <Form.Item
                        name={[`format` + id, "format"]}
                        label="with format"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<format>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>
            </Row>
        </>
    ]);

    const [click3, setClick3] = useState(false);
    const [inputs3, setInputs3] = useState([
        <>
            <Row>
                <Col span={4}>
                    <Form.Item
                        name={[`write` + id, "write"]}
                        label="Write"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<something>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>

                <Col span={4}>
                    <Form.Item
                        name={[`in` + id, "in"]}
                        label="in"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<worksheetKey>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item
                        name={[`cell` + id, "cell"]}
                        label="cell"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<ColRow>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item
                        name={[`format` + id, "format"]}
                        label="with format"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<format>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>
                <Col span={5}>
                    <Form.Item
                        name={[`source` + id, "source"]}
                        label="source"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<originalFormat>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>
            </Row>
        </>
    ]);

    const [click4, setClick4] = useState(false);
    const [inputs4, setInputs4] = useState([
        <>
            <Row>
                <Col span={4.5}>
                    <Form.Item
                        name={[`write` + id, "write"]}
                        label="Write"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<something>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>

                <Col span={4.5}>
                    <Form.Item
                        name={[`in` + id, "in"]}
                        label="in"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<worksheetKey>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item
                        name={[`row` + id, "row"]}
                        label="row"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<rowIndex>"} onChange={props.onChange} />
                    </Form.Item>
                </Col>
                <Col span={5}>
                    <Form.Item
                        name={[`column` + id, "column"]}
                        label="and column"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input type="text" placeholder={"<colIndex>"} onChange={props.onChange} />
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
    const remove4 = () => {
        const values = [...inputs4];
        values.splice = (id, 1);
        setInputs4(values);
    }

    const add = () => {
        setInputs([...inputs,
        <Row>
            <Col span={7}>
                < Form.Item
                    name={[`write` + id, "write"]}
                    label="Write"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<Something>"} />
                </Form.Item >
            </Col>

            <Col span={7}>
                < Form.Item
                    name={[`in` + id, "in"]}
                    label="in"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<WorksheetKey>"} />
                </Form.Item >
            </Col>
            <Col span={5}>
                < Form.Item
                    name={[`cell` + id, "cell"]}
                    label="Cell"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<ColRow>"} />
                </Form.Item >
            </Col>
            <Button
                type="solid"
                onClick={() => remove()}
                shape="circle"
                icon={<MinusCircleOutlined />}
            >
            </Button>
        </Row>])
        setClick(true);
    }

    const add2 = () => {
        setInputs2([...inputs2,
        <Row>
            <Col span={5}>
                <Form.Item
                    name={[`write` + id, "write"]}
                    label="Write"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<something>"} onChange={props.onChange} />
                </Form.Item>
            </Col>

            <Col span={4.5}>
                <Form.Item
                    name={[`in` + id, "in"]}
                    label="in"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<worksheetKey>"} onChange={props.onChange} />
                </Form.Item>
            </Col>
            <Col span={4}>
                <Form.Item
                    name={[`cell` + id, "cell"]}
                    label="cell"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<ColRow>"} onChange={props.onChange} />
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item
                    name={[`format` + id, "format"]}
                    label="with format"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<format>"} onChange={props.onChange} />
                </Form.Item>
            </Col>
            <Button
                type="solid"
                onClick={() => remove2()}
                shape="circle"
                icon={<MinusCircleOutlined />}
            >
            </Button>
        </Row>])
        setClick2(true);
    }

    const add3 = () => {
        setInputs3([...inputs3,
        <Row>
            <Col span={4}>
                <Form.Item
                    name={[`write` + id, "write"]}
                    label="Write"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<something>"} onChange={props.onChange} />
                </Form.Item>
            </Col>

            <Col span={4}>
                <Form.Item
                    name={[`in` + id, "in"]}
                    label="in"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<worksheetKey>"} onChange={props.onChange} />
                </Form.Item>
            </Col>
            <Col span={4}>
                <Form.Item
                    name={[`cell` + id, "cell"]}
                    label="cell"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<ColRow>"} onChange={props.onChange} />
                </Form.Item>
            </Col>
            <Col span={4}>
                <Form.Item
                    name={[`format` + id, "format"]}
                    label="with format"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<format>"} onChange={props.onChange} />
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item
                    name={[`source` + id, "source"]}
                    label="source"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<originalFormat>"} onChange={props.onChange} />
                </Form.Item>
            </Col>
            <Button
                type="solid"
                onClick={() => remove3()}
                shape="circle"
                icon={<MinusCircleOutlined />}
            >
            </Button>
        </Row>])
        setClick3(true);
    }

    const add4 = () => {
        setInputs4([...inputs4,
        <Row>
            <Col span={4.5}>
                <Form.Item
                    name={[`write` + id, "write"]}
                    label="Write"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<something>"} onChange={props.onChange} />
                </Form.Item>
            </Col>

            <Col span={4.5}>
                <Form.Item
                    name={[`in` + id, "in"]}
                    label="in"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<worksheetKey>"} onChange={props.onChange} />
                </Form.Item>
            </Col>
            <Col span={4}>
                <Form.Item
                    name={[`row` + id, "row"]}
                    label="row"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<rowIndex>"} onChange={props.onChange} />
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item
                    name={[`column` + id, "column"]}
                    label="and column"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<colIndex>"} onChange={props.onChange} />
                </Form.Item>
            </Col>
            <Button
                type="solid"
                onClick={() => remove4()}
                shape="circle"
                icon={<MinusCircleOutlined />}
            >
            </Button>
        </Row>])
        setClick4(true);
    }

    const [form] = Form.useForm();

    if (props.submit) {
        form.submit();
    }
    const onFinish = (values) => {
        props.setSubmit(false)
    };
    const onFinishFailed = (errorInfo) => {
        props.setSubmit(false)
    };

    useEffect(() => {
        id = Date.now();
        setClick(false);
    }, [click])


    //modal
    const [open, setOpen] = useState(false);

    return (
        <>
        
            <div>
                <Card hoverable style={{ width: 800 }} cover={<img alt="excel icon" src="../../../../excelIcon.ico" />} onClick={() => setOpen(true)} maskClosable={true} >
                    <Meta title="Excel Write" description="Write something in a given cell in a worksheet." />
                </Card>
                <Modal
                    title="Excel Write"
                    centered
                    open={open}
                    onOk={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                    width={900}
                >
                    
                    <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} id={id}>
                        <Testform></Testform>
                        {/* <Row>
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
                                        <Popover placement="topRight" title="Examples" content={examples} trigger="click">
                                            <Button>Examples</Button>
                                        </Popover>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Tabs defaultActiveKey="1">
                            <Tabs.TabPane tab="Syntax 1" key="1">
                                {inputs.map((input) => {
                                    return (input);
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
                                    return (input2);
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
                                    return (input3);
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
                            <Tabs.TabPane tab="Syntax 4" key="4">
                                {inputs4.map((input4) => {
                                    return (input4);
                                })}

                                <Row>
                                    <Col offset={12}>
                                        <Button
                                            type="dashed"
                                            onClick={() => add4()}
                                            shape="circle"
                                            icon={<PlusOutlined />}
                                        >
                                        </Button>
                                    </Col>
                                </Row>
                            </Tabs.TabPane>
                        </Tabs> */}
                    </Form>
                </Modal>
            </div>
        </>
    )
};


export default ExcelWrite