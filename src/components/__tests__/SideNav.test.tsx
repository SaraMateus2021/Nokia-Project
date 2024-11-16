import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';
import SideNav from "../SideNav";

describe('SideNAv component', ()=>{
    
    test('renders Home link and Task link with correct text and icon', ()=>{
        render(
            <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
              <SideNav />
            </BrowserRouter>
          );

          //Checks if Home link is on the screen with the correct text 
        const homeLink = screen.getByText('Home');
        expect(homeLink).toBeInTheDocument();

        // Checks if Home icon is  present 
        const homeIcon = screen.getByTestId('home-icon');
        expect(homeIcon).toBeInTheDocument();

        //Checks if Tasks link is on the screen with the correct text 
        const tasksLink = screen.getByText('Tasks');
        expect(tasksLink).toBeInTheDocument();

          // Checks if Task icon is  present
        const tasksIcon = screen.getByTestId('task-icon');
        expect(tasksIcon).toBeInTheDocument();
    })

    test('links navigate to correct routes', () => {
        render(
          <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <SideNav />
          </BrowserRouter>
        );
    
        // Checks if Home link points to route "/"
        const homeLink = screen.getByText('Home');
        expect(homeLink.closest('a')).toHaveAttribute('href', '/');
    
        // Checks if Tasks link points to route  "/tasks"
        const tasksLink = screen.getByText('Tasks');
        expect(tasksLink.closest('a')).toHaveAttribute('href', '/tasks');
      });

});