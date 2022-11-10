import React, { useState, useEffect } from "react";
import { Button, Form, Input, Modal } from "antd";
import { db } from '../../../firebase';
import { collection, getDocs } from "firebase/firestore";


function searchFunction(input, nameSearch) {
    try {
        let text = input.toUpperCase();
        const name = nameSearch.toUpperCase();
        console.log("try", name.search(text) > -1);
        return name.search(text) > -1;
    } catch (e) {
        console.log("try", e.message);
        return false;
    }
}

export default function Readers(props) {
    console.log("submit in muf is ", props.submit);
    
    const [formArray, setFormArray] = useState([
        { id: 1, text: "Excel", src: '../../../img/excelIcon.ico', collection: "Write" },
        { id: 2, text: "Mix", src: '../../../img/mixIcon.png', collection: "Mix", function: "Apply Filter" },
        { id: 3, text: "File", src: '../../../img/fileIcon.png', collection: "File"},

    ]);
    console.log('readers', formArray)

    const [allData, setAllData] = useState([]);
    const [open, setOpen] = useState(false);
    const onChange = (key) => {
        console.log(key);
    };

    const { Search } = Input;
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };


    //const [form] = Form.useForm();

    return formArray.lenght === 0 ? (
        <h1>empty</h1>
    ) : (
        formArray.map((data) => {
            if (data.collection === "Write") {
                return (
                    <>
                        {" "}
                        <Button
                            style={{ height: 120, borderRadius: 40, borderColor: "white" }}
                            onClick={() => setOpen(true)}
                        >
                            <div className="imgp">
                                <img src={data.src} alt="logo" style={{ width: 70 }} />
                                <p style={{ color: "black", marginLeft: 0 }}>
                                    <b>{data.text}</b>
                                </p>
                            </div>
                        </Button>
                        <Modal
                            title={data.collection}
                            centered
                            open={open}
                            onOk={() => setOpen(false)}
                            onCancel={() => setOpen(false)}
                            /*onClick={console.log(readers(data))}*/
                            width={900}
                        >
                                {console.log(useEffect(() => {
                                    async function TableFunc() {
                                        var arr = [];
                                        var i = 0;
                                        const querySnapshot = await getDocs(collection(db, "Excel"));
                                        querySnapshot.forEach((doc) => {
                                            arr[i] = [];
                                            console.log("doc",doc.id, " => ",doc.data());
                                            arr[i] = doc.data();
                                            i++;
                                        });
                                        setAllData(arr);
                                        
                                    }
                                    TableFunc()
                                    
                                }, []))
                                }
                        </Modal>
                    </>
                );
            } else if(data.collecion === "File"){
                return (
                    <>
                        {" "}
                        <Button
                            style={{ height: 120, borderRadius: 40, borderColor: "white" }}
                            onClick={() => setOpen(true)}
                        >
                            <div className="imgp">
                                <img src={data.src} alt="logo" style={{ width: 70 }} />
                                <p style={{ color: "black", marginLeft: 0 }}>
                                    <b>{data.text}</b>
                                </p>
                            </div>
                        </Button>
                        <Modal
                            title={data.collection}
                            centered
                            open={open}
                            onOk={() => setOpen(false)}
                            onCancel={() => setOpen(false)}
                            /*onClick={console.log(readers(data))}*/
                            width={900}
                        >
                                {console.log(useEffect(() => {
                                    async function TableFunc() {
                                        var arr = [];
                                        var i = 0;
                                        const querySnapshot = await getDocs(collection(db, "File"));
                                        querySnapshot.forEach((doc) => {
                                            arr[i] = [];
                                            console.log("doc",doc.id, " => ",doc.data());
                                            arr[i] = doc.data();
                                            i++;
                                        });
                                        setAllData(arr);
                                        
                                    }
                                    TableFunc()
                                    
                                }, []))
                                }
                        </Modal>
                    </>
                );
            }

        })
    );
}


