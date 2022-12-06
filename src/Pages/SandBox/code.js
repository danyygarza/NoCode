import React, { useState, useEffect } from 'react'
import { Button, Row, Col } from 'antd'
import Frida from '../../components/FRIDA/FRIDA';

import { useLocation } from 'react-router-dom';
import {
    getFirestore,
    doc,
    getDoc,
    onSnapshot,
    collection,
} from "@firebase/firestore";


import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';
const db = getFirestore();

function Code() {
    const [functions, setFunctions] = useState([]);
    const [variables, setVariables] = useState(new Map()) //! Map with all the variables
    const [code, setCode] = useState(new Map()); //!! Final code 
    const [id, setId] = useState(0);
    const locData = useLocation();
    const [storage, setStorage] = useState(
        window.localStorage.getItem('SAVE_FUNCTIONS')
    );
    const setLocalStorage = value => {
        console.log(variables);
        try {
            setStorage(value);
            window.localStorage.setItem("SAVE_FUNCTIONS", value)
            console.log('value', value)
        } catch (error) {
            console.error(error)
        }
    }
    // ! get collection of data from firestore
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
    useEffect(() => {

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
                                    group: doc.get('group'),
                                    src: doc.get('src')
                                }))
                            ),
                        ];
                    });
                });
            });
        };
        fetchData();
        console.log(functions);
    }, []);

    const genCode = async (code) => {
        return new Promise((resolve, reject) => {
            let testing = "GetHome \n";
            for (var [key, value] of code) {
                console.log(value);
                testing = testing.concat("\n", value);
                console.log(testing)
            }
            console.log("final from genCode", testing);
            resolve(testing)
        })
    }

    const saveCode = async () => {
        const final = await genCode(code);
        console.log("from save code", final);
        console.log(locData.state.id);
        try {
            const resp = await fetch('http://localhost:8080/api/uploadCode', {
                method: 'post', headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: locData.state.id, code: final })
            });
            const data = await resp.status
            console.log(data);
            if (data === 200) {
                alert("Code has been uploaded");
            }
            else {
                alert("There was an error please try again");
            }

        } catch (e) {
            console.log(e);
            alert("There was an error please try again");
        }
    }

    return (
        <>
            (
            <>
                <Row>
                    <Col offset={8}>
                        {/* //!this is the place where all the form will be stored */}
                        <Frida variables={variables} setVariables={setVariables} code={code} setCode={setCode} id={id} setId={setId} value={storage} functions={functions} setFunctions={setFunctions} onChange={e => setLocalStorage(e.target.value)} />
                    </Col>
                </Row><Row justify='end'>
                    <Col>
                        <Button onClick={saveCode} style={{ marginRight: 55 }}>
                            Upload
                        </Button>
                    </Col>
                </Row>

            </>
            )

        </>
    )
}


export default Code;