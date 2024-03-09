import React, { useState } from 'react';
import SelectDatePicker from './SelectDatePicker';
import TimeOptions from './TimeOptions';
import Allergies from '../assets/allergies.png';
import Wheelchair from '../assets/wheelchair.png';
import Children from '../assets/children.png';
import Calendar from '../assets/calendar.png';
import Clock from '../assets/clock.png';
import Group from '../assets/group.png';

function BookingForm() {
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

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const requiredFields = ['date', 'time', 'guests', 'firstName', 'lastName', 'contact'];

        // Check if all required fields are filled
        const isValid = requiredFields.every(field => formData[field]);

        console.log("Form validity:", isValid); // Log the validity of the form

        if (isValid) {
            console.log("Form submitted successfully:", formData);
            // Add logic to navigate to confirmation page or perform further actions
        } else {
            console.log("Please fill in all required fields.");
            // Optionally, you can display an error message to the user or highlight the missing fields
        }
    };

    return (
        <>
            <form className="reservation-form" onSubmit={handleSubmit}>
                <h1>RESERVE A TABLE</h1>
                <div className='field-wrapper'>
                    <fieldset className="column-reserve-info">
                        <legend>RESERVATION INFO</legend>
                        <div className="field-col">
                            <label htmlFor="date">
                                <span className="required">*&nbsp;</span>
                                Date
                            </label>
                            <div className='input-group'>
                                <img
                                    src={Calendar}
                                    alt="Calendar"
                                    className="calendar-icon icon"
                                />
                                <SelectDatePicker onChange={handleChange} />
                            </div>
                        </div>
                        <div className="field-col">
                            <label htmlFor="time">
                                <span className="required">*&nbsp;</span>
                                Time
                            </label>
                            <div className='input-group'>
                                <img
                                    src={Clock}
                                    alt="Clock"
                                    className="clock-icon icon"
                                />
                                <select id="time" name="time" value={formData.time} onChange={handleChange} required>
                                    <option value="">Select Time</option>
                                    <TimeOptions />
                                </select>
                            </div>
                        </div>
                        <div className="field-col">
                            <label htmlFor="guests">
                                <span className="required">*&nbsp;</span>
                                Number of Guests
                            </label>
                            <div className='input-group'>
                                <img
                                    src={Group}
                                    alt="Group"
                                    className="group-icon icon"
                                />
                                <select id="guests" name="guests" value={formData.guests} onChange={handleChange} required >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="column-contact-info">
                        <legend>CONTACT INFO</legend>
                        <div className="field-col">
                            <label htmlFor="firstName">
                                <span className="required">*&nbsp;</span>
                                First Name
                            </label>
                            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} minLength="2" maxLength="30" required />
                        </div>
                        <div className="field-col">
                            <label htmlFor="lastName">
                                <span className="required">*&nbsp;</span>
                                Last Name
                            </label>
                            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} minLength="2" maxLength="30" required />
                        </div>
                        <div className="field-col">
                            <label htmlFor="contact">
                                <span className="required">*&nbsp;</span>
                                Phone # or Email Address
                            </label>
                            <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} placeholder="Phone # or Email" maxLength="30" required />
                        </div>
                    </fieldset>

                    <fieldset className="column-special-considerations">
                        <legend>SPECIAL CONSIDERATIONS</legend>
                        <div className="field-col">
                            <label htmlFor="occasion">
                                Occasion
                            </label>
                            <select id="occasion" name="occasion" className='occasion' value={formData.occasion} onChange={handleChange}>
                                <option value="">🥂 Occasion</option>
                                <option value="birthday">🎂 Birthday</option>
                                <option value="engagement">💍 Engagement</option>
                                <option value="wedding">💒 Wedding</option>
                                <option value="anniversary">💝 Anniversary</option>
                                <option value="babyShower">🍼 Baby Shower</option>
                                <option value="graduation">🎓 Graduation</option>
                                <option value="bachelor">🍻 Bachelor</option>
                                <option value="bachelorette">🎉 Bachelorette</option>
                                <option value="mitzvah">✡️ Mitzvah</option>
                            </select>
                        </div>
                        <div className='sc-boxes'>
                            <div className="field-row">
                                <img
                                    src={Children}
                                    alt="Children"
                                    className="children-icon icon"
                                />
                                <label htmlFor="children">
                                    Highchair
                                </label>
                                <div className='box'>
                                    <input type="checkbox" name="children" className="box-inner" checked={formData.children} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="field-row">
                                <img
                                    src={Wheelchair}
                                    alt="Wheelchair"
                                    className="wheelchair-icon icon"
                                />
                                <label htmlFor="wheelchair">
                                    Wheelchair
                                </label>
                                <div className='box'>
                                    <input type="checkbox" name="wheelchair" className="box-inner" checked={formData.wheelchair} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="field-row">
                                <img
                                    src={Allergies}
                                    alt="Allergies"
                                    className="allergies-icon icon"
                                />
                                <label htmlFor="allergies">
                                    Food Allergies
                                </label>
                                <div className='box'>
                                    <input type="checkbox" name="allergies" className="box-inner" checked={formData.allergy} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </form>
        </>
    );
}

export default BookingForm;