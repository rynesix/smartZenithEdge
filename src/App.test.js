// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders smartZenith title', () => {
    render(<App />);
    const titleElement = screen.getByText(/smartZenith/i);
    expect(titleElement).toBeInTheDocument();
});
