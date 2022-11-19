import React, { useState, useEffect } from "react";
import { Button, Form, Input, Modal, Row, Radio, Space } from "antd";
import { getFirestore, doc, getDoc } from "@firebase/firestore";
import Testform from "../../../Test/testForm";
const db = getFirestore();


function searchFunction(input, nameSearch) {
    try {
        let text = input.toUpperCase();
        const name = nameSearch.toUpperCase();
        return name.search(text) > -1;
    } catch (e) {
        return false;
    }
}

function Reader() {

    const [value, setValue] = useState(0);
    const onChange = (e) => {
        setValue(e.target.value)
    }
    const [formArray, setFormArray] = useState([
        {
            id: 1,
            text: "Excel",
            src: "../../../img/excelIcon.ico",
            collection: "Excel",
            function: "Remove Duplicate",
            value: 1,
        },
        {
            id: 2,
            text: "Mix",
            src: "../../../img/mixIcon.png",
            collection: "Mix",
            function: "Write",
            value: 2,
        },
        {
            id: 3,
            text: "File",
            src: "../../../img/fileIcon.png",
            collection: "File",
            function: "Write",
            value: 3,
        },
    ]);

    const { Search } = Input;
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
        console.log(e)
    };


    return formArray.lenght === 0 ? (
        <h1>empty</h1>
    ) : (
        formArray.map((data, index) => {
            return (
                <>
                    {" "}
                    <Radio.Group onChange={onChange} value={value}>
                        <Radio value={value}>
                            <Button
                                style={{ height: 120, borderRadius: 40, borderColor: "white", marginTop: 100 }}
                                onClick={() => console.log('hello')}
                            >
                                <div className="imgp">
                                    <img src={data.src} alt="logo" style={{ width: 70 }} />
                                    <p style={{ color: "black", marginLeft: 0 }}>
                                        <b>{data.text}</b>
                                    </p>
                                </div>
                            </Button>
                        </Radio>
                    </Radio.Group>
                </>
            );
        })
    );
}

export default Reader