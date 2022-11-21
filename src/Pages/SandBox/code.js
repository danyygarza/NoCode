import React, { useRef, useState, useEffect } from 'react'
import { Button, Row, Col } from 'antd'
import Frida from '../../components/FRIDA/FRIDA';
import modForm from '../../Test/modForm';
import Testform from '../../Test/testForm';
import SaveOutlined from '@ant-design/icons'
import { NestCamWiredStandTwoTone } from '@mui/icons-material';

import {
    getFirestore,
    doc,
    getDoc,
    onSnapshot,
    collection,
} from "@firebase/firestore";
const db = getFirestore();

//TODO: create an alert and show in which from is not completed 
//TODO: save cards and variables and the id 
function Code() {
    const [functions, setFunctions] = useState([]);
    //  
    const [variables, setVariables] = useState(new Map()) //! Map with all the variables
    const [code, setCode] = useState(new Map()); //!! Final code 
    const [id, setId] = useState(0);
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
// !
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
    // ! Testing

    //! this to call functions from Frida (child component) // 

    const handleClick = () => {
        console.log(code)
        for (const item of code) {
            console.log('item', item);
        }
    }

    return (
        <>
            (
            <>
                <Row>
                    <Col offset={8}>
                        <Button className="saveOutlined" onClick={() => setLocalStorage({ code: code, variables: variables })}>Save</Button>

                        {/* //!this is the place where all the form will be stored */}
                        <Frida variables={variables} setVariables={setVariables} code={code} setCode={setCode} id={id} setId={setId} value={storage} functions={functions} setFunctions={setFunctions} onChange={e => setLocalStorage(e.target.value)} />
                    </Col>
                </Row><Row justify='end'>
                    <Col>
                        <Button onClick={handleClick}>
                            Generate Code
                        </Button>
                    </Col>
                </Row>

            </>
            )

        </>
    )
}


export default Code;