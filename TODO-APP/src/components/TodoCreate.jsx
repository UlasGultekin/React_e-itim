import React from 'react'
import '../App.css'
import { useState } from 'react'
function TodoCreate({onCreateTodo}) {
const [newTodo, setNewTodo] = useState('')

  const createTodo=() =>{
    if(!newTodo) return;
      const request ={
        id:Math.floor(Math.random()*99999999999),
        content:newTodo
      }
      onCreateTodo(request);
      setNewTodo('')

  }
  return (
    <div className='todo-create'>
        <input 
        value={newTodo}
        onChange={(e)=>setNewTodo(e.target.value)}

        className='todo-input' type='text' placeholder='Todo Giriniz'></input>
        <button onClick={createTodo} className='todo-button'>Todo Oluştur</button>
    </div>
  )
}

export default TodoCreate