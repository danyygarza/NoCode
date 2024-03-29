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
import ForEach from './Iterators/forEeach'

function Iterators(props) {
    const [formArray, /*setFormArray*/] = useState([
        { text: "ForEach", data: { id: props.id, form: <ForEach variables={props.variables} setVariables={props.setVariables} code={props.code} setCode={props.setCode} id={props.id} setId={props.setId} /> } }
    ])

    const add = (form) => {
        props.setForms([...props.forms, form])
    }

    return (
        formArray.lenght === 0 ? <h1>empty</h1> : formArray.map((data) => {
            return (
                <> <Button style={{ height: 120, borderRadius: 40, borderColor: 'white' }}
                    onClick={(event) => {
                        add(data.data);
                    }
                    }>
                    <div className="imgp">
                        <img src="../img/For-ForEach.svg" alt="logo" style={{ width: 70 }} />
                        <p style={{ color: 'black', marginLeft: 0 }}><b>{data.text}</b></p>
                    </div>
                </Button></>
            )
        })

    )
};

export default Iterators    