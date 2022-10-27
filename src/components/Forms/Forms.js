import { Button, Modal, Input, Form, List } from 'antd';
import React, { forwardRef, useState } from 'react';
import './Forms.css';


//components
import MostUsedFunctions from './MostUsedFunctions'
import AllFunctions from './AllFunctions'
import ListTest from '../../Test/ListTest';

const Forms = forwardRef((props, ref, items) => {
  //modal
  const [open, setOpen] = useState(false);
  const [closed, setClosed] = useState(false);
  const [filteredList, setFilteredList] = useState(items);
  const [component, setComponent] = useState("nothing");


  //search 
  const { Search } = Input;
const [inputText, setInputText] = useState("");
let inputHandler = (e) => {
  var lowerCase = e.target.value.toLowerCase();
  setInputText(lowerCase);
};


  return (
    <>
      <Button onClick={() => setOpen(true)} className='forms-button'>
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
        <Search placeholder="Búsqueda" onChange={inputHandler} className='search ' enterButton />
        <ListTest input={inputText} />
        
        <><span style={{ display: 'inline-block', wordSpacing: 115, paddingTop: 15, marginLeft: '9%' }}>
          <p>
            <a style={{ color: 'black', textAlign: 'center', textDecoration: 'none' }}>All</a> <a style={{ color: 'black', textAlign: 'center', textDecoration: 'none' }}>Readers</a> <a style={{ color: 'black', textDecoration: 'underline' }}>Function</a> <a style={{ color: 'black', textDecoration: 'none' }}>Conditions</a> <a style={{ color: 'black', textDecoration: 'none' }}>Scripts</a>
          </p>
          <div className="most-used-functions"><MostUsedFunctions setForms={props.setForms} forms={props.forms} ref={ref} /></div>
        </span><span style={{ display: 'inline-block', marginLeft: 50 }}>
            <p>
              <div className="most-used-functions">
                <AllFunctions setForms={props.setForms} forms={props.forms} ref={ref} />
              </div>
            </p>
          </span>
        </>
      </Modal>

    </>
  );
})

export default Forms

