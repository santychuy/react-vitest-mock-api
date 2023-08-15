import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ErrorBoundary } from 'react-error-boundary';

import ErrorSection from '../ErrorSection';

import FormDictionary from '.';

describe('<FormDictionary />', () => {
  it('should render correctly', () => {
    render(
      <ErrorBoundary fallback={<ErrorSection />}>
        <FormDictionary />
      </ErrorBoundary>,
    );

    expect(screen.getByText(/Search/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });

  it('should type in input, search and get definition of dog', async () => {
    render(
      <ErrorBoundary fallback={<ErrorSection />}>
        <FormDictionary />
      </ErrorBoundary>,
    );

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
    render(
      <ErrorBoundary fallback={<ErrorSection />}>
        <FormDictionary />
      </ErrorBoundary>,
    );

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });

    await userEvent.type(input, 'fdsakfjk');
    userEvent.click(button);

    await waitFor(async () => {
      expect(
        await screen.findByText(/Something went wrong/i),
      ).toBeInTheDocument();
    });
  });

  it('should be disabled if input is empty', () => {
    render(
      <ErrorBoundary fallback={<ErrorSection />}>
        <FormDictionary />
      </ErrorBoundary>,
    );

    const button = screen.getByRole('button', { name: /search/i });

    expect(button).toBeDisabled();
  });

  it('should be disabled if input is invalid after entering numbers', async () => {
    render(
      <ErrorBoundary fallback={<ErrorSection />}>
        <FormDictionary />
      </ErrorBoundary>,
    );

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });

    await userEvent.type(input, '123');

    await waitFor(() => {
      expect(button).toBeDisabled();
    });
  });

  it('should be disabled if input is invalid after entering special characters', async () => {
    render(
      <ErrorBoundary fallback={<ErrorSection />}>
        <FormDictionary />
      </ErrorBoundary>,
    );

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });

    await userEvent.type(input, '!!!');

    await waitFor(() => {
      expect(button).toBeDisabled();
    });
  });

  it('should be disabled if input is invalid after entering spaces', async () => {
    render(
      <ErrorBoundary fallback={<ErrorSection />}>
        <FormDictionary />
      </ErrorBoundary>,
    );

    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button', { name: /search/i });

    await userEvent.type(input, '   ');

    await waitFor(() => {
      expect(button).toBeDisabled();
    });
  });
});
