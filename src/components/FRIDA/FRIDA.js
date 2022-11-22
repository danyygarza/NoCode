import React, { useEffect, useState } from "react";
import { Form, Button, Space, Col, Row, Badge } from "antd";
import Forms from "../../components/Forms/Forms";
import {
  getFirestore,
  doc,
  getDoc,
  onSnapshot,
  collection,
} from "@firebase/firestore";
import '../../App.css'
import FirebaseGroupUpdate from "../../Test/sketches/fireBaseGroups";
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



async function  getData()  {
  const citiesRef = collection(db,"Excel");
  const snapshot = await citiesRef.get();
  snapshot.forEach((doc) => {
    console.log(doc.id, "=>", doc.data());
  });
};

function Frida(props) {
  //FirebaseGroupUpdate()
  const [forms, setForms] = useState([]); // forms array
  const [elRefs, setElRefs] = React.useState([]); // reference array
  // const [functions, setFunctions] = useState([]);
  const [status, setStatus] = useState(new Map()); // will give you status of 
  const [update, setUpdate] = useState(false);
  const remove = (index) => {
    const temp = [...forms];
    temp.splice(index, 1);
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
                <Row>
                  <Col style={{ padding: 10, marginTop: 86 }}>
                    {index}
                  </Col>
                  {console.log(status.get(form.id))}
                  <Badge.Ribbon text={status.get(form.id) === undefined ? "pending" : status.get(form.id).text} color={status.get(form.id) === undefined ? "blue" : status.get(form.id).color}>
                    {form.form}
                  </Badge.Ribbon>
                  <Col style={{ padding: 10, marginTop: 86 }}>
                    <Button
                      onClick={() => {
                        remove(index);
                        const temp = [...elRefs];
                        temp.splice(index, 1);
                        setElRefs(temp);
                      }}
                    >
                      Delete Action
                    </Button>
                  </Col>
                </Row>
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
              functions={props.functions}
              status={status}
              setStatus={setStatus}
              setUpdate={setUpdate}
            />
          </Col>
        </Row>
      </div>
    </>
  );
}
export default Frida;
