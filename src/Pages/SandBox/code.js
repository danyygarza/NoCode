import React, { useRef, useState } from 'react'
import { Button, Row, Col } from 'antd'
import { useForm } from 'antd/lib/form/Form';

import Forms from "../../components/Forms/Forms";
import Frida from '../../components/FRIDA/FRIDA';


function Code() {
    const [forms, setForms] = useState([]);
    const [code, setCode] = useState([]); 
    //! this to call functions from Frida (child component) // 
    const submitRef = useRef(null);

    return (
        <>
            <Row>
                <Col offset={8}>
                    {/* //!this is the place where all the form will be stored */}
                    < Frida forms={forms} setForms={setForms} ref={submitRef} />
                </Col>
            </Row>

            <Row>
                <Col offset={10}>
                    {/*  //! Modal component where use cna pick which functinos they want to use */}
                    <Forms setForms={setForms} forms={forms} ref={submitRef} />
                </Col>
            </Row>
            <Row>
                <Col offset={21}>
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
