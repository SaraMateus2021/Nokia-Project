import React from "react";
import { Task } from "../types/Taks";


const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {task.text} {task.completed ? "(Completed)" : "(Incomplete)"}
    </li>
  );
};

export default TaskItem;