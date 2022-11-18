import React, { useEffect, useState } from "react";
import { Form, Button, Space, Col, Row } from "antd";
import Forms from "../../components/Forms/Forms";
import {
  getFirestore,
  doc,
  getDoc,
  onSnapshot,
  collection,
} from "@firebase/firestore";
import FirebaseGroupUpdate from "../../Test/sketches/fireBaseGroups";

const db = getFirestore();


function Frida(props) {
  FirebaseGroupUpdate()
  const [forms, setForms] = useState([]); // forms array
  const [elRefs, setElRefs] = React.useState([]); // reference array
  const [functions, setFunctions] = useState([]);

  const remove = (index) => {
    const temp = [...forms];
    temp.splice(index, 1);
    setForms(temp);
  };
  const getCollections = async () => {
    try {
      const docRef = doc(db, "Misc", "collections");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return Object.values(docSnap.data().collectionArr);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (err) {
      console.error(err);
    }
  };
  //! this will create array of refs from size of forms
  useEffect(() => {
    let temp = [];
    const fetchData = async () => {
      const collections = await getCollections();
      console.log(collections);
      collections.forEach((element) => {
        onSnapshot(collection(db, element), (snapshot) => {
          setFunctions((functions) => {
            return [
              ...functions.concat(
                snapshot.docs.map((doc) => ({
                  function: doc.id,
                  collection: element,
                  group: doc.data().category
                }))
              ),
            ];
          });
        });
      });
    };
    fetchData();
  }, []);
  console.log("temp", functions);
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
                {index}
                {form.form}
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
      </div>
    </>
  );
}
export default Frida;
