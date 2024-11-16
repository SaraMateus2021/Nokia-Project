import { Task } from "../types/Taks";

interface TaskItemProps {
  task: Task;
}

const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {task.text} {task.completed ? "(Completed)" : "(Incomplete)"}
    </li>
  );
};

export default TaskItem;
