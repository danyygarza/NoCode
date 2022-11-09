import React, { useState } from "react";
import { Button, Form } from "antd";
import items from "../components/Forms/AllFunctions";
import Testform from "./testForm";
import data from "../components/Forms/syntax.json";
import { getFirestore, doc, getDoc } from "@firebase/firestore";





function searchFunction(input, nameSearch) {
  try {
    let text = input.toUpperCase();
    const name = nameSearch.toUpperCase();
    return name.search(text) > -1;
  } catch (e) {
    return false;
  }
}
function ListTest(props) {
  
  const filteredData = props.functions.filter((el) =>
    searchFunction(props.input, el.function)
  );

  const db = getFirestore();

  const add = async (data) => {
    const colRef = doc(db, data.collection, data.function);
    const docSnap = await getDoc(colRef);
    if (docSnap.exists()) {
        console.log(docSnap.data())
        props.setForms([...props.forms,
        { id: props.id, form: < Testform function={data.function} data={docSnap.data()} variables={props.variables} setVariables={props.setVariables} code={props.code} setCode={props.setCode} id={props.id} /> }
        ])
        props.setId(props.id + 1);
        // props.setNumberList([...props.numberList, props.id]);
    }
    else {
        console.log("no such document!")
    }
}
  console.log("filter", filteredData);
  return (
    <div style={{display: 'flex'}}>
      {filteredData.map((item) => (
        <>
          {" "}
          <Button
            style={{ height: 120, borderRadius: 40, borderColor: "white" }}
            onClick={(event) => {
              add(item);
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
      ))}
    </div>
  );
}

export default ListTest;
