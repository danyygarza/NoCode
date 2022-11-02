import React, { useEffect, useState } from "react";
import { Form, Button, Space, Col, Row } from "antd";
import Forms from "../../components/Forms/Forms";
import { async } from "@firebase/util";
import {
  getFirestore,
  doc,
  getDoc,
  onSnapshot,
  collection,
  getDocs
} from "@firebase/firestore";
const db = getFirestore();


const testing = async (test) => {
  console.log("in testing function");
  const temp = await test;
  console.log("temp", temp);
  return temp;
};

async function  getData()  {
  const citiesRef = collection(db,"Excel");
  const snapshot = await citiesRef.get();
  snapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
  });
};

function Frida(props) {
  const [forms, setForms] = useState([]); // forms array
  const [elRefs, setElRefs] = React.useState([]); // reference array
  const [functions, setFunctions] = useState([])

    const handleClick = () => {
        for(const item of props.code){
            console.log(item); 
        }
    }


    const remove = (index) => {
        console.log("forms before remove", forms);
        const temp = [...forms];
        temp.splice(index, 1);
        const tempNumbers = props.numberList
        const tempCode = props.code; 

        console.log("number array", tempNumbers)
        console.log("number in idex", tempNumbers[index]);
        console.log("temp code", tempCode)

        tempCode.delete(tempNumbers[index]); 
        console.log(tempNumbers)
        tempNumbers.splice(index, 1);
        props.setNumberList(tempNumbers);
        setForms(temp);
    };

    //! this will create array of refs from size of forms
    useEffect(
      () =>
        onSnapshot(collection(db, "Excel"), (snapshot) =>
          setFunctions(snapshot.docs.map((doc) => ({ id: doc.id, collection: 'Excel'})))
        ),
      []
    );
    console.log(functions)

    return (
        <>
            <div className="main">
                {forms.length === 0 ? (
                    <h1>Empty</h1>
                ) : (
                    forms.map((form, index) => {
                        return (
                            <Space
                                style={{
                                    display: "flex",
                                    marginBottom: 8,
                                }}
                                align="baseline"
                            >
                                {form}
                                <Button
                                    onClick={() => {
                                        console.log("index from click: ", index, form);
                                        remove(index);
                                        console.log(index);
                                        const temp = [...elRefs];
                                        temp.splice(index, 1);
                                        setElRefs(temp);
                                    }}
                                >
                                    Delete Action
                                </Button>
                            </Space>
                        );
                    })
                )}
                <Row>
                    <Col>
                        <Forms
                            variables={props.variables}
                            setVariables={props.setVariables}
                            setForms={setForms}
                            forms={forms}
                            code={props.code}
                            setCode={props.setCode}
                            numberList={props.numberList}
                            setNumberList={props.setNumberList}
                            id={props.id}
                            setId={props.setId}
                            functions={functions}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={handleClick}>
                            Test
                        </Button>
                    </Col>
                </Row>
            </div>
        </>
    );
};
export default Frida;
