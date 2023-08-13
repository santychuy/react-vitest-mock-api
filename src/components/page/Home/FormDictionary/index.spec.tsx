import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
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

    await waitFor(async () => {
      expect(
        await screen.findByText(
          /A mammal, Canis familiaris or Canis lupus familiaris./i,
        ),
      ).toBeInTheDocument();
    });
  });

  it('should type in input a random word, search and get error', async () => {
    render(<FormDictionary />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });

    await userEvent.type(input, 'fdsakfjk');
    userEvent.click(button);

    await waitFor(async () => {
      expect(await screen.findByText(/Word not found/i)).toBeInTheDocument();
    });
  });

  it('should be disabled if input is empty', () => {
    render(<FormDictionary />);

    const button = screen.getByRole('button', { name: /search/i });

    expect(button).toBeDisabled();
  });

  it('should be disabled if input is invalid after entering numbers', async () => {
    render(<FormDictionary />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });

    await userEvent.type(input, '123');

    await waitFor(() => {
      expect(button).toBeDisabled();
    });
  });

  it('should be disabled if input is invalid after entering special characters', async () => {
    render(<FormDictionary />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });

    await userEvent.type(input, '!!!');

    await waitFor(() => {
      expect(button).toBeDisabled();
    });
  });

  it('should be disabled if input is invalid after entering spaces', async () => {
    render(<FormDictionary />);

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });

    await userEvent.type(input, '   ');

    await waitFor(() => {
      expect(button).toBeDisabled();
    });
  });
});
