import { Task } from "../types/Taks";


export class TaskService {
    private static API_URL = "http://localhost:8080/api/tasks";

    static async fetchTasks() : Promise<Task[]> {
        try {
            const response = await fetch(this.API_URL);
            if (!response.ok) {
                throw new Error("Failed to fetch tasks");
            }
            const tasks = await response.json() as Task[];
            return tasks;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}


