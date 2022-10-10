import React, { useState, useEffect, useImperativeHandle, forwardRef } from "react"
import { Form, Input, Checkbox, Button, Menu, Dropdown, Space, Col, Row } from 'antd'
import { MinusCircleOutlined, PlusOutlined, SmileOutlined, DownOutlined } from '@ant-design/icons';
import { Done } from "@mui/icons-material";
import Test from "../../Test/test";

let id = Date.now();

function ExcelWriteTest(props) {
    const [click, setClick] = useState(false);
    const [inputs, setInputs] = useState([
        <Row>
            <Col span={8}>
                < Form.Item
                    name={`write` + id}
                    label="Write"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<Something>"} onChange={props.onChange} />
                </Form.Item >
            </Col>

            <Col span={8}>
                < Form.Item
                    name={`in` + id}
                    label="in"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<WorksheetKey>"} onChange={props.onChange} />
                </Form.Item >
            </Col>
            <Col span={8}>
                < Form.Item
                    name={`cell` + id}
                    label="Cell"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<ColRow>"} onChange={props.onChange} />
                </Form.Item >
            </Col>
        </Row>
    ]);


    const add = () => {
        setInputs([...inputs, <Row>
            <Col span={8}>
                < Form.Item
                    name={`write` + id}
                    label="Write"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<Something>"} onChange={props.onChange} />
                </Form.Item >
            </Col>

            <Col span={8}>
                < Form.Item
                    name={`in` + id}
                    label="in"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<WorksheetKey>"} onChange={props.onChange} />
                </Form.Item >
            </Col>
            <Col span={8}>
                < Form.Item
                    name={`cell` + id}
                    label="Cell"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<ColRow>"} onChange={props.onChange} />
                </Form.Item >
            </Col>
        </Row>])
        setClick(true);
    }

    useEffect(() => {
        id = Date.now();
        setClick(false);
    }, [click])

    return (
        <div>
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
            <Row>
                <Button type="primary" htmlType="submit" >
                    Submit!!
                </Button>
                <Button type="primary" onClick={(event) => {
                    // console.log(event)
                    props.finish(Form.onFinish);
                }
                } >
                    test!!
                </Button>

            </Row>
        </div>
    )

}


export default ExcelWriteTest