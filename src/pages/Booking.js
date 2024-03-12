import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Allergies from '../assets/allergies.png';
import Wheelchair from '../assets/wheelchair.png';
import Children from '../assets/children.png';
import Calendar from '../assets/calendar.png';
import Clock from '../assets/clock.png';
import Group from '../assets/group.png';
import ContinueHoverImage from "../assets/continue-hover.png";
import ContinueImage from "../assets/continue.png";
import BookingSchema from '../components/schema/BookingSchema';
import { useNavigate } from 'react-router-dom';
import '../components/styles/normalize.css';
import '../components/styles/booking.css';

function Booking() {
    const [continueImage, setContinueImage] = useState(ContinueImage);
    const [step, setStep] = useState(1);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: '',
        fullName: '',
        phone: '',
        email: '',
        occasion: '',
        children: false,
        wheelchair: false,
        allergies: false,
    });

    useEffect((formikProps) => {
        if (step === 1) {
            validateForm(formikProps);
        }
    }, [step]);

    const validateForm = (formikProps) => {
        if (formikProps) {
            formikProps.validateForm().then((errors) => {
                if (Object.keys(errors).length === 0) {
                    formikProps.setTouched({});
                }
            });
        }
    };

    const handleSubmit = (values) => {
        setFormData(values);
        setStep(2);
    };

    const handleEdit = () => {
        setStep(1);
    };

    const handleConfirm = () => {
        console.log('Form submitted:', formData);
        navigate('/thankyou', { state: formData });
    };

    const formatPhoneNumber = (value) => {
        const cleaned = value.replace(/\D/g, '');

        if (cleaned.length < 4) {
          return cleaned;
        } else if (cleaned.length < 7) {
          return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
        } else {
          return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
        }
      };

    return (
        <>
            <section className="booking-section">
            <div className="accent-bar-top" />
                {/* Form Inputs Step 1 */}
                {step === 1 && (
                    <Formik
                    initialValues={{
                        ...formData,
                        phone: ''
                    }}
                        enableReinitialize
                        validationSchema={BookingSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, errors, touched, resetForm, isValid, setFieldValue }) => (
                        <Form className="reservation-form">
                            <h1>RESERVE A TABLE</h1>
                            <div className='field-wrapper'>
                                <fieldset className="column-reserve-info" aria-labelledby="reserve-info-heading">
                                    <legend id="reserve-info-heading">RESERVATION INFO</legend>
                                    <div className={`field-col`}>
                                        <label htmlFor="date">
                                            <span className="required">
                                                *&nbsp;
                                            </span>
                                            Date
                                            <ErrorMessage
                                                name="date"
                                                component="div"
                                                className="error-message"
                                            />
                                        </label>
                                        <div className='input-group'>
                                            <img
                                                src={Calendar}
                                                alt="Calendar"
                                                className="calendar-icon icon"
                                            />
                                            <Field
                                                as="select"
                                                name="date"
                                                id="date"
                                                required
                                                aria-required="true"
                                                aria-label="Select Date"
                                                title="Date"
                                            >
                                                <option value="">Select Date</option>
                                                {Array.from({ length: 9 }, (_, index) => {
                                                    const date = new Date();
                                                    date.setDate(date.getDate() + index);
                                                    return (
                                                        <option key={date.toISOString()} value={date.toISOString().split('T')[0]}>
                                                            {date.toDateString()}
                                                        </option>
                                                    );
                                                })}
                                            </Field>
                                        </div>
                                    </div>
                                    <div className={`field-col`}>
                                        <label htmlFor="time">
                                            <span className="required">
                                                *&nbsp;
                                            </span>
                                            Time
                                            <ErrorMessage
                                                name="time"
                                                component="div"
                                                className="error-message"
                                            />
                                        </label>
                                        <div className='input-group'>
                                            <img
                                                src={Clock}
                                                alt="Clock"
                                                className="clock-icon icon"
                                            />
                                            <Field
                                                as="select"
                                                name="time"
                                                className="time-select"
                                                required
                                                aria-required="true"
                                                aria-label="Select Time"
                                                title="Time"
                                            >
                                                <option value="">Select Time</option>
                                                <option value="6:00 AM">6:00 AM</option>
                                                <option value="6:30 AM">6:30 AM</option>
                                                <option value="7:00 AM">7:00 AM</option>
                                                <option value="7:30 AM">7:30 AM</option>
                                                <option value="8:00 AM">8:00 AM</option>
                                                <option value="8:30 AM">8:30 AM</option>
                                                <option value="9:00 AM">9:00 AM</option>
                                                <option value="9:30 AM">9:30 AM</option>
                                                <option value="10:00 AM">10:00 AM</option>
                                                <option value="10:30 AM">10:30 AM</option>
                                                <option value="11:00 AM">11:00 AM</option>
                                                <option value="11:30 AM">11:30 AM</option>
                                                <option value="12:00 PM">12:00 PM</option>
                                                <option value="12:30 PM">12:30 PM</option>
                                                <option value="1:00 PM">1:00 PM</option>
                                                <option value="1:30 PM">1:30 PM</option>
                                                <option value="2:00 PM">2:00 PM</option>
                                                <option value="2:30 PM">2:30 PM</option>
                                                <option value="3:00 PM">3:00 PM</option>
                                                <option value="3:30 PM">3:30 PM</option>
                                                <option value="4:00 PM">4:00 PM</option>
                                                <option value="4:30 PM">4:30 PM</option>
                                                <option value="5:00 PM">5:00 PM</option>
                                                <option value="5:30 PM">5:30 PM</option>
                                                <option value="6:00 PM">6:00 PM</option>
                                                <option value="6:30 PM">6:30 PM</option>
                                                <option value="7:00 PM">7:00 PM</option>
                                                <option value="7:30 PM">7:30 PM</option>
                                                <option value="8:00 PM">8:00 PM</option>
                                                <option value="8:30 PM">8:30 PM</option>
                                                <option value="9:00 PM">9:00 PM</option>
                                            </Field>
                                        </div>
                                    </div>
                                    <div className={`field-col`}>
                                        <label htmlFor="guests">
                                            <span className="required">
                                                *&nbsp;
                                            </span>
                                            Guests
                                            <ErrorMessage
                                                name="guests"
                                                component="div"
                                                className="error-message"
                                            />
                                        </label>
                                        <div className='input-group'>
                                            <img
                                                src={Group}
                                                alt="Group"
                                                className="group-icon icon"
                                            />
                                            <Field
                                                as="select"
                                                name="guests"
                                                className="guests-select"
                                                required
                                                aria-required="true"
                                                aria-label="Select Number of Guests"
                                                title="Guests"
                                            >
                                                <option value="">Select Guests</option>
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
                                            </Field>
                                        </div>
                                    </div>
                                </fieldset>

                                <fieldset className="column-contact-info" aria-labelledby="contact-info-heading">
                                    <legend id="contact-info-heading">CONTACT INFO</legend>
                                    <div className={`field-col`}>
                                        <label htmlFor="fullName">
                                            <span className="required">
                                                *&nbsp;
                                            </span>
                                            Name
                                            <ErrorMessage
                                                name="fullName"
                                                component="div"
                                                className="error-message"
                                            />
                                        </label>
                                        <Field
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            className="full-name-input"
                                            placeholder="Jane Doe"
                                            maxLength="50"
                                            required
                                            aria-required="true"
                                            aria-label="Full Name"
                                            title="Full Name"
                                        />
                                    </div>
                                    <div className={`field-col ${errors.phone && touched.phone ? 'error' : ''}`}>
                                        <label htmlFor="phone">
                                            <span className="required">
                                                *&nbsp;
                                            </span>
                                            Phone
                                            <ErrorMessage
                                                name="phone"
                                                component="div"
                                                className="error-message"
                                            />
                                        </label>
                                        <Field
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="phone-input"
                                            placeholder="(555)555-5555"
                                            maxLength="14"
                                            required
                                            aria-required="true"
                                            aria-label="Phone"
                                            title="Phone"
                                            onChange={(e) => {
                                                const formattedValue = formatPhoneNumber(e.target.value);
                                                setFieldValue('phone', formattedValue);
                                            }}
                                        />
                                    </div>
                                    <div className={`field-col ${errors.email && touched.email ? 'error' : ''}`}>
                                        <label htmlFor="email">
                                            <span className="required">
                                                *&nbsp;
                                            </span>
                                            Email
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="error-message"
                                            />
                                        </label>
                                        <Field
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="email-input"
                                            placeholder="janedoe@fakemail.com"
                                            aria-label="Email"
                                            maxLength="30"
                                            required
                                            aria-required="true"
                                            title="Email"
                                        />
                                    </div>
                                </fieldset>

                                <fieldset className="column-special-considerations" aria-labelledby="special-considerations-heading">
                                    <legend id="special-considerations-heading">SPECIAL CONSIDERATIONS</legend>
                                    <div className="field-col sc-wrapper">
                                        <label htmlFor="occasion">
                                            Occasion
                                        </label>
                                        <Field
                                            as="select"
                                            id="occasion"
                                            name="occasion"
                                            className='occasion'
                                            aria-label="Select Occasion"
                                            title="Occasion"
                                        >
                                            <option value="">🥂 Occasion</option>
                                            <option value="Birthday">🎂 Birthday</option>
                                            <option value="Engagement">💍 Engagement</option>
                                            <option value="Wedding">💒 Wedding</option>
                                            <option value="Anniversary">💝 Anniversary</option>
                                            <option value="Baby Shower">🍼 Baby Shower</option>
                                            <option value="Graduation">🎓 Graduation</option>
                                            <option value="Bachelor">🍻 Bachelor</option>
                                            <option value="Bachelorette">🎉 Bachelorette</option>
                                            <option value="Mitzvah">✡️ Mitzvah</option>
                                        </Field>
                                    </div>
                                    <div className='sc-boxes'>
                                        <div className="field-row">
                                            <img
                                                src={Children}
                                                alt="Children Icon"
                                                className="children-icon icon"
                                            />
                                            <label htmlFor="children">
                                                Highchair
                                            </label>
                                            <Field
                                                type="checkbox"
                                                name="children"
                                                className="box-inner"
                                                aria-label="Highchair"
                                                title="Highchair"
                                                onKeyPress={(e) => {
                                                    if (e.key === 'Enter') {
                                                        e.preventDefault();
                                                        e.target.click();
                                                    }
                                                }}
                                            />
                                        </div>
                                        <div className="field-row">
                                            <img
                                                src={Wheelchair}
                                                alt="Wheelchair Icon"
                                                className="wheelchair-icon icon"
                                            />
                                            <label htmlFor="wheelchair">
                                                Wheelchair
                                            </label>
                                            <Field
                                                type="checkbox"
                                                name="wheelchair"
                                                className="box-inner"
                                                aria-label="Wheelchair"
                                                title="Wheelchair"
                                                onKeyPress={(e) => {
                                                    if (e.key === 'Enter') {
                                                        e.preventDefault();
                                                        e.target.click();
                                                    }
                                                }}
                                            />
                                        </div>
                                        <div className="field-row">
                                            <img
                                                src={Allergies}
                                                alt="Allergies Icon"
                                                className="allergies-icon icon"
                                            />
                                            <label htmlFor="allergies">
                                                Food Allergies
                                            </label>
                                            <Field
                                                type="checkbox"
                                                name="allergies"
                                                className="box-inner"
                                                aria-label="Food Allergies"
                                                title="Food Allergies"
                                                onKeyPress={(e) => {
                                                    if (e.key === 'Enter') {
                                                        e.preventDefault();
                                                        e.target.click();
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            {/* Book Buttons */}
                            <div className="centered-btns" role="group" aria-label="Form buttons">
                                <button
                                    type="button"
                                    className="clear-btn"
                                    onClick={() => resetForm()}
                                    aria-label="Clear Form"
                                    title="CLEAR"
                                >
                                    CLEAR
                                </button>
                                <button
                                    type="submit"
                                    className="booking-btn"
                                    title="CONTINUE"
                                    onMouseEnter={() => setContinueImage(ContinueHoverImage)}
                                    onMouseLeave={() => setContinueImage(ContinueImage)}
                                    disabled={!isValid || isSubmitting || (Object.keys(touched).length === 0 && touched.constructor === Object)}
                                    aria-label="Continue"
                                >
                                    CONTINUE
                                    <img
                                        src={continueImage}
                                        alt="Continue Icon"
                                    />
                                </button>
                            </div>
                        </Form>
                    )}
                    </Formik>
                )}

                {/* Confirmation Step 2 */}
                {step === 2 && (
                    <div className='confirmation-wrapper' role="region" aria-labelledby="confirmation-heading">
                        <h2 className='confirmation-heading' id="confirmation-heading">Confirm Your Table Reservation Details</h2>
                        <div className='confirmation-group' role="group" aria-label="Reservation Details">
                            <div className='confirmation-column'>
                                <p>Date: {formData.date}</p>
                                <p>Time: {formData.time}</p>
                                <p>Guests: {formData.guests}</p>
                            </div>
                            <div className='confirmation-column'>
                                <p>Name: {formData.fullName}</p>
                                <p>Phone: {formData.phone}</p>
                                <p>Email: {formData.email}</p>
                            </div>
                            <div className='confirmation-column'>
                                <p>Occasion: {formData.occasion}</p>
                                <div className='chk-boxes'>
                                    <p>Children: {formData.children ? 'Yes' : 'No'}</p>
                                    <p>Wheelchair: {formData.wheelchair ? 'Yes' : 'No'}</p>
                                    <p>Allergies: {formData.allergies ? 'Yes' : 'No'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='confirmation-message'>
                            <p>If this all looks correct click SUBMIT.</p>
                            <p>If you require any changes to your table reservation click EDIT</p>
                        </div>
                        {/* Confirmation Buttons */}
                        <div className="centered-btns" role="group" aria-label="Confirmation Buttons">
                            <button
                                className='edit-btn'
                                onClick={handleEdit}
                                aria-label="Edit Reservation"
                                title="EDIT"
                            >
                                EDIT
                            </button>
                            <button
                                className='submit-btn'
                                onClick={handleConfirm}
                                aria-label="Confirm Reservation"
                                title="SUBMIT"
                            >
                                SUBMIT
                            </button>
                        </div>
                    </div>
                )}
                <div className="accent-bar-bottom" />
            </section>
        </>
    );
}

export default Booking;