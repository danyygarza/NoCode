import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import { getFirestore, doc, getDoc } from "@firebase/firestore";

function searchFunction(input, nameSearch) {
  try {
    let text = input.toUpperCase();
    const name = nameSearch.toUpperCase();
    console.log("try", name.search(text) > -1);
    return name.search(text) > -1;
  } catch (e) {
    console.log("try", e.message);
    return false;
  }
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

  const [open, setOpen] = useState(false);
  const onChange = (key) => {
    console.log(key);
  };

  const { Search } = Input;
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const db = getFirestore();

  const readers = async (data) => {
    const colRef = doc(db, data.collection, data.function);
    const docSnap = await getDoc(colRef);
    if (docSnap.exists()) {
      console.log(docSnap.data());

      // props.setNumberList([...props.numberList, props.id]);
    } else {
      console.log("no such document!");
    }
  };

  //const [form] = Form.useForm();

  return formArray.lenght === 0 ? (
    <h1>empty</h1>
  ) : (
    formArray.map((data) => {
      return (
        <>
          {" "}
          <Button
            style={{ height: 120, borderRadius: 40, borderColor: "white" }}
            onClick={() => setOpen(true)}
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
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            /*onClick={console.log(readers(data))}*/
            width={900}
          >
            {console.log('functions',props.functions.filter((el) => el.collection === data.collection))}
            <div style={{ display: "flex" }}>
              {props.functions.filter((element) => element.collection === data.collection).map((item) => (
                <>
                  {" "}
                  <Button
                    style={{
                      height: 120,
                      borderRadius: 40,
                      borderColor: "white",
                    }}
                    // onClick={(event) => {
                    //   add(item);
                    // }}
                  >
                    <div className="imgp">
                      <img src="favicon.ico" alt="logo" style={{ width: 70 }} />
                      <p style={{ color: "black", marginLeft: 0 }}>
                        <b>{item.function}</b>
                      </p>
                    </div>
                  </Button>
                </>
              ))}
            </div>
          </Modal>
        </>
      );
    })
  );
}
