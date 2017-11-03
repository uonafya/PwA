import {combineReducers} from "redux"
import {taskReducer} from "./Tasks/reducer"
//import reducers from domains


const rootReducer = combineReducers({
    taskReducer
})

export default rootReducer