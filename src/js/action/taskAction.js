import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from "../const";
//payload: new TASK {id:"",name;"",isDone:""}
export const addTask = (payload) => ({
  type: ADD_TASK,
  payload,
});
// payload : id
export const deleteTask = (payload) => ({
  type: DELETE_TASK,
  payload,
});
//payload : id
export const completeTask = (payload) => ({
  type: COMPLETE_TASK,
  payload,
});


