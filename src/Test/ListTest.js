import React, { useState } from "react";
import items from "../components/Forms/AllFunctions";
import data from "../components/Forms/syntax.json";

function ListTest(props) {
    console.log('input', props.input)
    console.log('search', data[0].Name)
  const filteredData = data.filter((el) => 
    //if no input the return the original

    el.Name === 'Excel Write'
    
    // try {
    //   if (props.input === "") {
    //     return el;
    //   }
    //   //return the item which contains the user input
    //   else {
    //     console.log(props.input)
    //     return el.text.toLowerCase().includes(props.input);
    //   }
    // } catch (err) {
    //   console.log("errrrooooooor")
    // }
  );
  console.log('filter',filteredData)
  return (
    <ul>
      {filteredData.map((item) => (
        <li key={item.id}>{item.Name}</li>
      ))}
    </ul>
  );
}

export default ListTest;
