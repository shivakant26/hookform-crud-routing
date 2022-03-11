import { createStore } from "redux";
import rootreducer from "./Reducers";
const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();


const store = createStore(rootreducer,enableReduxDevTools);



export default store;