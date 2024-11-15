import { FetchTasksResult, TaskService } from "../service/TaskService";
import { Task } from "../types/Taks";
import TaskItem from "./TaskItem";
import React, { useEffect, useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const loadTasks = async () => {

      const result : FetchTasksResult = await TaskService.fetchTasks();
      if (result.error) {
        setError(result.errorMessage);
      } else  {
        setTasks(result.data);
        setError(null); 
      }
      setLoading(false);
    };

    loadTasks();
  
  }, []);

  if (loading) return <p>Loading tasks...</p>;

  return (
    <>
      <br />{error ? (
        <p className="text-warning">{error}</p>
      ) : tasks.length === 0 ? (
        <p>No Tasks</p>
      ) : (
        <>
         <h2>Tasks List</h2>
         <ul>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
         </ul>
        </>
       
      )}
    </ >
  );
}

export default TaskList;
