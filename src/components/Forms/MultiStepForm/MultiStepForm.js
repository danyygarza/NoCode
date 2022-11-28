import React, { useState, useEffect } from "react";
import { Button, message, Steps } from "antd";
import "antd/dist/antd.css";
import Reader from "./reader";
import GroupSelect from "./GroupSelect";
import RenderFunctions from "./functions";


//comment

function MultiStepForm(props) {
  const [current, setCurrent] = useState(0);
  const [collection, setCollection] = useState("");
  const [open, setOpen] = useState(false);
  const [group, SetGroup] = useState("");
  const steps = [
    {
      title: "Choose the reader",
      content: <Reader collection={collection} setCollection={setCollection} />,
    },
    {
      title: "Choose the function group",
      content: <GroupSelect group={group} SetGroup={SetGroup} />,
    },
    {
      title: "Choose the function",
      content: <RenderFunctions functions={props.functions} collection={collection} group={group} setForms={props.setForms} forms={props.forms} id={props.id} setId={props.setId} />,
    },
  ];
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
  useEffect(() => {
    // console.log('group', group)
  }, [])
  return (
    <>
      <Steps current={current} items={items} style={{ padding: 25 }} />
      <div style={{ marginTop: 10, marginLeft: 140, marginBottom: 15 }}>{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()} style={{ justifyContent: 'right' }}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
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
export default MultiStepForm;