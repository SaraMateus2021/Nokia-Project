import { render, screen, fireEvent } from "@testing-library/react";
import Pages from "../Pages";
import "@testing-library/jest-dom";

describe("Pages Component", () => {
    test("should disable the 'Previous' button when on the first page", () => {
        render(
          <Pages
            currentPage={1}
            totalPages={5}
            handlePreviousPage={jest.fn()}
            handleNextPage={jest.fn()}
          />
        );
    
        const previousButton = screen.getByText("Previous");
        expect(previousButton).toBeDisabled(); // checks if botton Previous is disabled
    })

    test("should disable the 'Next' button when on the last page", () => {
        render(
          <Pages
            currentPage={5}
            totalPages={5}
            handlePreviousPage={jest.fn()}
            handleNextPage={jest.fn()}
          />
        );
    
        const nextButton = screen.getByText("Next");
        expect(nextButton).toBeDisabled(); // checks if botton Next is disabled
      });

      test("should enable both buttons when not on the first or last page", () => {
        render(
          <Pages
            currentPage={3}
            totalPages={5}
            handlePreviousPage={jest.fn()}
            handleNextPage={jest.fn()}
          />
        );
    
        const previousButton = screen.getByText("Previous");
        const nextButton = screen.getByText("Next");
    
        expect(previousButton).toBeEnabled(); 
        expect(nextButton).toBeEnabled(); 
      });

      test("should display the correct page text", () => {
        render(
          <Pages
            currentPage={3}
            totalPages={5}
            handlePreviousPage={jest.fn()}
            handleNextPage={jest.fn()}
          />
        );
    
        const pageText = screen.getByText("Page 3 of 5");
        expect(pageText).toBeInTheDocument(); //Checks if text is correct
      });

      test("should call handlePreviousPage when 'Previous' is clicked", () => {
        const mockHandlePreviousPage = jest.fn();
    
        render(
          <Pages
            currentPage={3}
            totalPages={5}
            handlePreviousPage={mockHandlePreviousPage}
            handleNextPage={jest.fn()}
          />
        );
    
        const previousButton = screen.getByText("Previous");
        fireEvent.click(previousButton); // Stimulates button click
    
        expect(mockHandlePreviousPage).toHaveBeenCalled(); // Checks if function was called
      });
    
      test("should call handleNextPage when 'Next' is clicked", () => {
        const mockHandleNextPage = jest.fn();
    
        render(
          <Pages
            currentPage={3}
            totalPages={5}
            handlePreviousPage={jest.fn()}
            handleNextPage={mockHandleNextPage}
          />
        );
    
        const nextButton = screen.getByText("Next");
        fireEvent.click(nextButton); // Stimulates button click
    
        expect(mockHandleNextPage).toHaveBeenCalled(); // Checks if function was called
      });
    
});