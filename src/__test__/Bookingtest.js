import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Booking from '../pages/Booking';

describe('Booking Form', () => {
    test('Validates form fields correctly', async () => {
        render(<Booking />);
        // Find form elements
        const dateField = screen.getByLabelText('Date');
        const timeField = screen.getByLabelText('Time');
        const guestsField = screen.getByLabelText('Guests');
        const fullNameField = screen.getByLabelText('Name');
        const phoneField = screen.getByLabelText('Phone');
        const emailField = screen.getByLabelText('Email');
        const occasionField = screen.getByLabelText('Occasion');
        const childrenCheckbox = screen.getByLabelText('Highchair');
        const wheelchairCheckbox = screen.getByLabelText('Wheelchair');
        const allergiesCheckbox = screen.getByLabelText('Food Allergies');

        // Fill in invalid data
        fireEvent.change(dateField, { target: { value: '' } });
        fireEvent.change(timeField, { target: { value: '' } });
        fireEvent.change(fullNameField, { target: { value: '' } });
        fireEvent.change(phoneField, { target: { value: '123' } });
        fireEvent.change(emailField, { target: { value: 'invalidemail' } });

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
        await waitFor(() => {
            expect(screen.getByText('Name is required')).toBeInTheDocument();
        });
        await waitFor(() => {
            expect(screen.getByText('Phone must be a valid phone number')).toBeInTheDocument();
        });
        await waitFor(() => {
            expect(screen.getByText('Email must be a valid email')).toBeInTheDocument();
        });

        // Fill in valid data
        fireEvent.change(dateField, { target: { value: '2024-03-15' } });
        fireEvent.change(timeField, { target: { value: '12:00 PM' } });
        fireEvent.change(guestsField, { target: { value: '2' } });
        fireEvent.change(fullNameField, { target: { value: 'John Doe' } });
        fireEvent.change(phoneField, { target: { value: '(123) 456-7890' } });
        fireEvent.change(emailField, { target: { value: 'john@example.com' } });
        fireEvent.change(occasionField, { target: { value: 'Birthday' } });
        fireEvent.click(childrenCheckbox);
        fireEvent.click(wheelchairCheckbox);
        fireEvent.click(allergiesCheckbox);

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
        await waitFor(() => {
            expect(screen.queryByText('Name is required')).toBeNull();
        });
        await waitFor(() => {
            expect(screen.queryByText('Phone must be a valid phone number')).toBeNull();
        });
        await waitFor(() => {
            expect(screen.queryByText('Email must be a valid email')).toBeNull();
        });
    });
});