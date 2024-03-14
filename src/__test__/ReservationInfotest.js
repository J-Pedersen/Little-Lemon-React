import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Booking from '../pages/Booking';

describe('Booking Form', () => {
    jest.setTimeout(20000);
    test('Validates form fields correctly', async () => {
        render(<Booking />);
        // Find form elements
        const dateField = screen.getByTestId('date-field');
        const timeField = screen.getByTestId('time-field');
        const guestsField = screen.getByTestId('guests-field');

        // Fill in invalid data
        fireEvent.change(dateField, { target: { value: '' } });
        fireEvent.change(timeField, { target: { value: '' } });

        // Submit the form
        fireEvent.click(screen.getByText('CONTINUE'));

        // Ensure validation errors are displayed
        await waitFor(() => {
            expect(screen.getByText('Date is required')).toBeInTheDocument();
        });
        await waitFor(() => {
            expect(screen.getByText('Time is required')).toBeInTheDocument();
        });
        await waitFor(() => {
            expect(screen.getByText('Guests is required')).toBeInTheDocument();
        });

        // Fill in valid data
        fireEvent.change(dateField, { target: { value: '2024-03-15' } });
        fireEvent.change(timeField, { target: { value: '12:00 PM' } });
        fireEvent.change(guestsField, { target: { value: '2' } });

        // Submit the form
        fireEvent.click(screen.getByText('CONTINUE'));

        // Ensure form submitted successfully
        await waitFor(() => {
            expect(screen.queryByText('Date is required')).toBeNull();
        });
        await waitFor(() => {
            expect(screen.queryByText('Time is required')).toBeNull();
        });
        await waitFor(() => {
            expect(screen.queryByText('Guests is required')).toBeNull();
        });
    });
});