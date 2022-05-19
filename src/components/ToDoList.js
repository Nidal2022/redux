import TodoInput from "./ToDoInput";
import Todo from './Todo'
import './TodoList.css';
import {CSSTransition,TransitionGroup} from "react-transition-group";
import {useSelector,useDispatch} from "react-redux";
import{completeTodo,addTodo,removeTodo,updateTodo} from "../redux/action";
const ToDoList = () => { 
    const state= useSelector((state)=>({...state.todos}));
    
    const dispatch=useDispatch();
    const update=(id,updatedTask)=>{
        dispatch(updateTodo({id,updatedTask}))
    }
    
    return(
        <div className="TodoList">
       <h1>Todo App</h1>
       <TodoInput createTodo={(newTodo) => dispatch(addTodo(newTodo))}/>
       <ul>
        <TransitionGroup className="todo=list">
          {state.todos && state.todos.map((todo)=>{
              return (
                  <CSSTransition key={todo.id} className="todo">
                  <Todo key={todo.id} id={todo.id} task={todo.task} completed={todo.completed}
                  ToggleTodo={()=> dispatch(completeTodo(todo))}
                  removeTodo={()=> dispatch(removeTodo(todo))}
                  updateTodo={update}
                  />
                  </CSSTransition>
          )
          })}
        </TransitionGroup>
       </ul>
        </div>
    )
 }
 export default ToDoList;