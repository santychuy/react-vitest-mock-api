import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FormDictionary from '.';

describe('<FormDictionary />', () => {
  it('should render correctly', () => {
    render(<FormDictionary />);

    expect(screen.getByText(/Search/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('should type in input, search and get definition of dog', async () => {
    render(<FormDictionary />);

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

  it('should type in input a random word, search and get error', async () => {
    render(<FormDictionary />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });

    await userEvent.type(input, 'fdsakfjk');
    userEvent.click(button);

    expect(await screen.findByText(/Word not found/i)).toBeInTheDocument();
  });

  it('should be disabled if input is empty', () => {
    render(<FormDictionary />);

    const button = screen.getByRole('button', { name: /search/i });

    expect(button).toBeDisabled();
  });

  it('should be disabled if input is invalid after entering numbers', () => {
    render(<FormDictionary />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });

    userEvent.type(input, '123');
    expect(button).toBeDisabled();
  });

  it('should be disabled if input is invalid after entering special characters', () => {
    render(<FormDictionary />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });

    userEvent.type(input, '!!!');
    expect(button).toBeDisabled();
  });

  it('should be disabled if input is invalid after entering spaces', () => {
    render(<FormDictionary />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });

    userEvent.type(input, '   ');
    expect(button).toBeDisabled();
  });
});
