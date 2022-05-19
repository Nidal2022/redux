import {createStore,applyMiddleware} from "redux"
import logger from "redux-logger"
import rooReducer from "./root-reducer"
const middleware=[];
if(process.env.NODE_ENV ==="development"){
    middleware.push(logger)
}
const store=createStore(rooReducer,applyMiddleware(...middleware));
export default store;