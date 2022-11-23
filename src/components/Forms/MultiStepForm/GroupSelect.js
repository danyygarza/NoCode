import React, { useState } from "react";
import { Radio } from "antd";
import { getFirestore, doc, getDoc } from "@firebase/firestore";
import { Group } from "@mui/icons-material";

const db = getFirestore();

function GroupSelect(props) {
  const [value, setValue] = useState(1);


  const onChange = (e) => {
    props.SetGroup(e.target.value);
    console.log("radio checked", e.target.value);
    console.log('group', props.group)
    setValue(e.target.value);
  };


  return (
    <Radio.Group onChange={onChange} value={value}>
      <Radio value={"Add"} onClick={props.SetGroup(props.group)}>Add</Radio>
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
  );
}

export default GroupSelect;
