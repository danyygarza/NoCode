import React from 'react'
import { Input } from 'antd'
import ListTest from './ListTest';


//search 
const { Search } = Input;
const onSearch = (value) => console.log(value);


function PageTest() {
    return (
        <>
            <div>pageTest</div>
            <Search placeholder="Búsqueda" onSearch={onSearch} className='search ' enterButton />
            <ListTest />
        </>
    )
}

export default PageTest