import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import ChildForm2 from "./ChildForm2";
import ChildForm from "./ChildForm";
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
function ParentSubmit(props) {
  const [submit, setSubmit] = useState(false);
  const onReset = () => {
    setSubmit(true)
    
  };
  return (
    <div>
      <ChildForm submit={submit} setSubmit={setSubmit} ></ChildForm>
      <ChildForm2 submit={submit} setSubmit={setSubmit}></ChildForm2>
      <Button onClick={onReset} >Submit</Button>
    </div>
  );
  // const [submit, setSubmit] = useState(false);

  // const submitForms = () => {
  //   setSubmit(true);
  // };
  // return (
  //   <div>
  //     <ChildForm></ChildForm>
  //     <ChildForm2></ChildForm2>
  //     <Button onClick={submitForms()}>Submit</Button>

  //   </div>
  // );
}

export default ParentSubmit;
