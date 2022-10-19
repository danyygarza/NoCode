import React, { useRef, useState } from 'react'
import { Button, Row, Col } from 'antd'
import { useForm } from 'antd/lib/form/Form';
import {SaveOutlined} from '@ant-design/icons'

import Forms from "../../components/Forms/Forms";
import Frida from '../../components/FRIDA/FRIDA';
import Tutorial from '../../components/ProcesoNuevo/Tutorial';

//TODO: create an alert and show in which from is not completed 
function Code() {
    const [forms, setForms] = useState([]);
    const [code, setCode] = useState([]);
    //! this to call functions from Frida (child component) // 

    const ref = useRef(null)

    const handleValidate = () => {
        //! Triggers button from Frida to submit Code from child forms
        return ref.current.validate();

    }
    return (
        <>
            <Row>
                <SaveOutlined />
            </Row>
            <Row>
                <Col offset={8}>
                    {/* //!this is the place where all the form will be stored */}
                    <Frida ref={ref} />
                </Col>
            </Row>
            <Row>
                <Col offset={21}>
                    <Button className='forms-button2' onClick={(event) => {
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