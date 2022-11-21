import React, { useState } from "react";
import { Radio } from "antd";
import { Group } from "@mui/icons-material";
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
      <Radio value={"Apply"}>Apply</Radio>
      <Radio value={"Read"}>Read</Radio>
      <Radio value={"Write"}>Write</Radio>
      <Radio value={"Filter"}>Filter</Radio>
      <Radio value={"Sort"}>C</Radio>
      <Radio value={"MANIPULATE COLUMNS"}>Delete/Remove</Radio>
      <Radio value={"MANIPULATE COLUMNS"}>MANIPULATE COLUMNS</Radio>
    </Radio.Group>
  );
}
export default GroupSelect;
