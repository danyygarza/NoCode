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
    const [storage, setStorage] = useState({id, code, variables});

    console.log('storage', storage)
    


    useEffect(() => {
        window.localStorage.setItem('SAVE_FUNCTIONS', JSON.stringify(storage))
    }, [storage])

    //! this to call functions from Frida (child component) // 

    const handleClick = () => {
        for (const item of code) {
            console.log('item', item);
        }
    }

    return (
        <>
            {storage && (
                <>
                    <Row>
                        <Col offset={8}>
                            <Button className="saveOutlined" onClick={() => console.log('storage', storage)} >Save</Button>
                            
                            {/* //!this is the place where all the form will be stored */}
                            <Frida variables={variables} setVariables={setVariables} code={code} setCode={setCode} id={id} setId={setId} />
                        </Col>
                    </Row><Row justify='end'>
                        <Col>
                            <Button onClick={handleClick}>
                                Generate Code
                            </Button>
                        </Col>
                    </Row>
                    
                </>
            )}
        </>
    )
}


export default Code;