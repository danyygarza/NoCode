import { Button, Modal, Input, Form, List, Tabs, Typography } from "antd";
import React, { forwardRef, useState } from "react";
import "./Forms.css";

//components
import MostUsedFunctions from "./MostUsedFunctions";
import AllFunctions from "./AllFunctions";
import ListTest from "../../Test/ListTest";
import Readers from "./Readers/Readers";
import Conditions from "./Conditions";
import Iterators from "./Iterators";
import Title from "antd/lib/skeleton/Title";




const Forms = forwardRef((props, ref, items) => {
    //modal
    const [open, setOpen] = useState(false);
    const [closed, setClosed] = useState(false);
    const [filteredList, setFilteredList] = useState(items);
    const [component, setComponent] = useState("nothing");

    const onChange = (key) => {
        console.log(key);
    };

    //search
    const { Search } = Input;
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <>
            <Button onClick={() => setOpen(true)} className="forms-button">
                Create New Function
            </Button>
            <Modal
                title="Ingresa el tipo de reader que quieras utilizar"
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={900}
            >
                <Title level={4}>Ingresa el tipo de reader que quieras utilizar</Title>
                <Search
                    placeholder="Búsqueda"
                    onChange={inputHandler}
                    className="search "
                    enterButton
                />
                <Tabs
                    defaultActiveKey="1"
                    onChange={onChange}
                    centered
                    items={[
                        
                        {
                            label: "Readers",
                            key: "2",
                            children: (
                                <>
                                    <span style={{ display: "inline-block", marginTop: 17, marginLeft: '32%' }}>
                                        <Readers
                                            forms={props.forms}
                                            setForms={props.setForms}
                                            variables={props.variables}
                                            setVariables={props.setVariables}
                                            code={props.code}
                                            setCode={props.setCode}
                                            id={props.id}
                                            setId={props.setId}
                                            functions={props.functions}
                                        />
                                    </span>
                                </>
                            )
                        },
                        
                    ]}
                />
                <></>
            </Modal>
        </>
    );
});

export default Forms;
