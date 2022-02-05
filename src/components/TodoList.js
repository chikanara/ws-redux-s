import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <div>
      {tasks.map((item) => (
        <TodoItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default TodoList;
