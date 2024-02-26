import React, { useState } from 'react'
import SingleTodo from './SingleTodo';
import './todo.css'
const TodoList = () => {

 

const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "Description for Task 1",
      isDone: false
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description for Task 2",
      isDone: false
    },
    {
      id: 3,
      title: "Task 3",
      description: "Description for Task 3",
      isDone: false
    },
    {
      id: 4,
      title: "Task 4",
      description: "Description for Task 4",
      isDone: false
    },
    {
      id: 5,
      title: "Task 5",
      description: "Description for Task 5",
      isDone: false
    },
    {
      id: 6,
      title: "Task 6",
      description: "Description for Task 6",
      isDone: false
    },
    {
      id: 7,
      title: "Task 7",
      description: "Description for Task 7",
      isDone: false
    },
    {
      id: 8,
      title: "Task 8",
      description: "Description for Task 8",
      isDone: false
    },
    {
      id: 9,
      title: "Task 9",
      description: "Description for Task 9",
      isDone: false
    },
    {
      id: 10,
      title: "Task 10",
      description: "Description for Task 10",
      isDone: false
    },
  ])
    
    
    
  return (
    <div className='todo-container'>
<SingleTodo todo={todoList} setTodoList={setTodoList}/>
    </div>
  )
}

export default TodoList