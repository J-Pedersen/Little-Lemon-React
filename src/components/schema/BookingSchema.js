import * as Yup from 'yup';

const BookingSchema = Yup.object().shape({
    date: Yup.date().required('Date is required'),
    time: Yup.string().required('Time is required'),
    guests: Yup.number().required('# guests is required'),
    fullName: Yup.string().min(6, 'Name must be at least 6 letters').max(50, 'Name must be less than 50 letters').required('Name is required'),
    phone: Yup.string().required('Phone # is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    occasion: Yup.string(),
    children: Yup.boolean(),
    wheelchair: Yup.boolean(),
    allergies: Yup.boolean(),
});

export default BookingSchema;