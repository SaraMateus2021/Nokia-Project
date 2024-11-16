import { Task } from "../types/Taks";

export interface FetchTasksResult {
  data: Task[];
  error: boolean;
  errorMessage: string;
}

export class TaskService {
  private static API_URL = "http://localhost:8080/api/tasks";

  static async fetchTasks(): Promise<FetchTasksResult> {
    try {
      const response = await fetch(this.API_URL);
      if (!response.ok) {
        return { data: [], error: true, errorMessage: "Failed to fetch tasks" };
      }
      const tasks = (await response.json()) as Task[];
      return { data: tasks, error: false, errorMessage: "" };
    } catch (error) {
      return {
        data: [],
        error: true,
        errorMessage: "An error occurred while fetching tasks.",
      };
    }
  }
}
