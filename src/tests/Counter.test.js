// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const welcomeMessage = screen.getByText(/Counter/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCount = screen.getByTestId("count");
  expect(initialCount).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementBttn = screen.getByText("+");
  const countShown = screen.getByTestId("count");

  fireEvent.click(incrementBttn);
  expect(countShown).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const decrementBttn = screen.getByText("-");
  const countShown = screen.getByTestId("count");

  fireEvent.click(decrementBttn);
  expect(countShown).toHaveTextContent("-1");
});
