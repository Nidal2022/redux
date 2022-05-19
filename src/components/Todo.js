import React,{useState} from 'react'
import './todo.css'
import {TransitionGroup,CSSTransition} from 'react-transition-group'
const Todo = ({ToggleTodo,task,completed,id,removeTodo,updateTodo}) => {
   
    const [isEditing,setIsEditing]=useState(false);
    const [editTask,setEditTask]=useState(task);
    const handleUpdate=(e)=>{
      e.preventDefault();
      updateTodo(id,editTask);
      setIsEditing(false)
    }
  return (
    <div>
        <TransitionGroup className={completed ? "Todo completed" : "todo"}>
          {isEditing ? (
            <CSSTransition key="editing" timeout={500} classNames="form">
               <form className="todo-edit-form" onSubmit={handleUpdate}>
                   <input type="text" name="task" value={editTask}
                        onChange={(e)=>setEditTask(e.target.value)}/>
                           <button>Save</button>
                </form>
            </CSSTransition>
          ):(
            <CSSTransition key="normal" timeout={500} classNames="task-text"> 
                <li className='todo-task' onClick={ToggleTodo}>
                    {task}
                </li>
            </CSSTransition>
          )}
            
            <div className="Todo-buttons">
               
                <button
                  style={{marginRight: "0.5rem" , backgroundColor:"red"}}
                  variant="danger"
                  size="sm"
                  onClick={()=>setIsEditing(true)}
                >Edit</button>
                <button
                  style={{marginRight: "0.5rem" , backgroundColor:"red"}}
                  variant="danger"
                  size="sm"
                  onClick={removeTodo}
                >
                  &times;
                </button>

            </div>
        </TransitionGroup>
    </div>
  )
}

export default Todo