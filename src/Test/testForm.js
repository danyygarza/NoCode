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
  const [forms, setForms] = useState(Object.values(props.data.forms)[key]);
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
      let i = 0;
      console.log("data", data)
      console.log(size);
      Object.values(data).forEach((obj) => {
        if (i === size - 1) {
          i = 0;
          console.log(tempString);
          tempCodeArr.push(tempString);
          Object.values(data).splice(0, forms.length);
          tempString = "";
        }
        else {
          if (obj !== undefined) {
            tempString.length === 0 ? tempString = `${(Object.keys(obj))} ${(Object.values(obj))} ` : tempString += `${(Object.keys(obj))} ${(Object.values(obj))} `;
          }
          i++;
        }
      })
      console.log("code arr", codeArr);
      setCodeArr([...codeArr, tempCodeArr]);
      console.log('tempCodeArr', tempCodeArr);

    },
    form,
  });



  const add = () => {
    setForms(forms.concat(item));

  }
  const removeForm = () => {
    const tempForms = forms
    // const tempFields = form.getFieldsValue()
    for (let i = tempForms.length - item.length; i < tempForms.length; i++) {
      try {
        form.resetFields([`${i}`]);
      } catch (err) {
        console.log(err);
      }
    }

    tempForms.splice(tempForms.length - item.length, item.length)
    console.log("tempForms", tempForms)
    setForms([...tempForms])
  }

  useEffect(() => {
    console.log("rendering again")
    const tempArray = []
    setCodeArr([]);
    console.log('codeArr', codeArr);
    Object.values(props.data.forms)[key].map((item) => {
      tempArray.push(item)
    })
    setItem(tempArray)
    // form.resetFields();
    // setForm()
  }, [forms])



  return (
    <>
      < Card hoverable style={{ width: 800, }
      } cover={< img alt="excel icon" src="../../../../excelIcon.ico" />} onClick={() => setOpen(true)} maskClosable={true} >
        <Meta title="Excel Write" description="Write something in a given cell in a worksheet." />
      </Card >
      <Modal {...modalProps} title="useModalForm" open={open} onCancel={() => setOpen(false)} okText="submit" width={1200} height={800}>
        <>
          <Row>
            <Col>
              <div className="demo">
                <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
                  <Popover placement="topLeft" title="Description"content={description}  trigger="click" className='popover-position'>
                    <Button>Description</Button>
                  </Popover>
                  <Popover placement="topLeft" title="Parameters"content={parameters}  trigger="click" className='popover-position' >
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
          
          <p>
            submit: username {formValues.username} email {formValues.email}
          </p>
          <p>result: {formResult}</p>
          <Form layout="inline" {...formProps}>
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
            <Row>
              {forms.map((item, index) => {

                return (
                  <>
                    {
                      item.type === "text" &&
                      <>
                        <Col>
                          <Form.Item name={[`${index}`, item.title]} label={item.title} rules={[{ required: true, message: 'Please fill this out' }]} style={{ width: 'auto' }}>
                            <Input type={item.type} placeholder={item.placeHolder} onChange={props.onChange} name={index} />
                          </Form.Item>
                        </Col>
                      </>
                    }
                  </>
                )
              })}

            </Row>
            <Row justify="center">
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
              <Col offset={8} span={4}>
                <Button
                  className="add-button"
                  type="primary"
                  shape="circle"
                  icon={<MinusOutlined />}
                  size={"large"}
                  onClick={() => { removeForm() }}
                />
              </Col>
            </Row>


          </Form>
        </>
      </Modal>
    </>
  );
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
