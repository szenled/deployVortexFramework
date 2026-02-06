// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders deployVortex title', () => {
    render(<App />);
    const titleElement = screen.getByText(/deployVortex/i);
    expect(titleElement).toBeInTheDocument();
});
