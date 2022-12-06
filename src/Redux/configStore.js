import {combineReducers,createStore} from "redux"
import { gameReducer } from "./store"

export const configStore=()=>{
    const myStore=createStore(combineReducers({gameReducer}),
    window._REDUX_DEVTOOLS_EXTENSION_ && 
     window._REDUX_DEVTOOLS_EXTENSION_()
    )
    return myStore;
}