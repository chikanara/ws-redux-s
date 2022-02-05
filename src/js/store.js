import { createStore } from "redux";
// import rootReducer from "./reducer";
import taskReducer from "./reducer/taskReducer";
const store = createStore(
  taskReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

