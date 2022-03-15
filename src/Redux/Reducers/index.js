import { combineReducers } from "redux";
import reducer from "./Reducer";
import AdminReducer from "./AdminReducer";
const rootreducer = combineReducers({
    reducer,
    AdminReducer
})


export default rootreducer;