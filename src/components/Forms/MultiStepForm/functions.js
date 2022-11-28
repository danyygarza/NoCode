import React from 'react'
import {Button} from 'antd';
import Testform from "../../../Test/testForm";
import {
  getFirestore,
  doc,
  getDoc,
  onSnapshot,
  collection,
} from "@firebase/firestore";



const db = getFirestore();

function RenderFunctions(props) {
  console.log('render', props.functions)
  console.log('render', props.group)
  console.log('render', props.collection)
  
  console.log("props 21",props);

  const add = async (data) => {
    const colRef = doc(db, data.collection, data.function);
    const docSnap = await getDoc(colRef);
    console.log('prop forms',props.forms);
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
              setId = {props.setId}
              status={props.status}
              setStatus={props.setStatus}
              setUpdate={props.setUpdate}
      
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
  
  return props.functions
    .filter(
      (element) =>
        element.collection === props.collection &&
        element.group === props.group
    )
    .map((item) => (
      <>
        {console.log('item', item)}
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
            <img src={props.src} alt="logo" style={{ width: 70 }} />
            <p style={{ color: "black", marginLeft: 0 }}>
              <b>{item.function}</b>
            </p>
          </div>
        </Button>
      </>
    ));
}

export default RenderFunctions