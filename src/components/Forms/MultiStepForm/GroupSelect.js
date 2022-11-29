import React, { useState } from "react";
import { Radio } from "antd";
import { getFirestore, doc, getDoc } from "@firebase/firestore";
import '../../../App.css'

const db = getFirestore();

function GroupSelect(props) {
  const [value, setValue] = useState(1);


  const onChange = (e) => {
    props.SetGroup(e.target.value);
    console.log("radio checked", e.target.value);
    console.log('group', props.group)
    setValue(e.target.value);
  };

  const [radioGroup, setRadioGroup] = useState([
    {
      id: 1,
      text: "Add",
      value: "Add",
      src: "../../../img/excelIcon.ico",
    },
    {
      id: 2,
      text: "Apply",
      value: "Apply",
      src: "../../../img/excelIcon.ico",
    },
    {
      id: 3,
      text: "Conditions",
      value: "Conditions",
      src: "../../../img/excelIcon.ico",
    },
    {
      id: 4,
      text: "Convert",
      value: "Convert",
      src: "../../../img/excelIcon.ico",
    },
    {
      id: 5,
      text: "Copy",
      value: "Copy",
      src: "../../../img/excelIcon.ico",
    },
    {
      id: 6,
      text: "Count",
      value: "Count",
      src: "../../../img/excelIcon.ico",
    },
    {
      id: 7,
      text: "Define",
      value: "Define",
      src: "../../../img/excelIcon.ico",
    },
    {
      id: 8,
      text: "Delete",
      value: "Delete",
      src: "../../../img/excelIcon.ico",
    },
    {
      id: 9,
      text: "Get",
      value: "Get",
      src: "../../../img/excelIcon.ico",
    },
    {
      id: 10,
      text: "Insert",
      value: "Insert",
      src: "../../../img/excelIcon.ico",
    },
    {
      id: 11,
      text: "Load",
      value: "Load",
      src: "../../../img/excelIcon.ico",
    },
    {
      id: 12,
      text: "New",
      value: "New",
      src: "../../../img/excelIcon.ico",
    },
    {
      id: 13,
      text: "Read",
      value: "Read",
      src: "../../../img/excelIcon.ico",
    },
    {
      id: 14,
      text: "Remove",
      value: "Remove",
      src: "../../../img/excelIcon.ico",
    },
    {
      id: 15,
      text: "Run",
      value: "Run",
      src: "../../../img/excelIcon.ico",
    },
    {
      id: 16,
      text: "Save",
      value: "Save",
      src: "../../../img/excelIcon.ico",
    },
    {
      id: 17,
      text: "Sort",
      value: "Sort",
      src: "../../../img/excelIcon.ico",
    },
    {
      id: 18,
      text: "Substring",
      value: "Substring",
      src: "../../../img/excelIcon.ico",
    },
    {
      id: 19,
      text: "Write",
      value: "Write",
      src: "../../../img/excelIcon.ico",
    },
  ])


  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio.Button
        value={"Add"}
        onClick={props.SetGroup(props.group)}
        style={{
          height: 120,
          borderRadius: 40,
          borderColor: "white",
          marginTop: 15,
        }} >
        <div className="imgp">
          <img src="../../../img/AddValueToList.svg" alt="logo" style={{ width: 70 }} />
          <p style={{ color: "black", marginLeft: 0 }}>
            <b>Add</b>
          </p>
        </div>
      </Radio.Button>
      <Radio.Button
        value={"Apply"}
        onClick={props.SetGroup(props.group)}
        style={{
          height: 120,
          borderRadius: 40,
          borderColor: "white",
          marginTop: 15,
        }} >
        <div className="imgp">
          <img src="../../../img/ApplyFilter.svg" alt="logo" style={{ width: 70 }} />
          <p style={{ color: "black", marginLeft: 0 }}>
            <b>Apply</b>
          </p>
        </div>
      </Radio.Button>
      <Radio.Button
        value={"Conditions"}
        onClick={props.SetGroup(props.group)}
        style={{
          height: 120,
          borderRadius: 40,
          borderColor: "white",
          marginTop: 15,
        }} >
        <div className="imgp">
          <img src="../../../img/IF.svg" alt="logo" style={{ width: 70 }} />
          <p style={{ color: "black", marginLeft: 0 }}>
            <b>Conditions</b>
          </p>
        </div>
      </Radio.Button>
      <Radio.Button
        value={"Convert"}
        onClick={props.SetGroup(props.group)}
        style={{
          height: 120,
          borderRadius: 40,
          borderColor: "white",
          marginTop: 15,
        }} >
        <div className="imgp">
          <img src="../../../img/ConvertTo2007.svg" alt="logo" style={{ width: 70 }} />
          <p style={{ color: "black", marginLeft: 0 }}>
            <b>Convert</b>
          </p>
        </div>
      </Radio.Button>
      <Radio.Button
        value={"Copy"}
        onClick={props.SetGroup(props.group)}
        style={{
          height: 120,
          borderRadius: 40,
          borderColor: "white",
          marginTop: 15,
        }} >
        <div className="imgp">
          <img src="../../../img/CopyColumn.svg" alt="logo" style={{ width: 70 }} />
          <p style={{ color: "black", marginLeft: 0 }}>
            <b>Copy</b>
          </p>
        </div>
      </Radio.Button>
      <Radio.Button
        value={"Count"}
        onClick={props.SetGroup(props.group)}
        style={{
          height: 120,
          borderRadius: 40,
          borderColor: "white",
          marginTop: 15,
        }} >
        <div className="imgp">
          <img src="../../../img/CountElements.svg" alt="logo" style={{ width: 70 }} />
          <p style={{ color: "black", marginLeft: 0 }}>
            <b>Count</b>
          </p>
        </div>
      </Radio.Button>
      <Radio.Button
        value={"Define"}
        onClick={props.SetGroup(props.group)}
        style={{
          height: 120,
          borderRadius: 40,
          borderColor: "white",
          marginTop: 15,
        }} >
        <div className="imgp">
          <img src="../../../img/DefineVariable.svg" alt="logo" style={{ width: 70 }} />
          <p style={{ color: "black", marginLeft: 0 }}>
            <b>Define</b>
          </p>
        </div>
      </Radio.Button>
      <Radio.Button
        value={"Delete"}
        onClick={props.SetGroup(props.group)}
        style={{
          height: 120,
          borderRadius: 40,
          borderColor: "white",
          marginTop: 15,
        }} >
        <div className="imgp">
          <img src="../../../img/Delete.svg" alt="logo" style={{ width: 70 }} />
          <p style={{ color: "black", marginLeft: 0 }}>
            <b>Delete</b>
          </p>
        </div>
      </Radio.Button>
      <Radio.Button
        value={"Get"}
        onClick={props.SetGroup(props.group)}
        style={{
          height: 120,
          borderRadius: 40,
          borderColor: "white",
          marginTop: 15,
        }} >
        <div className="imgp">
          <img src="../../../img/GetSpecial.svg" alt="logo" style={{ width: 70 }} />
          <p style={{ color: "black", marginLeft: 0 }}>
            <b>Get</b>
          </p>
        </div>
      </Radio.Button>
      <Radio.Button
        value={"Insert"}
        onClick={props.SetGroup(props.group)}
        style={{
          height: 120,
          borderRadius: 40,
          borderColor: "white",
          marginTop: 15,
        }} >
        <div className="imgp">
          <img src="../../../img/InsertColumn.svg" alt="logo" style={{ width: 70 }} />
          <p style={{ color: "black", marginLeft: 0 }}>
            <b>Insert</b>
          </p>
        </div>
      </Radio.Button>
      <Radio.Button
        value={"Load"}
        onClick={props.SetGroup(props.group)}
        style={{
          height: 120,
          borderRadius: 40,
          borderColor: "white",
          marginTop: 15,
        }} >
        <div className="imgp">
          <img src="../../../img/LoadWorkbook.svg" alt="logo" style={{ width: 70 }} />
          <p style={{ color: "black", marginLeft: 0 }}>
            <b>Load</b>
          </p>
        </div>
      </Radio.Button>
      <Radio.Button
        value={"New"}
        onClick={props.SetGroup(props.group)}
        style={{
          height: 120,
          borderRadius: 40,
          borderColor: "white",
          marginTop: 15,
        }} >
        <div className="imgp">
          <img src="../../../img/NewWorkbook.svg" alt="logo" style={{ width: 70 }} />
          <p style={{ color: "black", marginLeft: 0 }}>
            <b>New</b>
          </p>
        </div>
      </Radio.Button>
      <Radio.Button
        value={"Read"}
        onClick={props.SetGroup(props.group)}
        style={{
          height: 120,
          borderRadius: 40,
          borderColor: "white",
          marginTop: 15,
        }} >
        <div className="imgp">
          <img src="../../../img/ReadCellText.svg" alt="logo" style={{ width: 70 }} />
          <p style={{ color: "black", marginLeft: 0 }}>
            <b>Read</b>
          </p>
        </div>
      </Radio.Button>
      <Radio.Button
        value={"Remove"}
        onClick={props.SetGroup(props.group)}
        style={{
          height: 120,
          borderRadius: 40,
          borderColor: "white",
          marginTop: 15,
        }} >
        <div className="imgp">
          <img src="../../../img/RemoveDuplicate.svg" alt="logo" style={{ width: 70 }} />
          <p style={{ color: "black", marginLeft: 0 }}>
            <b>Remove</b>
          </p>
        </div>
      </Radio.Button>
      <Radio.Button
        value={"Run"}
        onClick={props.SetGroup(props.group)}
        style={{
          height: 120,
          borderRadius: 40,
          borderColor: "white",
          marginTop: 15,
        }} >
        <div className="imgp">
          <img src="../../../img/RunScript.svg" alt="logo" style={{ width: 70 }} />
          <p style={{ color: "black", marginLeft: 0 }}>
            <b>Run</b>
          </p>
        </div>
      </Radio.Button>
      <Radio.Button
        value={"Save"}
        onClick={props.SetGroup(props.group)}
        style={{
          height: 120,
          borderRadius: 40,
          borderColor: "white",
          marginTop: 15,
        }} >
        <div className="imgp">
          <img src="../../../img/Save.svg" alt="logo" style={{ width: 70 }} />
          <p style={{ color: "black", marginLeft: 0 }}>
            <b>Save</b>
          </p>
        </div>
      </Radio.Button>
      <Radio.Button
        value={"Sort"}
        onClick={props.SetGroup(props.group)}
        style={{
          height: 120,
          borderRadius: 40,
          borderColor: "white",
          marginTop: 15,
        }} >
        <div className="imgp">
          <img src="../../../img/SortColumns.svg" alt="logo" style={{ width: 70 }} />
          <p style={{ color: "black", marginLeft: 0 }}>
            <b>Sort</b>
          </p>
        </div>
      </Radio.Button>
      <Radio.Button
        value={"Substring"}
        onClick={props.SetGroup(props.group)}
        style={{
          height: 120,
          borderRadius: 40,
          borderColor: "white",
          marginTop: 15,
        }} >
        <div className="imgp">
          <img src="../../../img/substring.svg" alt="logo" style={{ width: 70 }} />
          <p style={{ color: "black", marginLeft: 0 }}>
            <b>Substring</b>
          </p>
        </div>
      </Radio.Button>
      <Radio.Button
        value={"Write"}
        onClick={props.SetGroup(props.group)}
        style={{
          height: 120,
          borderRadius: 40,
          borderColor: "white",
          marginTop: 15,
        }} >
        <div className="imgp">
          <img src="../../../img/Write.svg" alt="logo" style={{ width: 70 }} />
          <p style={{ color: "black", marginLeft: 0 }}>
            <b>Write</b>
          </p>
        </div>
      </Radio.Button>
    </Radio.Group>
  )
}

