import React, { useState } from "react";
import Heading from "./Heading";
import List from "./toDoItem";


function App() {

  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);


  function updateText(event) {
    setInputText(event.target.value)
  }

  function addElement() {
    setItems((prevItems) => {
      // need to spread previous items in new array and add next element
      return [...prevItems, inputText]
    });
    setInputText("");
  };

  function deleteItem(id) {
    setItems(prev => {
      return prev.filter((item, index) => {
        return index != id;
      });
    })
  };

  return (
    <div className="container">
      <Heading />

      <div className="form">
        <input type="text" value={inputText} onChange={updateText} />
        <button onClick={addElement}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
        {items.map((item, i)=> 
        <List 
        // can get acess to array index through second parameter
        key={i}
        // we dont actually get access to key so need to make id
        id={i}
        contents={item}
        // can also call a funciton
        // now the component has access to this function and we can 
        // call it when we want
        onChecked={deleteItem}
        />)}
        </ul>
      </div>

    </div>
  )
}

export default App;
