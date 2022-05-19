
import './App.css';
import {useSelector} from "react-redux";
import ToDoList from './components/ToDoList';
function App() {
  const state = useSelector((state)=>({...state}));
  console.log("state",state)
  return (
    <div className="App">
  <ToDoList/>
    </div>
  );
}

export default App;
