import { Button, Form } from 'antd'
import React, { useState } from 'react'



import './MostUsedFunctions.css'

//components

//! Forms
import ExcelWrite from './Excel/Write/ExcelWrite'
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



function MostUsedFunctions(props) {

    const [formArray, setFormArray] = useState([
        { text: "UploadFile", form: <Upload /> },
        { text: "Write", form: <ExcelWrite /> },
        { text: "RemoveDuplicate", form: <RemoveDuplicate /> },
        { text: "NewWorkBook", form: <NewWorkBook /> },
        { text: "SortColumns", form: <SortColumns /> },
        { text: "CountElements", form: <CountElements /> },
        { text: "Substring", form: <Substring /> },
        { text: "InsertColumn", form: <InsertColumn /> },
        { text: "CopyColumn", form: <CopyColumn /> },
        { text: "ApplyFilter", form: <ApplyFilter /> },
        { text: "RemoveColumn", form: <RemoveColumn /> },
    ])

    const [form] = Form.useForm();

    const add = (data) => {
        console.log('adding to form from MOF', form)

        props.setForms([...props.forms,
            data
        ])
        console.log("forms", props.forms)
    }

    return (

        formArray.lenght === 0 ? <h1>empty</h1> : formArray.map((data) => {
            return (
                <> <Button style={{ height: 120, borderRadius: 40, borderColor: 'white'}}
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
}

export default MostUsedFunctions    