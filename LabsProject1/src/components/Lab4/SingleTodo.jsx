import React from 'react'


const SingleTodo = ({todo,setTodoList}) => {

const deleteTodoItem = (id) => {
    const updatedTodoList = todo.filter(item => item.id !== id);
    setTodoList(updatedTodoList);
  };


  return (
    <div>
      <h1>My ToDos</h1>
       {todo.map((task)=>(
 <div className='todo-parent' key={task.id}>
 <div className='content'>
 <h4>{task.title}</h4>
 <p>{task.description}</p>
 </div>
 <div className='controls'>
     <button onClick={()=>deleteTodoItem(task.id)}>❌</button>
 </div>


</div> ))
       
      }
    </div>
  )
}

export default SingleTodo