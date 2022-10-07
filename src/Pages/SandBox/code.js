import React, { useState } from 'react'
import Test from '../../components/Forms/Test/test'
import Excel from '../../components/Forms/Excel/Excel';
import templateExcel from '../../components/Forms/TemplateForm/templateExcel';
import Button from 'antd'
function Code() {

    const [forms, setForms] = useState([]);

    const finish = (values) => {
        console.log("inside the finish function")
        console.log(values);
    }

    return (
        forms.lenght === 0 ? <h1>Empty</h1> : forms.map((form) => {
            return ({ form });
        }),
        //!this will be the component of dany
        <Excel finish={finish} />
    )

}

export default Code;