import React, { useState, useForm, useEffect } from "react";
import {
  Form,
  Input,
  Card,
  Modal,
  Button,
  Popover,
  Row,
  Col,
  Tabs,
  Radio,
} from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useModalForm } from "sunflower-antd";
import "../App.css";


const buttonWidth = 70;
const { Meta } = Card;



export default function Testform(props) {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [key, setKey] = useState(0);
  const [forms, setForms] = useState([]);
  const [size] = useState(Object.values(props.data.forms)[key].length);
  const [item, setItem] = useState([]);
  const [codeArr, setCodeArr] = useState([])
  const description = (
    <>

    </>
  )

  const parameters = (
    <>
      {props.data.ExcelWriteParameters}
    </>
  )
  const syntax = (
    <>
      {props.data.ExcelWriteSyntax1}<br />
      {props.data.ExcelWriteSyntax2}<br />
      {props.data.ExcelWriteSyntax3}<br />
      {props.data.ExcelWriteSyntax4}<br />
    </>
  )

  const examples = (
    <>
      {props.data.ExcelWriteExample1}<br />
      {props.data.ExcelWriteExample2}<br />
      {props.data.ExcelWriteExample3}<br />
      {props.data.ExcelWriteExample4}<br />
      {props.data.ExcelWriteExample5}<br />
      {props.data.ExcelWriteExample6}<br />
      {props.data.ExcelWriteExample7}<br />
    </>
  )
  const {
    modalProps,
    formProps,
    show,
    formLoading,
    formValues,
    formResult,
    resetField,
  } = useModalForm({
    defaultVisible: false,
    autoSubmitClose: false,
    autoResetForm: false,
    submit(data) {
      console.log(forms)
      let tempString = "";
      let tempCodeArr = [];
      let tempData = Object.values(data);
      let idx = 0;
      console.log(tempData);
      forms.reverse().forEach((obj) => {
        console.log("obj", obj);
        for (let i = 0; i < obj.length; i++) {
          console.log(tempData[idx]);
          if (tempData[idx] !== undefined) {
            tempString.length === 0 ? tempString = `${(Object.keys(tempData[idx]))} ${(Object.values(tempData[idx]))} ` : tempString += `${(Object.keys(tempData[idx]))} ${(Object.values(tempData[idx]))} `;
          }
          idx++;
        }
        tempCodeArr.push(tempString);
        tempString = "";
      })
      console.log('tempCodeArr', tempCodeArr.reverse());
    },
    form,
  });

  const add = () => {
    const temp = []
    Object.values(props.data.forms)[key].map((item, index) => {
      return (
        temp.push(
          <>
            {
              item.type === "text" &&
              <>
                <Col>
                  <Form.Item name={[`${forms.length}${index}`, item.title]} label={item.title} rules={[{ required: true, message: 'Please fill this out' }]} style={{ width: 'auto' }}>
                    <Input type={item.type} placeholder={item.placeHolder} onChange={props.onChange} name={index} />
                  </Form.Item>
                </Col>
              </>
            }
          </>
        )
      )
    })
    setForms([...forms, temp]);
  }

  const removeForm = (index) => {
    const tempForm = forms;
    tempForm.splice(index, 1);
    setForms([...tempForm]);
  }



  return (
    <>
      < Card hoverable style={{ width: 800, }
      } cover={< img alt="excel icon" src="../../../../excelIcon.ico" />} onClick={() => setOpen(true)} maskClosable={true} >
        <Meta title="Excel Write" description="Write something in a given cell in a worksheet." />
      </Card >
      <Modal {...modalProps} title="useModalForm" open={open} onCancel={() => setOpen(false)} okText="submit" width={1200} height={800}>
        < Card hoverable style={{ width: 800, }} cover={< img alt="excel icon" src="../../../../excelIcon.ico" />} onClick={() => setOpen(true)} maskClosable={true} >
          <Meta title="Excel Write" description="Write something in a given cell in a worksheet." />
        </Card >
        <Row>
          <Col>
            <div className="demo">
              <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
                <Popover placement="topLeft" title="Description" content={description} trigger="click" className='popover-position'>
                  <Button>Description</Button>
                </Popover>
                <Popover placement="topLeft" title="Parameters" content={parameters} trigger="click" className='popover-position' >
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
        <Row>
          <Col>
            <Radio.Group defaultValue="a" buttonStyle="solid" onChange={(e) => setKey(e.target.value)}>
              {Object.keys(props.data.forms).map((_, index) => {
                return (
                  <Radio.Button value={index}>syntax: {index}</Radio.Button>
                )
              })}
            </Radio.Group>
          </Col>
        </Row>
        <Form layout="inline" {...formProps}>
          <Row>
            {forms.map((item, index) => {
              console.log()
              return (
                <>
                  <Row>
                    <Col>
                      <Button
                        className="add-button"
                        type="primary"
                        shape="circle"
                        icon={<MinusOutlined />}
                        size={"large"}
                        onClick={() => { removeForm(index) }}
                      />
                    </Col>
                    {item}
                  </Row>
                </>
              )
            })}
          </Row>
          < Row justify="center">
            <Col offset={8} span={4}>
              <Button
                className="add-button"
                type="primary"
                shape="circle"
                icon={<PlusOutlined />}
                size={"large"}
                onClick={() => add()}
              />
            </Col>

          </Row>

        </Form >
      </Modal >
    </>
  )
}
{
  /* //!  for text file picker */
}
{
  /* {item[1] === "file" &&
    <Form.Item
        name={[`${item[0] + id}`, `${item[0]}`]}
        label={item[0]}
        rules={[{ required: true, message: 'Please input your username!' }]}
    >
    <input> // 
    </Form.Item>} */
}
{
  /* //!  for text date */
}
{
  /* {item[1] === "date" &&
    <Form.Item
        name={[`${item[0] + id}`, `${item[0]}`]}
        label={item[0]}
        rules={[{ required: true, message: 'Please input your username!' }]}
    >
    </Form.Item>} */
}