export default GroupSelect;

/*
<Radio.Group onChange={onChange} value={value}>
      <Radio value={"Add"} onClick={props.SetGroup(props.group)} src="../../../img/excelIcon.ico">Add</Radio>
      <Radio value={"Apply"} onClick={props.SetGroup(props.group)}>Apply</Radio>
      <Radio value={"Conditions"} onClick={props.SetGroup(props.group)}>Conditions</Radio>
      <Radio value={"Convert"} onClick={props.SetGroup(props.group)}>Convert</Radio>
      <Radio value={"Copy"} onClick={props.SetGroup(props.group)}>Copy</Radio>
      <Radio value={"Count"} onClick={props.SetGroup(props.group)}>Count</Radio>
      <Radio value={"Define"} onClick={props.SetGroup(props.group)}>Define</Radio>
      <Radio value={"Delete"} onClick={props.SetGroup(props.group)}>Delete</Radio>
      <Radio value={"Get"} onClick={props.SetGroup(props.group)}>Get</Radio>
      <Radio value={"Insert"} onClick={props.SetGroup(props.group)}>Insert</Radio>
      <Radio value={"Load"} onClick={props.SetGroup(props.group)}>Load</Radio>
      <Radio value={"New"} onClick={props.SetGroup(props.group)}>New</Radio>
      <Radio value={"Read"} onClick={props.SetGroup(props.group)}>Read</Radio>
      <Radio value={"Remove"} onClick={props.SetGroup(props.group)}>Remove</Radio>
      <Radio value={"Run"} onClick={props.SetGroup(props.group)}>Run</Radio>
      <Radio value={"Save"} onClick={props.SetGroup(props.group)}>Save</Radio>
      <Radio value={"Sort"} onClick={props.SetGroup(props.group)}>Sort</Radio>
      <Radio value={"Substring"} onClick={props.SetGroup(props.group)}>Substring</Radio>
      <Radio value={"Write"} onClick={props.SetGroup(props.group)}>Write</Radio>
    </Radio.Group>

    */