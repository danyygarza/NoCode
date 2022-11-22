import React from 'react'
import {Button} from 'antd';

function RenderFunctions(functions, group, collection, props) {
  console.log('render', functions)

  return functions.functions
    .filter(
      (element) =>
        element.collection === functions.collection &&
        element.group === functions.group
    )
    .map((item) => (
      <>
        {console.log('item', item)}
        <Button
          style={{
            height: 120,
            borderRadius: 40,
            borderColor: "white",
            
          }}
          onClick={(element) => {
            // add(item);
          }}
        >
          <div className="imgp">
            <img src="favicon.ico" alt="logo" style={{ width: 70 }} />
            <p style={{ color: "black", marginLeft: 0 }}>
              <b>{item.function}</b>
            </p>
          </div>
        </Button>
      </>
    ));
}

export default RenderFunctions