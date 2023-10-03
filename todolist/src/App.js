import "./App.css";
import React, { useState } from 'react';
import TodoList from "./Components/TodoList";

function App() {
  const [input, setInput] = useState('')
  const [list, setList] = useState([])
  const itemEvent =(event)=>{
    setInput(event.target.value)
  }
  const itemValue = ()=>{
    setList((oldValue)=>{
      return [...oldValue, input];
    })
    setInput('');
  }

  const deleteItem =(id)=>{
    console.log("Deleted")
    setList((oldValue)=>{
      return oldValue.filter((array, index)=>{
        return index !== id
      })
    })
}
  return (
    <>
      <div className="card text-center w-50 m-auto my-5">
        <div className="card-header">
          <h3><span className="t">T</span><span className="o">o</span><span className="d">D</span><span className="O">o</span><span className="k">-</span><span className="l">L</span><span className="i">i</span><span className="s">s</span><span className="t">t</span></h3>
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your ItemName..." 
              onChange={itemEvent}
              value={input}
            />
            <button className="btn btn-success" type="button" onClick={itemValue}>
              Add Item
            </button>
          </div>
        </div>
        <div className="card-footer  ">
          <ul className="list-group">
          {list.map((val, index)=>{
            return  <TodoList
            key={index}
            id={index}
              text={val}
              onSelect={deleteItem}
            />
          })}
           
            
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
