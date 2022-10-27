import React, { useState } from "react";
import items from "../components/Forms/AllFunctions";
import data from "../components/Forms/syntax.json";
function searchFunction(input,nameSearch){
    
    
    try{
        
        let text = input.toUpperCase()
        const name = nameSearch.toUpperCase()
        console.log('try', name.search(text) > -1)
        return(name.search(text) > -1)
    }catch(e){
        console.log('try', e.message)
        return(false)
    }
    
}
function ListTest(props) {
    console.log('input',typeof props.input)
    console.log('search', data[0].Name.search('x'))
  const filteredData = data.filter((el) => 
    //if no input the return the original

    searchFunction(props.input,el.Name)
    
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
