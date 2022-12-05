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
    const date = new Date();

    const handleSearch = (value, options) => {
        let res = [];
        console.log(options);
    };


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
            let tempSet = ""
            let tempData = Object.values(data);
            let idx = 1;
            console.log("data", data);
            console.log("item arr", itemType);
            console.log('variables', props.variables);
            console.log('obj', Object.values(data));
            itemType.forEach((element) => {
                console.log(element);
                switch (element.key) {
                    case "set":
                        console.log(element)
                        console.log("tempData", tempData);
                        console.log('obj', Object.values(data));
                        tempSet = Object.values(tempData.shift());
                        tempCodeArr.push(tempSet[0]);
                        console.log(props.variables);
                        props.variables.get(element.val) === undefined ? props.setVariables(props.variables.set(element.val, [tempSet[0]])) : props.setVariables(props.variables.set(props.variables.get(element.val).push(tempSet[0])));
                        break;
                    case "text":
                        const tempText = Object.values(tempData.shift());
                        console.log(tempText);
                        tempCodeArr.push(tempText);
                        break;
                    case "write":
                        const tempWrite = Object.values(tempData.shift());
                        console.log(tempWrite);
                        tempCodeArr.push(`"${tempWrite}"`);
                        break;
                    case "path":
                        const tempPath = Object.values(tempData.shift());
                        console.log(tempText);
                        tempCodeArr.push(`"<<<home>>>${tempPath}"`);
                        break;
                    case "filepicker":
                        tempSet = Object.values(tempData.shift());
                        console.log("filePicker", tempSet[0].file.name);
                        tempCodeArr.push(` <<<root>>> ${tempSet[0].file.name}`);
                        break;
                    case "varGet":
                        console.log('varget',element)
                        tempSet = Object.values(tempData.shift());
                        tempCodeArr.push(tempSet[0]);
                        props.variables.get(varSet[0]) === undefined ? props.setVariables(props.variables.set(varSet[0], [tempSet[0]])) : props.setVariables(props.variables.set(props.variables.get(varSet).push(tempSet[0])));
                        break
                    case "varSet":
                        console.log(element)
                        varSet = Object.values(tempData.shift());
                        tempCodeArr.push(varSet[0]);
                        break
                    case "get":
                        console.log(element)
                        tempSet = Object.values(tempData.shift());
                        tempCodeArr.push(tempSet[0]);
                        //! check this not working 
                        // props.variables.get(element.val) === undefined ? props.setVariables(props.variables.set(element.val, [tempSet[0]])) : props.setVariables(props.variables.set(props.variables.get(element.val).push(tempSet[0])));
                        break
                    default:
                        tempCodeArr.push(element.val)
                        break;
                }
            })
            console.log(tempCodeArr)
            console.log(tempVar);
            for (const item of tempVar) {
                console.log(item);
            }
            setTempVar(tempVar.clear());
            console.log(size);
            while (size.length !== 0) {
                const firstElement = tempCodeArr.shift()
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
            // console.log(props.code);
            // console.log("prop id", props.id)
            props.setStatus(props.status.set(props.id, { color: "green", text: "Complete" }));
            // console.log(props.status.get(props.id));
            props.setUpdate(true);
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
                    <div onClick={() => { addCard(parseInt(Object.values(props.data.templates)[i - 1].syntax)) }}>
                        <Card
                            style={{
                                width: 300,
                            }}
                        >
                            {i}
                            <h3 style={{ color: "black", textAlign: "left" }}>{Object.values(props.data.templates)[i - 1].example}</h3>
                        </Card>
                    </div>
                </Col>
            );
            if (i % 3 === 0) {
                cardArr.push(
                    <Row gutter={[12, 24]}>
                        {temp}
                    </Row>
                );
                temp = [];
            }
        }
        cardArr.push(
            <Row gutter={[12, 24]}>
                {temp}
            </Row>
        )
        return cardArr.map((item) => {
            return (
                <>
                    {item}
                </>
            )
        })
    };

    //! add new line with example blocks function 
    const addCard = (index) => {
        const dataForms = (props.data.forms[index + 1])
        const temp = [];
        const itemTypeArr = itemType;
        setSize([...size, Object.values(dataForms).length]);
        Object.values(dataForms).forEach((val, index) => {
            itemTypeArr.push({ key: val.Type, val: val.PlaceHolder });
            console.log(val);
            switch (val.Type) {
                case "text":
                    console.log(index, val.PlaceHolder);
                    temp.push(
                        <>
                            {
                                <>
                                    <Col>
                                        <Form.Item
                                            name={[`${val.Type}${date}`, val.PlaceHolder]}
                                            rules={[
                                                { required: true, message: "Please fill this out" },
                                            ]}
                                            style={{ width: "auto" }}
                                        >
                                            <Input
                                                type={val.Type}
                                                placeholder={val.PlaceHolder}
                                                onChange={props.onChange}
                                                name={`${val.Type}${date}`}
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
                                            name={[`${val.Type}${date}`, val.PlaceHolder]}
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
                        const tempGet = []
                        console.log("check var map", props.variables.get(val.PlaceHolder));
                        props.variables.get(val.PlaceHolder).forEach((element) => {
                            console.log(element);
                            tempGet.push({ value: element });
                        })
                        console.log("tempGet", tempGet);
                        temp.push(
                            <>
                                {
                                    <>
                                        <Col>
                                            <Form.Item
                                                name={[`${val.Type}${date}`, val.PlaceHolder]}
                                                rules={[
                                                    { required: true, message: "Please fill this out" },
                                                ]}
                                            >
                                                <AutoComplete
                                                    onSelect={v => console.log("selected : " + v)}
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
                                                        name={`${val.Type}${date}`}
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
                                                        name={`${val.Type}${date}`}
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
                                            name={[`${val.Type}${date}`, val.PlaceHolder]}
                                            rules={[
                                                { required: true, message: "Please fill this out" },
                                            ]}
                                            style={{ width: "auto" }}
                                        >
                                            <Input
                                                type={val.Type}
                                                placeholder={val.PlaceHolder}
                                                onChange={props.onChange}
                                                name={`${val.Type}${date}`}
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
                                    <Col>
                                        <Form.Item
                                            name={[`${val.Type}${date}`, val.PlaceHolder]}
                                            rules={[
                                                { required: true, message: "Please fill this out" },
                                            ]}
                                            style={{ width: "auto" }}
                                        >
                                            <Input
                                                type={val.type}
                                                placeholder={val.PlaceHolder}
                                                name={`${val.Type}${date}`}
                                            />
                                        </Form.Item>
                                    </Col>
                                </>
                            }
                        </>
                    );
                    console.log(val)
            }
        })
        console.log("temp", temp);
        console.log("Item type arr", itemTypeArr);
        setItemType(itemTypeArr);
        setForms([...forms, temp]);
    }

    const add = () => {
        const temp = [];
        Object.values(props.data.forms)[key].map((item, index) => {
            switch (item.type) {
                case "text":
                    temp.push(
                        <>
                            {
                                <>
                                    <Col>
                                        <Form.Item
                                            name={[`${forms.length}${index}`, item.PlaceHolder]}
                                            label={item.title}
                                            rules={[
                                                { required: true, message: "Please fill this out" },
                                            ]}
                                            style={{ width: "auto" }}
                                        >
                                            <Input
                                                type={item.Type}
                                                placeholder={item.PlaceHolder}
                                                onChange={props.onChange}
                                                name={index}
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
                                        <Upload {...info}>
                                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                        </Upload>
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
                                <>
                                    <p style={{ color: "black" }}>{item.title}</p>
                                </>
                            }
                        </>
                    );
                    break;
            }
        });
        setForms([...forms, temp]);
    };

    const removeForm = (index) => {
        const tempForm = forms;
        const tempArr = itemType;
        tempForm.splice(index, 1);
        console.log(tempArr);
        console.log(Object.values(props.data.forms)[key]);
        tempArr.splice(index, Object.values(props.data.forms)[key].length);
        console.log(tempArr);
        setForms([...tempForm]);
        setItemType([...tempArr]);
    };

    return (
        <>
            <Card
                hoverable
                style={{ width: 800, maxHeight: 219 }}
                cover={<img alt="excel icon" src={props.data.src} width="100" height="200" />}
                onClick={() => setOpen(true)}
                maskClosable={true}
            >
                <Meta title={props.function} description={props.data.description[1]} style={{ marginTop: -152, marginLeft: 125 }} />
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
                <Form layout="inline" {...formProps}>
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
