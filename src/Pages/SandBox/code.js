import React, { useRef, useState } from 'react'
import { Button, Row, Col } from 'antd'
import Frida from '../../components/FRIDA/FRIDA';
import modForm from '../../Test/modForm';
import Testform from '../../Test/testForm';


//TODO: create an alert and show in which from is not completed 
function Code() {
    const [forms, setForms] = useState([]);
    const [variables, setVariables] = useState([])
    //! this to call functions from Frida (child component) // 

    const ref = useRef(null)

    const handleValidate = () => {
        //! Triggers button from Frida to submit Code from child forms
        return ref.current.validate();

    }
    return (
        <>
            <Row>
                <Col offset={8}>
                    {/* //!this is the place where all the form will be stored */}
                    <Frida variables={variables} setVariables={setVariables}></Frida>
                </Col>
            </Row>
            <Row>
                <Col offset={21}>
                    <Button className="submit" onClick={handleValidate} >
                        Submit from code!!
                    </Button>
                </Col>
            </Row>
        </>
    )
}


export default Code;