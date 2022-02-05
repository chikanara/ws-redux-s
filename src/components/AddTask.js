import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../js/action/taskAction";

const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
   if(task){
    dispatch(addTask({ id: Math.random(), name: task, isDone: false }));
    setTask("");
   }
   else alert("Enter new task")
  
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default AddTask;
