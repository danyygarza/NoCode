import React from "react";
import { Form as forms } from "antd";



export default function Testform() {

    let id = Date.now();
    const test = { forms: [["name", "text"], ["in", 'text'], ["cell", "text"]] }
    console.log(test.forms)

 
    test.forms.map((item) => {
        console.log(item)
        return (
            item[1] === "text" ?
                <forms.item
                    name={[`${item[0] + id}`, `${item[0]}`]}
                    label={item[0]}
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                </forms.item> :
                <h1>input</h1>
        )
    })
}

