import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import ContinueHoverImage from "../assets/continue-hover.png";
import ContinueImage from "../assets/continue.png";
import '../components/styles/normalize.css';
import '../components/styles/booking.css';

function Booking() {
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: '',
        firstName: '',
        lastName: '',
        contact: '',
        occasion: '',
        children: false,
        wheelchair: false,
        foodAllergy: false,
    });

    const [continueImage, setContinueImage] = React.useState(ContinueImage);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <>
            <section className="booking-section">
                <div className="accent-bar-top" />
                <BookingForm formData={formData} handleChange={handleChange} />
                <div className="centered-link">
                    <Link to="/confirmation" className= "booking-btn"
                        onMouseEnter={() => setContinueImage(ContinueHoverImage)}
                        onMouseLeave={() => setContinueImage(ContinueImage)}
                    >
                        CONTINUE
                        <img src={continueImage} alt="continue icon"></img>
                    </Link>
                </div>
                <div className="accent-bar-bottom" />
            </section>
        </>
    );
}

export default Booking;