import React, { useRef, useState } from 'react'
import Test from '../../components/Forms/Test/test'
import Excel from '../../components/Forms/Excel/Excel';
import templateExcel from '../../components/Forms/TemplateForm/templateExcel';
import { Button, Row, Col } from 'antd'
import ExcelTest from '../../components/Forms/Excel/ExcelTest';
import { useForm } from 'antd/lib/form/Form';




function Code() {
    const [forms, setForms] = useState([]);
    const finish = (values) => {
        console.log("inside the finish function")
        console.log(values);
    }

    const handleSubmit = () => {
        console.log("form submitted")
    }



    const submitRef = useRef(null);

    return (
        forms.lenght === 0 ? <h1>Empty</h1> : forms.map((form) => {
            return ({ form });
        }),
        //!this will be the component of dany
        <Row>
            <Col offset={8}>
                <ExcelTest finish={finish} submit={handleSubmit} ref={submitRef} />
            </Col>

            <Col offset={8}>
                <Button type="primary"   onClick={(event) =>{
                    console.log("button from code is being pressed")
                    submitRef.current.showAlert(); 
                }}>
                    Submit from code!!
                </Button>
            </Col>

        </Row>
    )

}

export default Code; 