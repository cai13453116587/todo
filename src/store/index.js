import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import login from "./store.loginaction"
import countent from "./store.countentaction"
let reducer = combineReducers({
    login,countent
})

export default createStore(reducer,applyMiddleware(thunk));