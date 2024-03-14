import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Booking from '../pages/Booking';

describe('Booking Form', () => {
    jest.setTimeout(100000);
    test('Validates form fields correctly', async () => {
        render(<Booking />);

        const fullNameField = screen.getByTestId('fullname-field');
        const phoneField = screen.getByTestId('phone-field');
        const emailField = screen.getByTestId('email-field');

        fireEvent.change(fullNameField, { target: { value: '' } });
        fireEvent.change(phoneField, { target: { value: '123' } });
        fireEvent.change(emailField, { target: { value: 'invalidemail' } });

        fireEvent.click(screen.getByText('CONTINUE'));

        await waitFor(() => {
            expect(screen.getByText('Name is required')).toBeInTheDocument();
        }, { timeout: 20000 });
        await waitFor(() => {
            expect(screen.getByText('Phone must be a valid phone number')).toBeInTheDocument();
        }, { timeout: 20000 });
        await waitFor(() => {
            expect(screen.getByText('Email must be a valid email')).toBeInTheDocument();
        }, { timeout: 20000 });

        fireEvent.change(fullNameField, { target: { value: 'John Doe' } });
        fireEvent.change(phoneField, { target: { value: '(123) 456-7890' } });
        fireEvent.change(emailField, { target: { value: 'john@example.com' } });

        fireEvent.click(screen.getByText('CONTINUE'));

        await waitFor(() => {
            expect(screen.getByText('Name is required')).toBeInTheDocument();
        }, { timeout: 5000 });
        await waitFor(() => {
            expect(screen.queryByText('Phone must be a valid phone number')).toBeNull();
        }, { timeout: 20000 });
        await waitFor(() => {
            expect(screen.queryByText('Email must be a valid email')).toBeNull();
        }, { timeout: 20000 });
    });
});