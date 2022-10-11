import { Button, Modal, Space} from 'antd'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


import './MostUsedFunctions.css'

//components
import Code from "../../Pages/SandBox/code"
import Forms from './Forms'
import { render } from '@testing-library/react'

//! Forms
import ExcelWrite from './Excel/Write/ExcelWrite'

function MostUsedFunctions(props) {

    const [formArray, setFormArray] = useState([
        { text: "write", form: <ExcelWrite /> }
    ])
    
    const add = (form) =>{
        console.log(form)
        props.setForms( [...props.forms, <ExcelWrite />])
        console.log("forms",props.forms)
    }
    

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
}

export default MostUsedFunctions    