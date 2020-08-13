import React, { useState } from "react";
import Heading from "./Heading";



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
        {items.map(item => <li>{item}</li>)}
        </ul>
      </div>

    </div>
  )
}

export default App;
