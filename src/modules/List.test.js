import { render, screen } from '@testing-library/react'
import App from '../App'
import React from 'react';

describe('List test', () => {
    test('renders modal', () => {
        render(<App />);
        const modal = screen.getAllByRole('contact');
        expect(modal).toBe();
    });
});