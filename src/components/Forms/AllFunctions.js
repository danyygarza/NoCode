import { Menu, Button } from "antd";
import React, { useState } from "react";
import "./AllFunctions.css";
import ExcelWrite from "./Excel/Write/ExcelWrite";

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
  const add = (data) => {
    props.setForms([...props.forms, data]);
  };

  let excelFunctions = props.functions.filter((item) => item.collection === 'Excel');
  let excelItems = excelFunctions.map((item, index) => {
    getItem(
      <Button
        className="all-functions-button"
        onClick={() => add(<ExcelWrite></ExcelWrite>)}
      >
        {item.function}
      </Button>,
      index,
      <img
        src={item.src}
        alt="logo"
        style={{ width: 50, color: "black" }}
      />
    )
  })
  console.log('foorms', excelItems)
  console.log('foorms', excelFunctions)
  //const ExcelItems = props.excelFunctions.map((item) => {});
  const items = [
    getItem(
      "ExcelWrite",
      "sub1",
      <img
        src="favicon.ico"
        alt="logo"
        style={{ width: 50, color: "black" }}
      />,
      excelItems
    ),
    getItem(
      "ApplyFilter",
      "sub2",
      <img src="favicon.ico" alt="logo" style={{ width: 50 }} />,
      [
        getItem(
          <Button
            className="all-functions-button"
            onClick={() => add(<ExcelWrite></ExcelWrite>)}
          >
            ApplyFilter to the worksheet 'worksheetKey' to the column with the
            index 'columnIndex' with the criteria 'criteria'
          </Button>,
          "5",
          <img
            src="favicon.ico"
            alt="logo"
            style={{ width: 50, color: "black" }}
          />
        ),
        getItem(
          <Button
            className="all-functions-button"
            onClick={() => add(<ExcelWrite></ExcelWrite>)}
          >
            ApplyFilter to the worksheet 'worksheetKey' in the table 'tableName'
            to the column with the index 'columnIndex' with the criteria
            'criteria'
          </Button>,
          "6",
          <img
            src="favicon.ico"
            alt="logo"
            style={{ width: 50, color: "black" }}
          />
        ),
        getItem(
          <Button
            className="all-functions-button"
            onClick={() => add(<ExcelWrite></ExcelWrite>)}
          >
            ApplyFilter to the worksheet 'worksheetKey' in the table 'tableName'
            to the column with the index 'columnIndex' with the criteria
            'criteria' and delete rows
          </Button>,
          "6",
          <img
            src="favicon.ico"
            alt="logo"
            style={{ width: 50, color: "black" }}
          />
        ),
        getItem(
          <Button
            className="all-functions-button"
            onClick={() => add(<ExcelWrite></ExcelWrite>)}
          >
            ApplyFilter to the worksheet 'worksheetKey' to the column with the
            index 'columnIndex' with the criteria 'criteria' amd delete the rows
          </Button>,
          "7",
          <img
            src="favicon.ico"
            alt="logo"
            style={{ width: 50, color: "black" }}
          />
        ),
        getItem(
          <Button
            className="all-functions-button"
            onClick={() => add(<ExcelWrite></ExcelWrite>)}
          >
            ApplyFilter to the worksheet 'worksheetKey' to the column with the
            index 'columnIndex' with the criteria 'criteria' and copy their
            value on 'saveVariable'
          </Button>,
          "8",
          <img
            src="favicon.ico"
            alt="logo"
            style={{ width: 50, color: "black" }}
          />
        ),
        getItem(
          <Button
            className="all-functions-button"
            onClick={() => add(<ExcelWrite></ExcelWrite>)}
          >
            ApplyFilter to the worksheet 'worksheetKey' in table 'tableName' to
            the column with the index 'columnIndex' by 'criteriaOption' with the
            criteria 'criteria'
          </Button>,
          "9",
          <img
            src="favicon.ico"
            alt="logo"
            style={{ width: 50, color: "black" }}
          />
        ),
        getItem(
          <Button
            className="all-functions-button"
            onClick={() => add(<ExcelWrite></ExcelWrite>)}
          >
            ApplyFilter to the worksheet 'worksheetKey' to the column in the
            index 'columnIndex' by 'criteriaOption' with the criteria 'criteria'
            and delete the rows
          </Button>,
          "10",
          <img
            src="favicon.ico"
            alt="logo"
            style={{ width: 50, color: "black" }}
          />
        ),
        getItem(
          <Button
            className="all-functions-button"
            onClick={() => add(<ExcelWrite></ExcelWrite>)}
          >
            ApplyFilter to the worksheet 'worksheetKey' in table 'tableName' to
            the column with the index 'columnIndex' by 'criteriaOption' with
            criteria 'criteria' and delete the rows
          </Button>,
          "11",
          <img
            src="favicon.ico"
            alt="logo"
            style={{ width: 50, color: "black" }}
          />
        ),
        getItem(
          <Button
            className="all-functions-button"
            onClick={() => add(<ExcelWrite></ExcelWrite>)}
          >
            ApplyFilter to the worksheet 'worksheetKey' to the column with the
            LetterIndex 'columnLetterIndex' with the criteria 'criteria' and
            write on the column 'columnIndex' 'numberValue'
          </Button>,
          "12",
          <img
            src="favicon.ico"
            alt="logo"
            style={{ width: 50, color: "black" }}
          />
        ),
      ]
    ),
    getItem(
      "ApplyFilterStartAt",
      "sub4",
      <img src="favicon.ico" alt="logo" style={{ width: 50 }} />,
      [
        getItem(
          <Button
            className="all-functions-button"
            onClick={() => add(<ExcelWrite></ExcelWrite>)}
          >
            ApplyFilterStartAt to the worksheet 'worksheetKey' start at row
            'rowIndex' to the column with the index 'columnIndex' with the
            criteria 'criteria'
          </Button>,
          "13",
          <img
            src="favicon.ico"
            alt="logo"
            style={{ width: 50, color: "black" }}
          />
        ),
        getItem(
          <Button
            className="all-functions-button"
            onClick={() => add(<ExcelWrite></ExcelWrite>)}
          >
            ApplyFilterStartAt to the worksheet 'worksheetKey' start at row
            'rowIndex' to the column with the index 'columnIndex' with the
            criteria 'criteria' and copy their value on 'SaveVariable'
          </Button>,
          "14",
          <img
            src="favicon.ico"
            alt="logo"
            style={{ width: 50, color: "black" }}
          />
        ),
        getItem(
          <Button
            className="all-functions-button"
            onClick={() => add(<ExcelWrite></ExcelWrite>)}
          >
            ApplyFilterStartAt to the worksheet 'worksheetKey' start at row
            'rowIndex' to the column with the index 'columnIndex' with the
            criteria 'criteria' and delete the rows
          </Button>,
          "13",
          <img
            src="favicon.ico"
            alt="logo"
            style={{ width: 50, color: "black" }}
          />
        ),
        getItem(
          <Button
            className="all-functions-button"
            onClick={() => add(<ExcelWrite></ExcelWrite>)}
          >
            ApplyFilterStartAt to the worksheet 'worksheetKey' start at row
            'rowIndex' to the column with the index 'columnIndex' by
            'criteriaOption' with the criteria 'criteria'
          </Button>,
          "13",
          <img
            src="favicon.ico"
            alt="logo"
            style={{ width: 50, color: "black" }}
          />
        ),
        getItem(
          <Button
            className="all-functions-button"
            onClick={() => add(<ExcelWrite></ExcelWrite>)}
          >
            ApplyFilterStartAt to the worksheet 'worksheetKey' start at row
            'rowIndex' to the column with the LetterIndex 'columnLetterIndex'
            with the criteria 'criteria' and write on the column 'columnIndex'
            'numberValue'
          </Button>,
          "13",
          <img
            src="favicon.ico"
            alt="logo"
            style={{ width: 50, color: "black" }}
          />
        ),
      ]
    ),
  ]; // submenu keys of first level

  /*
  <Button className='all-functions-button' type="primary" onClick={() =>add(<ExcelWrite></ExcelWrite>)}>
  excel
  </Button>
  */

  const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

  const [openKeys, setOpenKeys] = useState([]);

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
