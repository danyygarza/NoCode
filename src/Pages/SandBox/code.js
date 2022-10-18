import React, { useRef, useState } from 'react'

import Test from '../../components/Forms/Test/test'
import Excel from '../../components/Forms/Excel/Excel';
import templateExcel from '../../components/Forms/TemplateForm/templateExcel';
import { Button, Row, Col } from 'antd'
import { useForm } from 'antd/lib/form/Form';

import Forms from "../../components/Forms/Forms";
import Frida from '../../components/FRIDA/FRIDA';

const { createRef } = React;


//TODO: create an alert and show in which from is not completed 
function Code() {
    const [forms, setForms] = useState([]);
    //! this to call functions from Frida (child component) // 

    const ref = useRef(null)

    const handleValidate = () => {
        // const res = elRefs.map((item, index) => {
        //     return item.current.validate();
        // });
        return ref.current.validate();

    }
    return (
        <>
            <Row>
                <Col offset={8}>
                    {/* //!this is the place where all the form will be stored */}
                    {/* {
                        elRefs.length > 0 &&
                        elRefs.map((ref, index) => (
                            <>
                                <Frida setForms={setForms} forms={forms} ref={ref} />
                                {console.log(ref)}
                            </>
                        ))
                    } */}
                    <Frida ref={ref} />

                </Col>
            </Row>
            <Row>
                <Col offset={21}>
                    <Button type="primary" onClick={handleValidate} >
                        Submit from code!!
                    </Button>
                </Col>
            </Row>
        </>
    )
}


export default Code;