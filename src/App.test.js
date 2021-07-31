import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('displays error when start time is 4', () => {
    const subject = render(<App />)
    const input = subject.getByLabelText('start-input')

    fireEvent.change(input, {target: {value: '4'}})

    expect(subject.getByText("Cannot start before 5" )).toBeInTheDocument()
  })

  it('does not show error when start time is 5', () => {
    const subject = render(<App />)
    const input = subject.getByLabelText('start-input')

    fireEvent.change(input, {target: {value: '5'}})

    expect(subject.queryByText("Cannot start before 5" )).toBeNull()
  })
});
