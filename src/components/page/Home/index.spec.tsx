import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Home from '.';

describe('<Home />', () => {
  it('should render correctly', () => {
    render(<Home />);

    expect(screen.getByText(/Open Dictionary/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
  });
});
