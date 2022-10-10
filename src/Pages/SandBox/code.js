import React, { useState } from 'react'
import Test from '../../components/Forms/Test/test'
import Excel from '../../components/Forms/Excel/Excel';
import templateExcel from '../../components/Forms/TemplateForm/templateExcel';
import Button from 'antd'


//components
import Navbar from '../../components/Shared/Navbar';
import Forms from '../../components/Forms/Forms';
import MostUsedFunctions from '../../components/Forms/MostUsedFunctions';


export default function Code() {

    const [forms, setForms] = useState([]);
    

    const finish = (values) => {
        console.log("inside the finish function")
        console.log(values);
    }

    return (
        
            forms.length === 0 ? <h1>Empty</h1> : forms.map((form) => {
            console.log(form)
            return ({form});
            
        }),
            //!this will be the component of dany
            // <Excel finish={finish} />
            <Forms setForms={setForms} forms = {forms}/>
    )
}

