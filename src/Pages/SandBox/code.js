import React, { useRef, useState } from 'react'
import { Button, Row, Col } from 'antd'
import Frida from '../../components/FRIDA/FRIDA';
import modForm from '../../Test/modForm';
import Testform from '../../Test/testForm';


//TODO: create an alert and show in which from is not completed 
function Code() {
    const [variables, setVariables] = useState([])
    const [code, setCode] = useState(new Map()); //!! Final code 
    const [id, setId] = useState(0)
    const [numberList, setNumberList] = useState([]); 
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
                    <Frida variables={variables} setVariables={setVariables} code={code} setCode={setCode} id={id} setId={setId} numberList={numberList} setNumberList={setNumberList}/>
                </Col>
            </Row>

        </>
    )
}


export default Code;