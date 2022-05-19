import {combineReducers} from "redux"
import todosReducer from "./reducer"
const rooReducer=combineReducers({
    todos:todosReducer,
});
export default rooReducer;