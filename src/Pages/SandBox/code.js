import React, {useState} from 'react'
import Test from '../../components/Forms/Test/test'
import Excel from '../../components/Forms/Excel/Excel';
import templateExcel from '../../components/Forms/TemplateForm/templateExcel';

function Code() {

const [forms, setForms] = useState([]); 

    return (
        forms.lenght === 0 ? <h1>Empty</h1> : forms.map((form) =>{
            return({form}); 
        }),
        //!this will be the component of dany
        <Excel/>
    )

}

export default Code;