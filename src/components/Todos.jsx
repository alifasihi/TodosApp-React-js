import React, { useEffect } from 'react'
import { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

export default function Todos() {

  const [todos , setTodos] = useState([]);

  // const onInputNewTodoChangeHandler=(event)=>{
  //   console.log(event);
  // }
  const addNewTodoHandler=(event)=>{

    if (event.key==='Enter') {
      let newTodos=[
        ...todos,
        {
          id:uuidv4(),
          title:event.target.value,
          status:false
        }
      ]
      setTodos(newTodos)


      event.target.value=''
    }
  }

  const deleteTodoHandler=(todo)=>{
    let newTodos = todos.filter((todoItems)=>{
        return todo.id!=todoItems.id
    })

    setTodos(newTodos)
  }

  const toggleTodoStatusHandler=(todo)=>{

    let newTodos=todos.map((todoItem)=>{
      if (todo.id===todoItem.id) {
        todoItem.status = ! todoItem.status
      }
      return todoItem
    })

    setTodos(newTodos)
  }

  const editTodoTitleHandler=(todo,newTitleValue)=>{

    let newTodos=todos.map((todoItem)=>{
      if (todo.id===todoItem.id) {
        todoItem.title = newTitleValue
      }
      return todoItem
    })

    setTodos(newTodos)
  }

  useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem('todos_list'))??[])
  },[])

  useEffect(()=>{
      localStorage.setItem('todos_list',JSON.stringify(todos))
  },[todos])


  return (
    <>
        <div className="w-full max-w-md px-6 py-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-purple-600 mb-6 text-center">TO DO APP</h1>

        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="What needs to be done today?"
            // onChange={onInputNewTodoChangeHandler}
            onKeyDown={addNewTodoHandler}
            className="w-full px-4 py-2 text-black border border-gray-300 rounded outline-none"
          />
        </div>

        <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodoStatus={toggleTodoStatusHandler} editTodoTitle={editTodoTitleHandler}/>
      </div>
    </>
  )
}
