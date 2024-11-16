import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import Home from '../Home';

describe('Home Component', () => {
   
    test('renders correctly when navigating to "/"', () => {
      render(
        <MemoryRouter initialEntries={['/']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MemoryRouter>
      );
  
      // Checks if initial text is present
        const paragraph = screen.getByText(/Welcome to my/i);
        const strongText = screen.getByText(/Task List/i);
        expect(paragraph).toBeInTheDocument();
        expect(strongText).toBeInTheDocument();
    });
});