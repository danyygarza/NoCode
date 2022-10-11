import React from 'react'
import { Form } from 'antd'




function templateExcel(props) {
    return (
        <Form>
            {props.inputs.lenght === 0 ? <h1>Empty</h1> : props.inputs.map((input) => {
                return ({ input })
            })}
        </Form>
    )
}

export default templateExcel