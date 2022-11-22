import React, { useState, useEffect } from "react";
import {
  Steps,
  Form,
  Input,
  Card,
  Modal,
  Button,
  Popover,
  Row,
  Col,
  Tabs,
  Radio,
  message,
  Upload,
} from "antd";
import "antd/dist/antd.css";
import Reader from "./reader";
import GroupSelect from "./GroupSelect";
import Testform from "../../../Test/testForm";
import { getFirestore, doc, getDoc } from "@firebase/firestore";
const db = getFirestore();

function MultiStepForm(props) {
  console.log("funcs", props.functions);
  const [current, setCurrent] = useState(0);
  const [collection, setCollection] = useState("");
  const [group, SetGroup] = useState("");

  // const add = () => {
  //   const temp = [];
  //   Object.values(props.data.forms)[key].map((item, index) => {
  //     console.log(item);
  //     switch (item.type) {
  //       case "text":
  //         temp.push(
  //           <>
  //             {
  //               <>
  //                 <Col>
  //                   <Form.Item
  //                     name={[`${forms.length}${index}`, item.PlaceHolder]}
  //                     label={item.title}
  //                     rules={[
  //                       { required: true, message: "Please fill this out" },
  //                     ]}
  //                     style={{ width: "auto" }}
  //                   >
  //                     <Input
  //                       type={item.type}
  //                       placeholder={item.placeHolder}
  //                       onChange={props.onChange}
  //                       name={index}
  //                     />
  //                   </Form.Item>
  //                 </Col>
  //               </>
  //             }
  //           </>
  //         );
  //         break;
  //       case "filepicker":
  //         temp.push(
  //           <>
  //             {
  //               <>
  //                 <Col>
  //                   <Upload {...info}>
  //                     <Button icon={<UploadOutlined />}>Click to Upload</Button>
  //                   </Upload>
  //                 </Col>
  //               </>
  //             }
  //           </>
  //         );
  //         break;
  //       case "word":
  //         temp.push(
  //           <>
  //             {
  //               <>
  //                 <p style={{ color: "black" }}>{item.title}</p>
  //               </>
  //             }
  //           </>
  //         );
  //         break;
  //     }
  //   });
  //   setForms([...forms, temp]);
  // };
  function RenderFunctions(functions, group, collection) {
    console.log("render", functions);
    return functions.functions
      .filter(
        (element) =>
          element.collection === functions.collection &&
          element.group == functions.group
      )
      .map((item) => (
        <>
          {console.log("item", item)}
          <Button
            style={{
              height: 120,
              borderRadius: 40,
              borderColor: "white",
            }}
            onClick={() => {
              //add(item);
              console.log("click", item);
            }}
          >
            <div className="imgp">
              <img src="favicon.ico" alt="logo" style={{ width: 70 }} />
              <p style={{ color: "black", marginLeft: 0 }}>
                <b>{item.function}</b>
              </p>
            </div>
          </Button>
        </>
      ));
  }
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
      content: (
        <RenderFunctions
          functions={props.functions}
          collection={collection}
          group={group}
        />
      ),
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
    console.log("group", group);
  }, []);

  return (
    <>
      <Steps current={current} items={items} style={{ padding: 25 }} />
      <div style={{ marginTop: 10, marginLeft: 140, marginBottom: 15 }}>
        {steps[current].content}
      </div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => next()}
            style={{ justifyContent: "right" }}
          >
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
