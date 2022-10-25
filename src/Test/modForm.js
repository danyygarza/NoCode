import React from "react";
import { Form as form } from "antd";

// const test = { forms: { input: ["name", "in", "cell"], type: ["text", "text", "text"] }}

export default function modForm(props) {

    let id = Date.now();

    return (
        <>

            {test.forms.map((item) => {
                return (
                    item.type === "text" ?
                        <form.Item
                            name={[`${item.input + id}`, `${item.input}`]}
                            label={item.input}
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                        </form.Item> :
                        <h1>working</h1>
                )
            })}
            {/* {test.form.map((item) => {
                item.type === "text" ? <Form.Item
                    name={[`write` + id, "write"]}
                    label="Write"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                > : <h1> waiting</h1>
            })} */}

        </>
    )

}

