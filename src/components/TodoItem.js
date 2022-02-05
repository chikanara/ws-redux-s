import React from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../js/action/taskAction";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p className={item.isDone ? "done" : ""}>{item.name}</p>
      <button onClick={() => dispatch(deleteTask(item.id))}>delete</button>
      <button onClick={() => dispatch(completeTask(item.id))}>complete</button>
    </div>
  );
};

export default TodoItem;
