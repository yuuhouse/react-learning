import React, { useState } from 'react'

export default function TodoList() {
   const[todos, setTodos]= useState([])
  return (
    <>
      <div>Hello World</div>
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
  )
}
