import React, { useRef, useState } from 'react'
import Test from '../../components/Forms/Test/test'
import Excel from '../../components/Forms/Excel/Excel';
import templateExcel from '../../components/Forms/TemplateForm/templateExcel';
import { Button, Row, Col } from 'antd'
import ExcelTest from '../../components/Forms/Excel/ExcelTest';
import { useForm } from 'antd/lib/form/Form';




function Code() {
    const [form] = useForm();

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

    const handleForm = () => {
        console.log(submitRef)
        submitRef.current.onFinish();
    }

    return (
        forms.lenght === 0 ? <h1>Empty</h1> : forms.map((form) => {
            return ({ form });
        }),
        //!this will be the component of dany
        <Row>
            <Col offset={8}>
                <ExcelTest finish={finish} submit={handleSubmit} ref = {submitRef}/>
            </Col>

            <Col offset={8}>
                <Button type="primary" htmlType='submit'
                >
                    Submit from code!!
                </Button>
            </Col>

        </Row>
    )

}

export default Code; 