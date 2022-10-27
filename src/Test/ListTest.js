import React, {useState} from 'react'
import items from '../components/Forms/AllFunctions'
import data from '../components/Forms/syntax.json'

function ListTest(props) {

    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (props.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.text.toLowerCase().includes(props.input)
        }
    })
  return (
    <ul>
        {filteredData.map((item) => (
            <li key={item.id}>{item.Name}</li>
        ))}
    </ul>
  )
}

export default ListTest