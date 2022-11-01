import React, { useEffect, useState } from "react";
import { Form, Button, Space, Col, Row } from "antd";
import Forms from "../../components/Forms/Forms";

const testing = async (test) => {
    console.log("in testing function");
    const temp = await test;
    console.log("temp", temp);
    return temp;
};


function Frida(props) {
    const [forms, setForms] = useState([]); // forms array
    const [elRefs, setElRefs] = React.useState([]); // reference array

    const remove = (index) => {
        console.log("forms before remove", forms);
        const temp = [...forms];
        const tempCode = props.code;
        console.log("temp code", tempCode)
        console.log("index",index)
        console.log("forms", forms)
        console.log("form obj", forms[index].id)
        if (tempCode.get(forms[index].id) !== undefined) {
            tempCode.delete(forms[index].id);
        }
        temp.splice(index, 1);
        setForms(temp);
    };

    //! this will create array of refs from size of forms
    useEffect(() => {
        console.log("rendering")
    }, []);

    return (
        <>
            <div className="main">
                {forms.length === 0 ? (
                    <h1>Empty</h1>
                ) : (
                    forms.map((form, index) => {
                        return (
                            <Space
                                style={{
                                    display: "flex",
                                    marginBottom: 8,
                                }}
                                align="baseline"
                            >
                                {form.form}
                                <Button
                                    onClick={() => {
                                        console.log("index from click: ", index, form);
                                        remove(index);
                                        console.log(index);
                                        const temp = [...elRefs];
                                        temp.splice(index, 1);
                                        setElRefs(temp);
                                    }}
                                >
                                    Delete Action
                                </Button>
                            </Space>
                        );
                    })
                )}
                <Row>
                    <Col>
                        <Forms
                            variables={props.variables}
                            setVariables={props.setVariables}
                            setForms={setForms}
                            forms={forms}
                            code={props.code}
                            setCode={props.setCode}
                            numberList={props.numberList}
                            setNumberList={props.setNumberList}
                            id={props.id}
                            setId={props.setId}
                        />
                    </Col>
                </Row>
               
            </div>
        </>
    );
};
export default Frida;
