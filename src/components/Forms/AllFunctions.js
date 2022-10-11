import { Menu, } from 'antd';
import React, { useState } from 'react';
import './AllFunctions.css';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem( 'AppendTableRows', 'sub1', <img src="favicon.ico" alt="logo" style={{width:50, color:'black'}}/>, [
    getItem('AppendTableRows from ', '1'),
    getItem('Option 3', '2'),
    getItem('Option 4', '3'),
  ]),
  getItem('ApplyFilter', 'sub2', <img src="favicon.ico" alt="logo" style={{width:50}}/>, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
  ]),
  getItem('ApplyFilterStartAt', 'sub4', <img src="favicon.ico" alt="logo" style={{width:50}}/>, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
]; // submenu keys of first level

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

export default function AllFunctions()  {
  const [openKeys, setOpenKeys] = useState(['sub1']);

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
        borderRadius:40,
      }}
      items={items}
    />
  );
};
