import { Button, Form } from "antd";
import React, { useState } from "react";
import Testform from "../../../Test/testForm";
import { getFirestore, doc, getDoc } from "@firebase/firestore";

import "../MostUsedFunctions.css";

//! Forms
//import ExcelWrite from './Excel/Write/ExcelWrite'
import Upload from "../Excel/Upload/Upload";
import RemoveDuplicate from "../Excel/RemoveDuplicate/RemoveDuplicate";
import ExcelWrite from "../Excel/Write/ExcelWrite";

//import { ExcelWriteModel } from './Excel/Write/ExcelWriteModel'
//import Testform from '../../Test/testForm'

const db = getFirestore();

function MostUsedFunctions(props) {
    console.log("submit in muf is ", props.submit);
    const [formArray, setFormArray] = useState([
        { id: 1, text: "Excel", src: '../../../img/excelIcon.ico', collection: "Excel", function: "Write" },
        { id: 2, text: "Mix", src: '../../../img/mixIcon.png', collection: "Excel", function: "Write" },
        { id: 3, text: "File",src: '../../../img/fileIcon.png', collection: "Excel", function: "Write" },
       
    ]);

    //const [form] = Form.useForm();

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

    return formArray.lenght === 0 ? (
        <h1>empty</h1>
    ) : (
        formArray.map((data) => {
            return (
                <>
                    {" "}
                    <Button
                        style={{ height: 120, borderRadius: 40, borderColor: "white" }}
                        onClick={(event) => {
                            add(data);
                        }}
                    >
                        <div className="imgp">
                            <img src={data.src} alt="logo" style={{ width: 70 }} />
                            <p style={{ color: "black", marginLeft: 0 }}>
                                <b>{data.text}</b>
                            </p>
                        </div>
                    </Button>
                </>
            );
        })
    );
}

export default MostUsedFunctions;
