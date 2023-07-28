import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('<App />', () => {
  it('should render correctly', () => {
    render(<App />);

    expect(screen.getByText(/Open Dictionary/i)).toBeInTheDocument();
  });

  it('should type in input, search and get definition of dog', async () => {
    render(<App />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });

    await userEvent.type(input, 'dog');
    userEvent.click(button);

    expect(
      await screen.findByText(
        /A mammal, Canis familiaris or Canis lupus familiaris./i,
      ),
    ).toBeInTheDocument();
  });
});
