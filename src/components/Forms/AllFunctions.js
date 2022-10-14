import { Menu, Button } from "antd";
import React, { useState } from "react";
import "./AllFunctions.css";
import ExcelWrite from "./Excel/Write/ExcelWrite";
import Upload from "./Excel/Upload/Upload";
import RemoveDuplicate from "./Excel/RemoveDuplicate/RemoveDuplicate";
import {
  LinkOutlined
} from '@ant-design/icons';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

export default function AllFunctions(props) {
  const testFunc = (text) => {
    console.log(text)
  }

  const add = (data) => {
    console.log("adding to form from MOF");

    props.setForms([...props.forms, data]);
    console.log("forms", props.forms);
  };


  const items = [
    getItem(
      "AppendTableRows",
      "sub1",
      <img
        src="favicon.ico"
        alt="logo"
        style={{ width: 50, color: "black" }}
      />,
      [
        getItem("AppendTableRows from ", "1"),
        getItem(
          "ExcelWrite",
          "2"
        ),
        getItem("Option 4", "3"),
      ]
    ),
    getItem(
      "ApplyFilter",
      "sub2",
      <img src="favicon.ico" alt="logo" style={{ width: 50 }} />,
      [getItem("Option 5", "5"), getItem("Option 6", "6")]
    ),
    getItem(
      "ApplyFilterStartAt",
      "sub4",
      <img src="favicon.ico" alt="logo" style={{ width: 50 }} />,
      [
        getItem("Option 9", "9"),
        getItem("Option 10", "10"),
        getItem("Option 11", "11"),
        getItem(
          <Button type="primary" onClick={() =>add(<ExcelWrite></ExcelWrite>)}>
            excel
          </Button>,
          <LinkOutlined/>,
        ),
      ]
    ),
    
  ]; // submenu keys of first level

  const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

  const [openKeys, setOpenKeys] = useState(["sub1"]);

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  
  
  return (
    <Menu
     
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{
        width: 730,
        borderRadius: 40,
      }}
      items={items}
    />
  );
}
