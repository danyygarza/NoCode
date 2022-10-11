import React, { useRef, useState } from 'react'
import Test from '../../components/Forms/Test/test'
import Excel from '../../components/Forms/Excel/Excel';
import templateExcel from '../../components/Forms/TemplateForm/templateExcel';
import { Button, Row, Col } from 'antd'
import ExcelTest from '../../components/Forms/Excel/ExcelTest';
import { useForm } from 'antd/lib/form/Form';

import Forms from "../../components/Forms/Forms";


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

        //!this will be the component of dany
        <>
            <Row>
                <Col offset={4}>
                    {forms.length === 0 ? <h1>Empty</h1> : forms.map((form) => {
                        console.log("Forms in code", form)
                        return (form);
                    })}
                </Col>
            </Row>

            <Row>
                <Col offset={4}>
                    {/* <ExcelTest finish={finish} submit={handleSubmit} ref={submitRef} /> */}
                    <Forms setForms={setForms} forms={forms} />
                </Col>

                <Col offset={2}>
                    <Button type="primary" onClick={(event) => {
                        console.log("button from code is being pressed")
                        submitRef.current.showAlert();
                    }}>
                        Submit from code!!
                    </Button>
                </Col>
                
            </Row>
        </>
    )
}

export default Code; 
