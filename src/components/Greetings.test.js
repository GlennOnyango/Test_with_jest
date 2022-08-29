import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greetings from '../Greetings';



describe("Greetings Tests",()=>{

    test('renders Hello world from greetings', () => {
        render(<Greetings />);
        const linkElement = screen.getByText("Hello World");
        expect(linkElement).toBeInTheDocument();
      });

      test('normal', () => {
        render(<Greetings />);
        const linkElement = screen.getByText("The 5th");
        expect(linkElement).toBeInTheDocument();
      });  
      test('btn click',()=>{
        render(<Greetings />);
        
        const btnElement = screen.getByRole("button");
        userEvent.click(btnElement);

        const linkElement = screen.getByText("changed");
        expect(linkElement).toBeInTheDocument();
      });
      test('btn click check closed',()=>{
        render(<Greetings />);
        
        const btnElement = screen.getByRole("button");
        userEvent.click(btnElement);

        const linkElement = screen.queryByText("The 5th");
        expect(linkElement).toBeNull();
      });
});