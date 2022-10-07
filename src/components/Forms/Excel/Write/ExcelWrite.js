import React, { useState } from "react"
import { Form, Input, Checkbox, Button, Menu, Dropdown, Space, Col, Row } from 'antd'
import { MinusCircleOutlined, PlusOutlined, SmileOutlined, DownOutlined } from '@ant-design/icons';


function ExcelWrite(props) {
    const [inputs, setInputs] = useState([
        <Row>
            <Col span={8}>
                < Form.Item
                    label="write"
                    name="Write"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<Something>"} onChange={props.onChange} />
                </Form.Item >
            </Col>

            <Col span={8}>
                < Form.Item
                    label="in"
                    name="in"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<WorksheetKey>"} onChange={props.onChange} />
                </Form.Item >
            </Col>
            <Col span={8}>
                < Form.Item
                    label="cell"
                    name="Cell"
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
                    label="write"
                    name="Write"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<Something>"} onChange={props.onChange} />
                </Form.Item >
            </Col>

            <Col span={8}>
                < Form.Item
                    label="in"
                    name="in"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<WorksheetKey>"} onChange={props.onChange} />
                </Form.Item >
            </Col>
            <Col span={8}>
                < Form.Item
                    label="cell"
                    name="Cell"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input type="text" placeholder={"<ColRow>"} onChange={props.onChange} />
                </Form.Item >
            </Col>
        </Row>])
    }


    return (
        <div>
            <Form
                onFinish={props.finish}
            >
                {inputs.map((input) => {
                    return (input)
                })}
            </Form>
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

        </div>
    )

}

export default ExcelWrite