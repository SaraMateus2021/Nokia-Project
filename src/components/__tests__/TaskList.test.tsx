import { render, screen, waitFor } from "@testing-library/react";
import TaskList from "../TaskList";
import { TaskService } from "../../service/TaskService";
import { Task } from "../../types/Taks";
import '@testing-library/jest-dom';

// Mocking the TaskService
jest.mock("../../service/TaskService")

const mockTasks: Task[] = [
    { id: 1, text: "Test Task 1", completed: false },
    { id: 2, text: "Test Task 2", completed: true },
  ];
  
describe("TaskList Component", () => {
    
    test("should display 'No Tasks' when there are no tasks", async () => {
        (TaskService.fetchTasks as jest.Mock).mockResolvedValueOnce({ data: [], error: false, errorMessage: ""});
        
        render(<TaskList />);
    
        // Wait for the component to load and check if the message 'No Tasks' is displayed
        await waitFor(() => screen.getByText(/No Tasks/i));
        
        expect(screen.getByText(/No Tasks/i)).toBeInTheDocument();
      });

      test("should show loading message when tasks are being loaded", async () => {
        (TaskService.fetchTasks as jest.Mock).mockResolvedValueOnce({ data: [], error: false, errorMessage: "" });
    
        render(<TaskList />);
    
        // Check if loading message is shown before tasks are fetched
        expect(screen.getByText(/Loading tasks.../i)).toBeInTheDocument();

        // Waits for the promise resolution and updates the state
        await waitFor(() => {
            expect(screen.queryByText(/Loading tasks.../i)).not.toBeInTheDocument();
        });
      });

      test("should display error message when fetching tasks fails", async () => {
        (TaskService.fetchTasks as jest.Mock).mockResolvedValueOnce({ data: [], error: true, errorMessage: "Error fetching tasks" });
    
        render(<TaskList />);
    
        // Wait for the error message to be displayed
        await waitFor(() => screen.getByText(/Error fetching tasks/i));
    
        expect(screen.getByText(/Error fetching tasks/i)).toBeInTheDocument();
      });

      test("should display tasks when there are tasks", async () => {
        (TaskService.fetchTasks as jest.Mock).mockResolvedValueOnce({ data: mockTasks, error: false, errorMessage: "" });
    
        render(<TaskList />);
    
        // Wait for tasks to load
        await waitFor(() => screen.getByText(/Tasks List/i));
    
        // Check if task names are displayed
        expect(screen.getByText(/Test Task 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Test Task 2/i)).toBeInTheDocument();
      });

      test("should display tasks when there are tasks", async () => {
        // Moks the API response with the tasks 
        (TaskService.fetchTasks as jest.Mock).mockResolvedValueOnce({ data: mockTasks, error: null });
      
        render(<TaskList />);
    
        await waitFor(() => screen.getByText(/Tasks List/i));
      
        // Checks if task names are being shown correctly
        expect(screen.getByText(/Test Task 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Test Task 2/i)).toBeInTheDocument();
      
        // Checks if tasks status is correct (completar or incompleto) 
        expect(screen.getByText(/Test Task 1 \(Incomplete\)/i)).toBeInTheDocument();
        expect(screen.getByText(/Test Task 2 \(Completed\)/i)).toBeInTheDocument();
      
        // Checks if the style text-decoration: line-through is applied when task is concluded 
        const task1 = screen.getByText(/Test Task 1/i);
        const task2 = screen.getByText(/Test Task 2/i);
      
        // task1 should not have text decoration line-through 
        expect(task1).not.toHaveStyle("text-decoration: line-through");
      
        // task2 should have text decoration line-through 
        expect(task2).toHaveStyle("text-decoration: line-through");
      });
});

