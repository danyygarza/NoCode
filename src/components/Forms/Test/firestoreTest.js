import { Button, Checkbox, Form, Input } from "antd";
import React, { useState } from "react";
import { Form, Input, Button, Col, Row, Typography, Popover, Tabs } from "antd";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
const colRef = collection(db, "forms");

function renderInputs({ inputs }) {
  return inputs.map((input) => {
    <Col span={input.span}>
      <Form.Item
        name={input.name}
        label={input.label}
        rules={[{ required: true, message: "Please fil out the field!" }]}
      >
        <Input
        type={input.type}
        placeholder={input.placeholder}
        onChange={inputs.onChange} 
        >
        
        </Input>
      </Form.Item>
    </Col>;
  });
}
function firestoreForm(props) {
  return <Form></Form>;
}

export default firestoreForm;
