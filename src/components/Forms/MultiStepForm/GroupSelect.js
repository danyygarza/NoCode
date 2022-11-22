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
      <Radio value={"Load"} onClick={props.SetGroup(props.group)}>Load</Radio>
      {console.log('set group', props.group)}
      <Radio value={"New"} onClick={props.SetGroup(props.group)}>New</Radio>
      <Radio value={"Read"} onClick={props.SetGroup(props.group)}>Read</Radio>
      <Radio value={"Remove"} onClick={props.SetGroup(props.group)}>Remove</Radio>
      <Radio value={"Write"} onClick={props.SetGroup(props.group)}>Write</Radio>
    </Radio.Group>
  );
}


export default GroupSelect;
