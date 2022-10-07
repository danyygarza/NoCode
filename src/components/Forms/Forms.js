import { Button, Modal, Input} from 'antd';
import React, { useState } from 'react';
import './Forms.css';

//components
import MostUsedFunctions from './MostUsedFunctions/MostUsedFunctions'
import AllFunctions from './AllFunctions'


export default function Forms() {
  //modal
  const [open, setOpen] = useState(false);

  //search
  const { Search } = Input;

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
        <span style={{display:'inline-block', textAlign:'center', wordSpacing:140, paddingTop:15}}>
            <p>
                <a style={{color: 'black', textDecoration:'none'}}>All</a> <a style={{color: 'black', textDecoration:'none'}}>Readers</a> <a style={{color: 'black', textDecoration:'underline'}}>Function</a> <a style={{color: 'black', textDecoration:'none'}}>Conditions</a> <a style={{color: 'black', textDecoration:'none'}}>Scripts</a>
                <div className="most-used-functions"><span><MostUsedFunctions /></span></div>

            </p>
        </span>
        <span style={{display:'inline-block', marginLeft:50}}>
            <p>
                <div className="most-used-functions">
                    <AllFunctions />
                </div>
            </p>
        </span>
      </Modal>
    </>
  );
};

