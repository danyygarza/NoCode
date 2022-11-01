import { Button, Form } from 'antd'
import React, { useState } from 'react'
import Testform from '../../Test/testForm'
import {
    getFirestore,
    doc,
    getDoc,
} from "@firebase/firestore"

import './MostUsedFunctions.css'

//components

//! Forms
//import ExcelWrite from './Excel/Write/ExcelWrite'
import Upload from './Excel/Upload/Upload'
import RemoveDuplicate from './Excel/RemoveDuplicate/RemoveDuplicate'
import NewWorkBook from './Excel/NewWorkBook/NewWorkBook'
import SortColumns from './Excel/SortColumns/SortColumns'
import CountElements from './Excel/CountElements/CountElements'
import Substring from './Excel/Substring/Substring'
import InsertColumn from './Excel/InsertColumn/InsertColumn'
import CopyColumn from './Excel/CopyColumn/CopyColumn'
import ApplyFilter from './Excel/ApplyFilter/ApplyFilter'
import RemoveColumn from './Excel/RemoveColumn/RemoveColumn'
import IfElseForm from './Conditions/IfForm'

//import { ExcelWriteModel } from './Excel/Write/ExcelWriteModel'
//import Testform from '../../Test/testForm'

const db = getFirestore();
//const dbData = [];

function Conditions(props) {
    console.log('submit in muf is ', props.submit)
    const [formArray, /*setFormArray*/] = useState([
        { text: "If Else", data: { id: props.id, form: <IfElseForm variables={props.variables} setVariables={props.setVariables} code={props.code} setCode={props.setCode} id={props.id} setId={props.setId} /> } }
    ])

    const add = (form) => {
        console.log("form", form)
        console.log("forms", props.forms)

        props.setForms([...props.forms, form])
    }

    return (
        formArray.lenght === 0 ? <h1>empty</h1> : formArray.map((data) => {
            return (
                <> <Button style={{ height: 120, borderRadius: 40, borderColor: 'white' }}
                    onClick={(event) => {
                        console.log(data.data)
                        add(data.data);
                    }
                    }>
                    <div className="imgp">
                        <img src="favicon.ico" alt="logo" style={{ width: 70 }} />
                        <p style={{ color: 'black', marginLeft: 0 }}><b>{data.text}</b></p>
                    </div>
                </Button></>
            )
        })

    )
};

export default Conditions    