import React from 'react'


const TodoList = (props) => {
   
  return (
    <>
      <li className="list-group-item p-3  ">
              <span className="Item">{props.text}</span>
              <button className="btn btn-danger position-absolute top-0 end-0 m-2 " onClick={()=>{
                return props.onSelect(props.id)
              }}>
                delete
              </button>
            </li>
    </>
  )
}

export default TodoList
