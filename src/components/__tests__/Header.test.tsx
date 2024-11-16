import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Header from '../Header';

describe('SideNAv component', ()=>{
    test('renders header with title',()=>{
        render(<Header />);
        expect(screen.getByText('New App')).toBeInTheDocument();
    })

});