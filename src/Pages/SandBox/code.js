import React, { useRef, useState, useEffect } from 'react'
import { Button, Row, Col } from 'antd'
import Frida from '../../components/FRIDA/FRIDA';
import modForm from '../../Test/modForm';
import Testform from '../../Test/testForm';
import SaveOutlined from '@ant-design/icons'
import { LockClock, NestCamWiredStandTwoTone } from '@mui/icons-material';
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
const azure = require("azure-storage");
// !testing//
const arrayBufferToBuffer = require("arraybuffer-to-buffer");
const bufferToStream = require("buffer-to-stream");
const enc = new TextEncoder();

class Azure {
    constructor() {
        // dotenv.config();
        this.FileService = azure.createFileService("DefaultEndpointsProtocol=https;AccountName=innotekfilestore;AccountKey=JgoEqRf0ik3Oc+A1hRjM82jpgm3/matY9U2yxeomJGCDIPU+kD0vEAWkGuYsO2Utg4DoON0BFN3jbbmqb1cOjQ==;EndpointSuffix=core.windows.net;");
    }

    uploadFileFromStream = async (share, path, filename, txt) => {
        let buffer = arrayBufferToBuffer(enc.encode(txt)); //Convierte el array buffer que entrega la función readZIP a un buffer
        const readableStream = bufferToStream(buffer); //Convierte el buffer a un stream
        //La función regresa una promesa que tiene true si es exitosa y el error si falla
        return new Promise((resolve, reject) => {
            /*Se utiliza la función para subir un stream a azure storage. Es la que permite subir archivos pesados*/
            this.FileService.createFileFromStream(
                share,
                path,
                filename,
                readableStream,
                enc.encode(txt).byteLength,
                (err) => {
                    if (!err) {
                        console.log("Azure successful");
                        resolve(true);
                    } else {
                        console.log("Azure failed", err);
                        reject(err);
                    }
                }
            );
        });
    };
};

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
        const FileService = new Azure();
        try {

            await FileService.uploadFileFromStream(
                'automation',
                '/Processes/' + `${locData.state.id}` + '/Steps/0',
                'NoCode.txt', final
            );
        } catch (e) {
            console.log(e);
        }
    }



    return (
        <>
            (
            <>
                <Row>
                    <Col offset={8}>
                        <Button className="saveOutlined" size={'large'} onClick={() => setLocalStorage({ code: code, variables: variables })}>Save</Button>

                        {/* //!this is the place where all the form will be stored */}
                        <Frida variables={variables} setVariables={setVariables} code={code} setCode={setCode} id={id} setId={setId} value={storage} functions={functions} setFunctions={setFunctions} onChange={e => setLocalStorage(e.target.value)} />
                    </Col>
                </Row><Row justify='end'>
                    <Col>
                        <Button onClick={saveCode}>
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