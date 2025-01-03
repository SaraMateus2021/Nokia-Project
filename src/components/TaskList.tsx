import { FetchTasksResult, TaskService } from "../service/TaskService";
import { Task } from "../types/Taks";
import Pagination from "./Pagination";
import TaskItem from "./TaskItem";
import { useEffect, useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const tasksPerPage = 18;
  const totalTasks = tasks.length;
  const totalPages = Math.ceil(totalTasks / tasksPerPage);
  const startIndex = (currentPage - 1) * tasksPerPage;
  const currentTasks = tasks.slice(startIndex, startIndex + tasksPerPage);

  useEffect(() => {
    const loadTasks = async () => {
      const result: FetchTasksResult = await TaskService.fetchTasks();
      if (result.error) {
        setError(result.errorMessage);
      } else {
        setTasks(result.data);
        setError(null);
      }
      setLoading(false);
    };

    loadTasks();

    const intervalId = setInterval(loadTasks, 61000)

    return () => {
      clearInterval(intervalId);
    }
  }, []);


  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div>
      <br />
      {error ? (
        <p className="text-danger">{error}</p>
      ) : tasks.length === 0 ? (
        <p>No Tasks</p>
      ) : (
        <>
          <h2>Tasks List</h2>
          <ul>
            {currentTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </ul>

          {tasks.length >= tasksPerPage
            ? Pagination({
                currentPage,
                totalPages,
                handlePreviousPage,
                handleNextPage,
              })
            : ""}
        </>
      )}
    </div>
  );
};

export default TaskList;
