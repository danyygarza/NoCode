import React, {useState} from 'react';
import {Button, message, Steps} from "antd";
import "antd/dist/antd.css";
import Reader from './reader';

const steps = [
    {
      title: 'Choose the reader',
      content: <Reader />,
    },
    {
      title: 'Choose the function category',
      content: 'Second-content',
    },
    {
      title: 'Choose the function',
      content: 'Last-content',
    }
  ];

function MultiStepForm() {
    const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  return (
    <>
      <Steps current={current} items={items} />
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
}

export default MultiStepForm