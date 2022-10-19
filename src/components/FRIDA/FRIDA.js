import React, {
  useEffect,
  useState,
  useForm,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  Form,
  Input,
  Checkbox,
  Button,
  Menu,
  Dropdown,
  Space,
  Col,
  Row,
} from "antd";
import {
  MinusCircleOutlined,
  PlusOutlined,
  SmileOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { ExcelWriteModel } from "../Forms/Excel/Write/ExcelWriteModel";
import { remove } from "firebase/database";

const Frida = forwardRef((props, ref) => {
    const [form] = Form.useForm();
    const [forms, setForms] = useState([]); // forms array
    const [elRefs, setElRefs] = React.useState([]); // reference array
    useImperativeHandle(ref, () => ({
        validate() {
            // ! This binds validate function to Codes' reference  
            return handleValidate();
        },
    }));

    //! Function  which is triggered by the imperative handle
    const handleValidate = () => {
        console.log('elRef lenght', elRefs.length);
        console.log(elRefs)
        const res = elRefs.map((item, index) => {
            return item.current.submit();
        });
    }

    React.useEffect(() => {
        // *add or remove refs
        console.log("use effect is triggered");

        setElRefs((elRefs) =>
            Array(forms.length + 1)
                .fill()
                .map((_, i) => elRefs[i] || createRef()),
        );
    }, [forms]);
    //! this is used to pass the function to code(parent component) //



  return (
    <>
      {console.log(props.forms.lenght)}
      <div className="main">
        <Form form={form}>
          {props.forms.lenght === 0 ? (
            <h1>Empty</h1>
          ) : (
            props.forms.map((form, index) => {
              return (
                <Space
                  style={{
                    display: "flex",
                    marginBottom: 8,
                  }}
                  align="baseline"
                >
                  {form}
                  <Button
                    onClick={(event) => {
                      remove(index)
                    }}
                  >
                    Delete Action
                  </Button>
                </Space>
              );
            })
          )}
        </Form>
      </div>
    </>
  );
});

export default Frida;
