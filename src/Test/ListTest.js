import React, { useState, useEffect } from "react";
import { Button, Form } from "antd";
import items from "../components/Forms/AllFunctions";
import Testform from "./testForm";
import data from "../components/Forms/syntax.json";
import {
  getFirestore,
  doc,
  getDoc,
  onSnapshot,
  collection,
} from "@firebase/firestore";
const db = getFirestore();
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
function ListTest(props) {
  const filteredData = props.functions.filter((el) =>
    searchFunction(props.input, el.id)
  );


  const add = async (data) => {
    const colRef = doc(db, data.collection, data.id);
    const docSnap = await getDoc(colRef);
    if (docSnap.exists()) {
      console.log(docSnap.data());
      props.setForms([
        ...props.forms,
        <Testform
          data={docSnap.data()}
          variables={props.variables}
          setVariables={props.setVariables}
          code={props.code}
          setCode={props.setCode}
          id={props.id}
          
        />,
      ]);
      props.setId(props.id + 1);
      props.setNumberList([...props.numberList, props.id]);
    } else {
      console.log("no such document!");
    }
  };
  console.log("filter", filteredData);

  return (
    <ul>
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
                <b>{item.id}</b>
              </p>
            </div>
          </Button>
        </>
      ))}
    </ul>
  );
}

export default ListTest;
