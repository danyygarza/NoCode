import React, { useRef, useState, useEffect } from 'react'
import { Button, Row, Col } from 'antd'
import Frida from '../../components/FRIDA/FRIDA';
import modForm from '../../Test/modForm';
import Testform from '../../Test/testForm';
import SaveOutlined from '@ant-design/icons'
import { NestCamWiredStandTwoTone } from '@mui/icons-material';


//TODO: create an alert and show in which from is not completed 
//TODO: save cards and variables and the id 
function Code() {
    const [variables, setVariables] = useState(new Map()) //! Map with all the variables
    const [code, setCode] = useState(new Map()); //!! Final code 
    const [id, setId] = useState(0);
    const [storage, setStorage] = useState(
        window.localStorage.getItem('SAVE_FUNCTIONS')
    );

    console.log('storage', storage)
    


    const setLocalStorage = value => {
        try {
            setStorage(value);
            window.localStorage.setItem("SAVE_FUNCTIONS", value)
            console.log('value',value)
        } catch(error){
            console.error(error)
        }
    }

    //! this to call functions from Frida (child component) // 

    const handleClick = () => {
        console.log(code)
        for (const item of code) {
            console.log('item', item);
        }
    }

    return (
        <>
             (
                <>
                    <Row>
                        <Col offset={8}>
                            <Button className="saveOutlined" onClick={() =>setLocalStorage(code)}>Save</Button>

                            {/* //!this is the place where all the form will be stored */}
                            <Frida variables={variables} setVariables={setVariables} code={code} setCode={setCode} id={id} setId={setId} value={storage} onChange={e => setLocalStorage(e.target.value)} />
                        </Col>
                    </Row><Row justify='end'>
                        <Col>
                            <Button onClick={handleClick}>
                                Generate Code
                            </Button>
                        </Col>
                    </Row>

                </>
            )
         
        </>
    )
}


export default Code;