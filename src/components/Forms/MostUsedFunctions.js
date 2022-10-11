import { Button, Modal, Space, Form } from 'antd'
import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { Link, useNavigate } from 'react-router-dom'


import './MostUsedFunctions.css'

//components

//! Forms
import ExcelWrite from './Excel/Write/ExcelWrite'

const MostUsedFunctions = forwardRef((props, ref) => {

    const [formArray, setFormArray] = useState([
        { text: "write", form: <ExcelWrite /> }
    ])

    const [form] = Form.useForm();

    const add = (data) => {
        // console.log(form)
        props.setForms([...props.forms,
        <Form form = {form}>
            {/* <ExcelWrite /> */}
            {data}
        </Form>


        ])
        console.log("forms", props.forms)
    }

    useImperativeHandle(ref, () => ({
        showAlert(values) {
            console.log("testing from MOF")
            console.log(Object.values(form.getFieldsValue()));
            console.log(form.getFieldValue())
        },

    }))

    return (

        formArray.lenght === 0 ? <h1>empty</h1> : formArray.map((data) => {
            return (
                <> <Button style={{ height: 120, borderRadius: 40, width: 124, borderColor: 'white' }}
                    onClick={(event) => {
                        console.log("button is being pressed from MOF")
                        add(data.form);
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
})

export default MostUsedFunctions    