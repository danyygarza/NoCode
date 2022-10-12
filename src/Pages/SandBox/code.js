import React, { useRef, useState } from 'react'
import Test from '../../components/Forms/Test/test'
import Excel from '../../components/Forms/Excel/Excel';
import templateExcel from '../../components/Forms/TemplateForm/templateExcel';
import { Button, Row, Col } from 'antd'
import { useForm } from 'antd/lib/form/Form';

import Forms from "../../components/Forms/Forms";
import Frida from '../../components/FRIDA/FRIDA';

import './code.css';


function Code() {
    const [forms, setForms] = useState([]);

    const finish = (values) => {
        console.log("inside the finish function")
        console.log(values);
    }

    const handleSubmit = () => {
        // alert('A name was submitted' + );
        console.log("form submitted")
    }



    const submitRef = useRef(null);

    return (
        
            forms.length === 0 ? <h1>Empty</h1> : forms.map((form) => {
            console.log(form)
            return ({form});
            
        }),
        //!this will be the component of dany
        <Excel finish={finish} />
    )
}


export default Code;