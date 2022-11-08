import React, {useState} from 'react';
import { Button, Form } from "antd";
import { getFirestore, doc, getDoc } from "@firebase/firestore";
import { DocumentScannerSharp } from '@mui/icons-material';
import Testform from './testForm';





async function readersTest(props) {

    const db = getFirestore();

    const readers = async (data) => {
        const colRef = doc(db, data.collection);
        const docSnap = await getDoc(colRef);
        if (docSnap.exists()) {
            console.log(docSnap.data())
            props.setForms([...props.forms,
            { id: props.id }
            ])
            props.setId(props.id + 1);
            // props.setNumberList([...props.numberList, props.id]);
        }
        else {
            console.log("no such document!")
        }
    }

    return (
        <div>hola</div>
    )
}

export default readersTest