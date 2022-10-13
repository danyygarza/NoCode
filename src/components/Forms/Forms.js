import { Button, Modal, Input, Form } from 'antd';
import React, { forwardRef, useState, useImperativeHandle } from 'react';
import './Forms.css';

//components
import MostUsedFunctions from './MostUsedFunctions'
import AllFunctions from './AllFunctions'
import Code from '../../Pages/SandBox/code';

const Forms = forwardRef((props, ref) => {
  //modal
  const [open, setOpen] = useState(false);

  //search 
  const { Search } = Input;

  const [form] = Form.useForm();

  const onSearch = (value) => console.log(value);
  
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)} className='forms-button'>
        Create New Function
      </Button>
      <Modal
        title="New Function (pending name)"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={900}
      >
        <Search placeholder="Búsqueda" onSearch={onSearch} className='search' enterButton />
        <span style={{ display: 'inline-block',  wordSpacing: 115, paddingTop: 15, marginLeft: '9%' }}>
          <p>
            <a style={{ color: 'black', textAlign:'center', textDecoration: 'none' }}>All</a> <a style={{ color: 'black', textAlign:'center', textDecoration: 'none' }}>Readers</a> <a style={{ color: 'black', textDecoration: 'underline' }}>Function</a> <a style={{ color: 'black', textDecoration: 'none' }}>Conditions</a> <a style={{ color: 'black', textDecoration: 'none' }}>Scripts</a>
          </p>
          <div className="most-used-functions"><MostUsedFunctions setForms={props.setForms} forms={props.forms} ref={ref}/></div>
        </span>
        <span style={{ display: 'inline-block', marginLeft: 50 }}>
          <p>
            <div className="most-used-functions">
              <AllFunctions setForms={props.setForms} forms={props.forms} ref={ref} />
            </div>
          </p>
        </span>
      </Modal>

    </>
  );
})

export default Forms

