import React, { useState, useEffect } from "react";
import { Button, Form, Input, Modal, Row, Radio, Card } from "antd";
import { getFirestore, doc, getDoc } from "@firebase/firestore";
import Testform from "../../../Test/testForm";
import { Title } from "@mui/icons-material";
import '../../../App.css'
const db = getFirestore();

const gridStyle= {
  width: '44%',
  textAlign: 'center',
  justifyContent: 'center',
  height: '38px',
  marginTop: '50px',
  marginLeft: '10px',
};

const group = {
  display: 'flex',
};

function searchFunction(input, nameSearch) {
  try {
    let text = input.toUpperCase();
    const name = nameSearch.toUpperCase();
    return name.search(text) > -1;
  } catch (e) {
    return false;
  }
}

function RenderFunctions(functions, group, collection) {
  console.log("RenderFunctions", functions);
  console.log("RenderGroup", group);
  console.log("RenderCollection", collection);

  return functions.functions
    .filter(
      (element) =>
        element.collection === functions.collection &&
        element.group == functions.group
    )
    .map((item) => (
      <>
        {" "}
        <Button
          style={{
            height: 120,
            borderRadius: 40,
            borderColor: "white",
          }}
          onClick={(element) => {
            // add(item);
          }}
        >
          <div className="imgp">
            <img src="favicon.ico" alt="logo" style={{ width: 70 }} />
            <p style={{ color: "black", marginLeft: 0 }}>
              <b>{item.function}</b>
            </p>
          </div>
        </Button>
      </>
    ));
}

export default function Readers(props) {
  console.log("submit in muf is ", props.submit);
  const [formArray, setFormArray] = useState([
    {
      id: 1,
      text: "Excel",
      src: "../../../img/excelIcon.ico",
      collection: "Excel",
      function: "Remove Duplicate",
    },
    {
      id: 2,
      text: "Mix",
      src: "../../../img/mixIcon.png",
      collection: "Mix",
      function: "Write",
    },
    {
      id: 3,
      text: "File",
      src: "../../../img/fileIcon.png",
      collection: "File",
      function: "Write",
    },
  ]);

  const [form] = Form.useForm();
  const [group, setGroup] = useState("Read & Write");
  const onRequiredTypeChange = ({ groupValue }) => {
    setGroup(groupValue);
  };

  const [open, setOpen] = useState([false, false, false]);

  function handleOpen(index, expand) {
    const nextOpen = open.map((o, i) => {
      return i == index && expand;
    });

    setOpen(nextOpen);
  }

  const add = async (data) => {
    const colRef = doc(db, data.collection, data.function);
    const docSnap = await getDoc(colRef);
    if (docSnap.exists()) {
      console.log(docSnap.data());
      props.setForms([
        ...props.forms,
        {
          id: props.id,
          form: (
            <Testform
              function={data.function}
              data={docSnap.data()}
              variables={props.variables}
              setVariables={props.setVariables}
              code={props.code}
              setCode={props.setCode}
              id={props.id}
            />
          ),
        },
      ]);
      props.setId(props.id + 1);
      // props.setNumberList([...props.numberList, props.id]);
    } else {
      console.log("no such document!");
    }
  };

  const onChange = (key) => {
    console.log(key);
  };

  const filteredData = props.functions.filter((el) =>
    searchFunction(props.input, el.function)
  );

  const { Search } = Input;
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    console.log(e);
  };

  //const [form] = Form.useForm();

  return formArray.lenght === 0 ? (
    <h1>empty</h1>
  ) : (
    formArray.map((data, index) => {
      return (
        <>
          {" "}
          <Button
            style={{ height: 120, borderRadius: 40, borderColor: "white" }}
            onClick={() => handleOpen(index, true)}
          >
            <div className="imgp">
              <img src={data.src} alt="logo" style={{ width: 70 }} />
              <p style={{ color: "black", marginLeft: 0 }}>
                <b>{data.text}</b>
              </p>
            </div>
          </Button>
          <Modal
            title="Excel"
            centered
            open={open[index]}
            onOk={() => handleOpen(index, false)}
            onCancel={() => handleOpen(index, false)}
            /*onClick={console.log(readers(data))}*/
            width={1000}
          >
            <Search
              placeholder="Búsqueda"
              onChange={inputHandler}
              className="search "
              enterButton
            />
            <Form
              form={form}
              layout="vertical"
              initialValues={{
                groupValue: group,
              }}
              onValuesChange={onRequiredTypeChange}
              group={group}
            >
              <Form.Item name="groupValue">
                <Radio.Group style={{display: 'flex'}}>
                  <Radio.Button style={gridStyle} value="Read & Write">Read & Write</Radio.Button>
                  <Radio.Button style={gridStyle} value="Manipulate Columns">
                    Manipulate Columns
                  </Radio.Button>
                  <Radio.Button style={gridStyle} value="CRUD Files"> CRUD Files</Radio.Button>
                  <Radio.Button style={gridStyle} value="Sort Filter and Count">
                    Sort Filter and Count
                  </Radio.Button>
                </Radio.Group>
              </Form.Item>
            </Form>

            <div
              className="scrollmenu"
              style={{ display: "flex", width: 906, flexWrap: "wrap" }}
            >
              <RenderFunctions
                functions={props.functions}
                group={group}
                collection={data.collection}
              />
              {/* {props.functions
                .filter((element) => element.collection === data.collection)
                .map((item) => (
                  <>
                    {" "}
                    <Button
                      style={{
                        height: 120,
                        borderRadius: 40,
                        borderColor: "white",
                      }}
                      onClick={(element) => {
                        add(item);
                      }}
                    >
                      <div className="imgp">
                        <img
                          src="favicon.ico"
                          alt="logo"
                          style={{ width: 70 }}
                        />
                        <p style={{ color: "black", marginLeft: 0 }}>
                          <b>{item.function}</b>
                        </p>
                      </div>
                    </Button>
                  </>
                ))} */}
            </div>
          </Modal>
        </>
      );
    })
  );
}
