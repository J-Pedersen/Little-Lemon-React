import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Booking from './Booking';

describe('Booking Form', () => {
    test('Validates form fields correctly', async () => {
        const { getByLabelText, getByText, queryByText } = render(<Booking />);
        const dateField = getByLabelText('Date');
        const timeField = getByLabelText('Time');
        const guestsField = getByLabelText('Guests');
        const fullNameField = getByLabelText('Name');
        const phoneField = getByLabelText('Phone');
        const emailField = getByLabelText('Email');
        const occasionField = getByLabelText('Occasion');
        const childrenCheckbox = getByLabelText('Highchair');
        const wheelchairCheckbox = getByLabelText('Wheelchair');
        const allergiesCheckbox = getByLabelText('Food Allergies');

        fireEvent.change(dateField, { target: { value: '' } });
        fireEvent.change(timeField, { target: { value: '' } });
        fireEvent.change(guestsField, { target: { value: '' } });
        fireEvent.change(fullNameField, { target: { value: '' } });
        fireEvent.change(phoneField, { target: { value: '123' } });
        fireEvent.change(emailField, { target: { value: 'invalidemail' } });

        fireEvent.click(getByText('CONTINUE'));

        expect(getByText('Date is required')).toBeInTheDocument();
        expect(getByText('Time is required')).toBeInTheDocument();
        expect(getByText('Guests is required')).toBeInTheDocument();
        expect(getByText('Name is required')).toBeInTheDocument();
        expect(getByText('Phone must be a valid phone number')).toBeInTheDocument();
        expect(getByText('Email must be a valid email')).toBeInTheDocument();

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

        fireEvent.click(getByText('CONTINUE'));

        await waitFor(() => {
            expect(queryByText('Date is required')).toBeNull();
            expect(queryByText('Time is required')).toBeNull();
            expect(queryByText('Guests is required')).toBeNull();
            expect(queryByText('Name is required')).toBeNull();
            expect(queryByText('Phone must be a valid phone number')).toBeNull();
            expect(queryByText('Email must be a valid email')).toBeNull();
        });
    });
});