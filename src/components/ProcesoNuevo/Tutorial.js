import React, { useState } from 'react'
import "./Tutorial.css"
import { Divider, Steps } from 'antd';

const { Step } = Steps;


export default function Tutorial() {
    const [current, setCurrent] = useState(2);

    const onChange = (value) => {
        console.log('onChange:', current);
        setCurrent(value);
    };

    return (
        <>
            <Steps current={current} onChange={onChange} direction="vertical" style={{marginLeft: 250, marginBottom:20, marginTop: 20}}>
                <Step title="Step 1" description="Welcome to your new automation! Click 'Create New Function' to begin." />
                <Step title="Step 2" description="Insert the necessary data of the function you selected." />
                <Step title="Step 3" description="Click 'Run' to save and run you automation! If it works, you can close the window." />
            </Steps>
        </>
    )
}

