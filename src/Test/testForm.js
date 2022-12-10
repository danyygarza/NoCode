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
  message,
  Upload,
  AutoComplete,
} from "antd";
import { PlusOutlined, MinusOutlined, UploadOutlined } from "@ant-design/icons";
import { useModalForm } from "sunflower-antd";
import "../App.css";
import { element } from "prop-types";
import { PropaneSharp } from "@mui/icons-material";

const buttonWidth = 70;
const { Meta } = Card;

const { Option } = AutoComplete;

function Testform(props) {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [key, setKey] = useState(0);
  const [forms, setForms] = useState([]);
  const [size, setSize] = useState([]);
  const [item, setItem] = useState([]);
  const [codeArr, setCodeArr] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempVar, setTempVar] = useState(new Map());
  const [itemType, setItemType] = useState([]);
  const [options, setOptions] = useState([]);
  const [syntaxArray, setSyntaxArray] = useState([]);
  const [propInputs, setPropInputs] = useState(props.inputs);
  const date = new Date();

  const handleSearch = (value, options) => {
    let res = [];
    console.log(options);
  };
  let name = "woop";
  const preloadedValues = {};
  // preloadedValues[name] = 'testName'
  // console.log('preloaded', preloadedValues)

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const description = Object.values(props.data.description).map((text) => {
    return (
      <>
        <p style={{ color: "black", textAlign: "left" }}>{text}</p>
      </>
    );
  });

  const info = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    progress: {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
  };

  const parameters = <>{props.data.parameters}</>;
  const syntax = Object.values(props.data.syntax).map((text) => {
    return (
      <>
        <p style={{ color: "black", textAlign: "left" }}>{text}</p>
      </>
    );
  });

  const examples = Object.values(props.data.examples).map((text) => {
    return (
      <>
        <p style={{ color: "black", textAlign: "left" }}>{text}</p>
      </>
    );
  });
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
    autoSubmitClose: true,
    autoResetForm: false,
    //! handles submit logic for the forms
    submit(data) {
      console.log(forms);
      let tempString = "";
      const tempCodeArr = [];
      let varSet = "";
      let tempSet = "";
      let tempKey = "";
      let tempInput = "";
      let tempData = Object.values(data);
      let tempKeys = Object.keys(data);
      let idx = 1;
      let formData = {
        function: props.function,
        collection: props.collection,
        inputs: [],
        syntax: [],
      };
      console.log("data", data);
      console.log("tempData", tempData);
      console.log("item arr", itemType);
      
      console.log(props.variables);
      formData.syntax = syntaxArray;
      itemType.forEach((element) => {
        console.log("elementLog", element);

        switch (element.key) {
          case "set":
            tempSet = Object.values(tempData.shift());

            tempKey = tempKeys.shift();
            tempInput = {
              key: element.key,
              name: tempKey,
              value: tempSet[0],
            };
            formData.inputs.push(tempInput);
            console.log("tempInput", tempInput);
            tempCodeArr.push(tempSet[0]);
            console.log(props.variables);
            props.variables.get(element.val) === undefined
              ? props.setVariables(
                  props.variables.set(element.val, [tempSet[0]])
                )
              : props.setVariables(
                  props.variables.set(
                    props.variables.get(element.val).push(tempSet[0])
                  )
                );

            break;
          case "text":
            const tempText = Object.values(tempData.shift());
            tempKey = tempKeys.shift();
            tempInput = {
              key: element.key,
              name: tempKey,
              value: tempText[0],
            };
            formData.inputs.push(tempInput);

            console.log(tempText);
            tempCodeArr.push(tempText);
            break;
          case "write":
            const tempWrite = Object.values(tempData.shift());
            tempKey = tempKeys.shift();
            tempInput = {
              key: element.key,
              name: tempKey,
              value: tempWrite[0],
            };
            formData.inputs.push(tempInput);

            console.log(tempWrite);
            tempCodeArr.push(`"${tempWrite}"`);
            break;
          case "path":
            const tempPath = Object.values(tempData.shift());
            tempKey = tempKeys.shift();
            tempInput = {
              key: element.key,
              name: tempKey,
              value: tempPath[0],
            };
            formData.inputs.push(tempInput);

            console.log(tempText);
            tempCodeArr.push(`"<<<home>>>${tempPath}"`);
            break;
          case "filepicker":
            tempSet = Object.values(tempData.shift());
            tempKey = tempKeys.shift();
            tempInput = {
              key: element.key,
              name: tempKey,
              value: tempSet[0],
            };
            formData.inputs.push(tempInput);

            console.log("filePciker", tempSet[0].file.name);
            tempCodeArr.push(` <<<root>>> ${tempSet[0].file.name}`);
            break;
          case "varGet":
            tempSet = Object.values(tempData.shift());
            tempKey = tempKeys.shift();
            tempInput = {
              key: element.key,
              name: tempKey,
              value: tempSet[0],
            };
            formData.inputs.push(tempInput);

            console.log(element);
            tempCodeArr.push(tempSet[0]);
            props.variables.get(varSet[0]) === undefined
              ? props.setVariables(props.variables.set(varSet[0], [tempSet[0]]))
              : props.setVariables(
                  props.variables.set(
                    props.variables.get(varSet).push(tempSet[0])
                  )
                );
            break;
          case "varSet":
            varSet = Object.values(tempData.shift());
            tempKey = tempKeys.shift();
            tempInput = {
              key: element.key,
              name: tempKey,
              value: varSet[0],
            };
            formData.inputs.push(tempInput);

            console.log(element);
            tempCodeArr.push(varSet[0]);
            break;
          case "get":
            tempSet = Object.values(tempData.shift());
            tempKey = tempKeys.shift();
            tempInput = {
              key: element.key,
              name: tempKey,
              value: tempSet[0],
            };
            formData.inputs.push(tempInput);

            console.log(element);
            tempCodeArr.push(tempSet[0]);
            //! check this not working
            // props.variables.get(element.val) === undefined ? props.setVariables(props.variables.set(element.val, [tempSet[0]])) : props.setVariables(props.variables.set(props.variables.get(element.val).push(tempSet[0])));
            break;
          default:
            console.log("defaultVal", element.val);

            tempCodeArr.push(element.val);
            // tempKey = tempKeys.shift();
            // tempInput = {
            //   key: element.key,
            //   name: tempKey,
            //   value: element.val,
            // };
            // formData.inputs.push(tempInput);

            break;
        }
      });
      console.log("formData", formData);
      console.log(tempCodeArr);
      console.log(tempVar);
      for (const item of tempVar) {
        console.log(item);
      }
      setTempVar(tempVar.clear());
      console.log(size);
      while (size.length !== 0) {
        const firstElement = tempCodeArr.shift();

        console.log(idx != 0 && idx % size[0] === 0);
        if (idx != 0 && idx % size[0] === 0) {
          console.log("inside the true");
          tempString = tempString.concat(" ", firstElement);
          tempString = tempString.concat("\n", "");

          tempCodeArr.push(tempString);
          console.log("temp code array", tempCodeArr);
          setSize(size.shift());
          idx = 1;
        } else {
          tempString = tempString.concat(" ", firstElement);
          idx += 1;
        }
      }
      // console.log(tempString);
      // console.log(tempCodeArr);
      props.setCode(props.code.set(props.id, tempString));
      props.setCards(props.cards.set(props.id, formData));
      // console.log(props.code);
      // console.log("prop id", props.id)
      props.setStatus(
        props.status.set(props.id, { color: "green", text: "Complete" })
      );
      // console.log(props.status.get(props.id));
      props.setUpdate(true);
      props.preload();
    },
    form,
  });

  //! these are the examples are being rendered
  const renderSyntaxCards = () => {
    console.log("inside the render cards");
    const cardArr = [];
    let temp = [];
    for (let i = 1; i <= Object.values(props.data.templates).length; i++) {
      temp.push(
        <Col>
          <div
            onClick={() => {
              addCard(
                null,
                parseInt(Object.values(props.data.templates)[i - 1].syntax)
              );
            }}
          >
            <Card
              style={{
                width: 300,
              }}
            >
              {i}
              <h3 style={{ color: "black", textAlign: "left" }}>
                {Object.values(props.data.templates)[i - 1].example}
              </h3>
            </Card>
          </div>
        </Col>
      );
      if (i % 3 === 0) {
        cardArr.push(<Row gutter={[12, 24]}>{temp}</Row>);
        temp = [];
      }
    }
    cardArr.push(<Row gutter={[12, 24]}>{temp}</Row>);

    return cardArr.map((item) => {
      return <>{item}</>;
    });
  };

  //! add new line with example blocks function
  const addCard = (inputs, index) => {
    const dataForms = props.data.forms[index + 1];
    const temp = [];
    const itemTypeArr = itemType;
    console.log("dataforms", dataForms);
    setSize([...size, Object.values(dataForms).length]);
    let tempSyntaxArray = syntaxArray;
    tempSyntaxArray.push(index);
    setSyntaxArray(tempSyntaxArray);
    console.log("syntaxArray", syntaxArray);
    Object.values(dataForms).forEach((val, index) => {
      itemTypeArr.push({ key: val.Type, val: val.PlaceHolder });
      console.log("val", val);
      let itemName = [val.Type + date, val.PlaceHolder];
      let inputName = val.Type + date;
      if (inputs != null && val.Type != "word") {
        //console.log("nameSet", name, 'counter: ', counter,'type: ', val.Type);
        let tempInputs = propInputs;
        itemName = tempInputs.shift().name;
        setPropInputs(tempInputs);
      }

      switch (val.Type) {
        case "text":
          temp.push(
            <>
              {
                <>
                  <Col>
                    <Form.Item
                      name={itemName}
                      rules={[
                        { required: true, message: "Please fill this out" },
                      ]}
                      style={{ width: "auto" }}
                    >
                      <Input
                        type={val.Type}
                        placeholder={val.PlaceHolder}
                        onChange={props.onChange}
                        name={inputName}
                      />
                    </Form.Item>
                  </Col>
                </>
              }
            </>
          );
          break;
        case "filepicker":
          temp.push(
            <>
              {
                <>
                  <Col>
                    <Form.Item
                      name={item.name}
                      rules={[
                        { required: true, message: "Please fill this out" },
                      ]}
                      style={{ width: "auto" }}
                    >
                      <Upload {...info}>
                        <Button icon={<UploadOutlined />}>upload file</Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                </>
              }
            </>
          );
          break;
        case "word":
          temp.push(
            <>
              {
                <Col>
                  <p style={{ color: "black" }}>{val.PlaceHolder}</p>
                </Col>
              }
            </>
          );
          break;
        case "get":
          //! temp code, needs to be changed
          console.log(val);
          console.log(val.PlaceHolder);
          console.log(props.variables.get(val.PlaceHolder));
          console.log("varaibales", props.variables);
          try {
            const tempGet = [];
            console.log("check var map", props.variables.get(val.PlaceHolder));
            props.variables.get(val.PlaceHolder).forEach((element) => {
              console.log(element);
              tempGet.push({ value: element });
            });
            console.log("tempGet", tempGet);
            temp.push(
              <>
                {
                  <>
                    <Col>
                      <Form.Item
                        name={itemName}
                        rules={[
                          { required: true, message: "Please fill this out" },
                        ]}
                      >
                        <AutoComplete
                          onSelect={(v) => console.log("selected : " + v)}
                          filterOption={(inputValue, option) =>
                            option.value
                              .toUpperCase()
                              .indexOf(inputValue.toUpperCase()) !== -1
                          }
                          options={tempGet}
                        >
                          <Input
                            type={val.type}
                            placeholder={val.PlaceHolder}
                            name={inputName}
                            value={options}
                          />
                        </AutoComplete>
                      </Form.Item>
                      {/* <Form.Item
                                                name={[`${val.Type}${date}`, val.PlaceHolder]}
                                                rules={[
                                                    { required: true, message: "Please fill this out" },
                                                ]}
                                                style={{ width: "auto" }}
                                            >
                                                <AutoComplete
                                                    // placeholder={val.PlaceHolder}
                                                    options={tempGet}
                                                >
                                                    <Input
                                                        type={val.type}
                                                        placeholder={val.PlaceHolder}
                                                        name={inputName}
                                                    />
                                                </AutoComplete>
                                            </Form.Item> */}
                    </Col>
                  </>
                }
              </>
            );
          } catch (e) {
            console.log(e);
          }
          break;
        case "set":
          temp.push(
            <>
              {
                <>
                  <Col>
                    <Form.Item
                      name={itemName}
                      rules={[
                        { required: true, message: "Please fill this out" },
                      ]}
                      style={{ width: "auto" }}
                    >
                      <Input
                        type={val.Type}
                        placeholder={val.PlaceHolder}
                        onChange={props.onChange}
                        name={inputName}
                      />
                    </Form.Item>
                  </Col>
                </>
              }
            </>
          );
          break;
        default:
          temp.push(
            <>
              {
                <>
                  setItem
                  <Col>
                    {console.log("defaultCase addCard", itemName)}
                    <Form.Item
                      name={itemName}
                      rules={[
                        { required: true, message: "Please fill this out" },
                      ]}
                      style={{ width: "auto" }}
                    >
                      <Input
                        type={val.type}
                        placeholder={val.PlaceHolder}
                        name={inputName}
                      />
                    </Form.Item>
                  </Col>
                </>
              }
            </>
          );
          console.log(val);
      }
    });
    console.log("temp", temp);
    console.log("Item type arr", itemTypeArr);
    setItemType(itemTypeArr);
    setForms([...forms, temp]);
    console.log('forms addcard', temp)
  };

  // const add = () => {
  //   const temp = [];
  //   Object.values(props.data.forms)[key].map((item, index) => {
  //     switch (item.type) {
  //       case "text":
  //         temp.push(
  //           <>
  //             {
  //               <>
  //                 <Col>
  //                   <Form.Item
  //                     name={[`${forms.length}${index}`, item.PlaceHolder]}
  //                     label={item.title}
  //                     rules={[
  //                       { required: true, message: "Please fill this out" },
  //                     ]}
  //                     style={{ width: "auto" }}
  //                   >
  //                     <Input
  //                       type={item.Type}
  //                       placeholder={item.PlaceHolder}
  //                       onChange={props.onChange}
  //                       name={index}
  //                     />
  //                   </Form.Item>
  //                 </Col>
  //               </>
  //             }
  //           </>
  //         );
  //         break;
  //       case "filepicker":
  //         temp.push(
  //           <>
  //             {
  //               <>
  //                 <Col>
  //                   <Upload {...info}>
  //                     <Button icon={<UploadOutlined />}>Click to Upload</Button>
  //                   </Upload>
  //                 </Col>
  //               </>
  //             }
  //           </>
  //         );
  //         break;
  //       case "word":
  //         temp.push(
  //           <>
  //             {
  //               <>
  //                 <p style={{ color: "black" }}>{item.title}</p>
  //               </>
  //             }
  //           </>
  //         );
  //         break;
  //     }
  //   });
  //   setForms([...forms, temp]);
  // };

  const removeForm = (index) => {
    console.log(
      "itype before",
      itemType,
      "len: ",
      Object.values(Object.values(props.data.forms)[key]).length,
      "values: ",
      Object.values(props.data.forms)[key]
    );
    const tempForm = forms;
    const tempArr = itemType;
    tempForm.splice(index, 1);
    console.log(tempArr);
    console.log(Object.values(props.data.forms)[key]);
    const syntaxLenght = Object.values(Object.values(props.data.forms)[key])
      .length;
    const typeIndex =
      Object.values(Object.values(props.data.forms)[key]).length * index;
    tempArr.splice(typeIndex, syntaxLenght);
    console.log(tempArr);
    setForms([...tempForm]);
    setItemType([...tempArr]);
    console.log("itype after", itemType);
  };

  useEffect(() => {
    // if (props.inputs != "" && props.inputs != undefined) {
    //   props.inputs.forEach((inputPair) => {
    //     console.log(inputPair);
    //   });
    // }
    // form.setFieldsValue({
    //   yop: "ypo",
    // });

    if (props.inputs != null) {
      console.log("propCards", props.cards);
      console.log("propInputs", props.inputs);
      console.log("syntaxTypes", props.syntaxTypes);

      for (let i = 0; i < props.inputs.length; i++) {
        //console.log('inputType',typeof props.inputs[i].value)
        preloadedValues[props.inputs[i].name] = props.inputs[i].value;
      }
      for (let i = 0; i < props.syntaxTypes.length; i++) {
        //console.log('inputs', i ,props.inputs[i])

        addCard(propInputs, props.syntaxTypes[i]);
      }

      //addCard(props.inputs,0)
      //console.log('namePush', preloadedValues)
      form.setFieldsValue(preloadedValues);
    }
  }, []);
  console.log("namePush", preloadedValues);
  form.setFieldsValue(preloadedValues); //Pre fills the saved forms with the data recieved
  return (
    <>
      <Card
        hoverable
        style={{ width: 800, maxHeight: 219 }}
        cover={
          <img alt="excel icon" src={props.data.src} width="100" height="200" />
        }
        onClick={() => setOpen(true)}
        maskClosable={true}
      >
        <Meta
          title={props.function}
          description={props.data.description[1]}
          style={{ marginTop: -152, marginLeft: 125 }}
        />
      </Card>
      <Modal
        {...modalProps}
        title={props.function}
        onCancel={() => setOpen(false)}
        open={open}
        okText="Submit"
        width={1200}
        height={800}
      >
        <Row>
          <Col>
            <div className="demo">
              <div style={{ marginLeft: buttonWidth, whiteSpace: "nowrap" }}>
                <Popover
                  placement="topLeft"
                  title="Description"
                  content={description}
                  trigger="click"
                  className="popover-position"
                >
                  <Button>Description</Button>
                </Popover>
                <Popover
                  placement="topLeft"
                  title="Parameters"
                  content={parameters}
                  trigger="click"
                  className="popover-position"
                >
                  <Button>Parameters</Button>
                </Popover>
                <Popover
                  placement="top"
                  title="Syntax"
                  content={syntax}
                  trigger="click"
                  className="popover-position"
                >
                  <Button>Syntax</Button>
                </Popover>
                <Button type="primary" onClick={showModal}>
                  Examples
                </Button>
                <Modal
                  title="Pick the example that looks most similar to what you are trying to achieve  "
                  open={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  width={1000}
                >
                  {renderSyntaxCards()}
                </Modal>
              </div>
            </div>
          </Col>
        </Row>
        <Form form={form} layout="inline" {...formProps}>
          <Row>
            {forms.map((item, index) => {
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
                        onClick={() => {
                          removeForm(index);
                        }}
                      />
                    </Col>
                    {item}
                  </Row>
                </>
              );
            })}
          </Row>
        </Form>
      </Modal>
    </>
  );
}

export default Testform;
