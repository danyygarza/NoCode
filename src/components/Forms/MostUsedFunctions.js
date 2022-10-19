import { Button, Form, Carousel } from "antd";
import React, { forwardRef, useState } from "react";

import "./MostUsedFunctions.css";

//components

//! Forms
import Upload from "./Excel/Upload/Upload";
import RemoveDuplicate from "./Excel/RemoveDuplicate/RemoveDuplicate";
import NewWorkBook from "./Excel/NewWorkBook/NewWorkBook";
import SortColumns from "./Excel/SortColumns/SortColumns";
import CountElements from "./Excel/CountElements/CountElements";
import Substring from "./Excel/Substring/Substring";
import InsertColumn from "./Excel/InsertColumn/InsertColumn";
import CopyColumn from "./Excel/CopyColumn/CopyColumn";
import ApplyFilter from "./Excel/ApplyFilter/ApplyFilter";
import RemoveColumn from "./Excel/RemoveColumn/RemoveColumn";
import { ExcelWriteModel } from "./Excel/Write/ExcelWriteModel";
const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
};

const onChange = (currentSlide) => {
    console.log(currentSlide);
};
const MostUsedFunctions = forwardRef((props, ref) => {
    const [formArray, setFormArray] = useState([
        { text: "UploadFile", form: <Upload /> },
        { text: "Write", form: new ExcelWriteModel(ref) }, //! you have to use this reference for the rest of the components ! //
        { text: "RemoveDuplicate", form: <RemoveDuplicate /> },
        { text: "NewWorkBook", form: <NewWorkBook /> },
        { text: "SortColumns", form: <SortColumns /> },
        { text: "CountElements", form: <CountElements /> },
        { text: "Substring", form: <Substring /> },
        { text: "InsertColumn", form: <InsertColumn /> },
        { text: "CopyColumn", form: <CopyColumn /> },
        { text: "ApplyFilter", form: <ApplyFilter /> },
        { text: "RemoveColumn", form: <RemoveColumn /> },
    ]);

    console.log("log of ref from MOF", ref);

    const [form] = Form.useForm();

    const add = (data) => {
        console.log("adding to form from MOF", form);
        console.log("index of elRefs : ", props.index)
        props.setForms([...props.forms, data]);
        console.log("forms", props.forms);
    };

    console.log("ref from MOF", ref);
    return formArray.length === 0 ? (
        <h1>empty</h1>
    ) : (
        <>
            {/* <Carousel afterChange={onChange} style={{maxWidth: 850, height: 400}} slidesToShow={3} arrows={true} prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />} > */}
            {formArray.map((data) => {
                return (
                    <div>
                        <Button
                            style={{ height: 120, borderRadius: 40, borderColor: "white" }}
                            onClick={(event) => {
                                console.log("button is being pressed from MOF");
                                add(data.form); // * here you are passing the object component of form from the array of forArray
                            }}
                        >
                            <div className="imgp">
                                <img src="favicon.ico" alt="logo" style={{ width: 70 }} />
                                <p style={{ color: "black", marginLeft: 0 }}>
                                    <b>{data.text}</b>
                                </p>
                            </div>
                        </Button>
                    </div>
                );
            })}
            {/* </Carousel> */}
        </>
    );
});

export default MostUsedFunctions;
