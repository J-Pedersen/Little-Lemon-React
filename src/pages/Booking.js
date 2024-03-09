import React, { useState } from 'react';
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
import '../components/styles/normalize.css';
import '../components/styles/booking.css';

function Booking() {
    const [continueImage, setContinueImage] = useState(ContinueImage);

    return (
        <>
            <section className="booking-section">
                <div className="accent-bar-top" />
                <Formik
                    initialValues={{
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
                    }}
                    validationSchema={BookingSchema} // Using the imported schema
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            console.log('Form submitted:', values);
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting, errors, touched, resetForm }) => (
                        <Form className="reservation-form">
                            <h1>RESERVE A TABLE</h1>
                            <div className='field-wrapper'>
                                <fieldset className="column-reserve-info">
                                    <legend>RESERVATION INFO</legend>
                                    <div className={`field-col`}>
                                        <label htmlFor="date">
                                            <span className="required">*&nbsp;</span>
                                            Date <ErrorMessage name="date" component="div" className="error-message" />
                                        </label>
                                        <div className='input-group'>
                                            <img
                                                src={Calendar}
                                                alt="Calendar"
                                                className="calendar-icon icon"
                                            />
                                            <Field as="select" name="date" id="date">
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
                                            <span className="required">*&nbsp;</span>
                                            Time <ErrorMessage name="time" component="div" className="error-message" />
                                        </label>
                                        <div className='input-group'>
                                            <img
                                                src={Clock}
                                                alt="Clock"
                                                className="clock-icon icon"
                                            />
                                            <Field as="select" name="time" className="time-select" required>
                                                <option value="">Select Time</option>
                                                <option value="6am">6:00 AM</option>
                                                <option value="630am">6:30 AM</option>
                                                <option value="7am">7:00 AM</option>
                                                <option value="730am">7:30 AM</option>
                                                <option value="8am">8:00 AM</option>
                                                <option value="830am">8:30 AM</option>
                                                <option value="9am">9:00 AM</option>
                                                <option value="930am">9:30 AM</option>
                                                <option value="10am">10:00 AM</option>
                                                <option value="1030am">10:30 AM</option>
                                                <option value="11am">11:00 AM</option>
                                                <option value="1130am">11:30 AM</option>
                                                <option value="12pm">12:00 PM</option>
                                                <option value="1230pm">12:30 PM</option>
                                                <option value="1pm">1:00 PM</option>
                                                <option value="130pm">1:30 PM</option>
                                                <option value="2pm">2:00 PM</option>
                                                <option value="230pm">2:30 PM</option>
                                                <option value="3pm">3:00 PM</option>
                                                <option value="330pm">3:30 PM</option>
                                                <option value="4pm">4:00 PM</option>
                                                <option value="430pm">4:30 PM</option>
                                                <option value="5pm">5:00 PM</option>
                                                <option value="530pm">5:30 PM</option>
                                                <option value="6pm">6:00 PM</option>
                                                <option value="630pm">6:30 PM</option>
                                                <option value="7pm">7:00 PM</option>
                                                <option value="730pm">7:30 PM</option>
                                                <option value="8pm">8:00 PM</option>
                                                <option value="830pm">8:30 PM</option>
                                                <option value="9pm">9:00 PM</option>
                                            </Field>
                                        </div>
                                    </div>
                                    <div className={`field-col`}>
                                        <label htmlFor="guests">
                                            <span className="required">*&nbsp;</span>
                                            Guests <ErrorMessage name="guests" component="div" className="error-message" />
                                        </label>
                                        <div className='input-group'>
                                            <img
                                                src={Group}
                                                alt="Group"
                                                className="group-icon icon"
                                            />
                                            <Field as="select" name="guests" className="guests-select" required>
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

                                {/* Contact info fields */}
                                <fieldset className="column-contact-info">
                                    <legend>CONTACT INFO</legend>
                                    <div className={`field-col`}>
                                        <label htmlFor="fullName">
                                            <span className="required">*&nbsp;</span>
                                            Name <ErrorMessage name="fullName" component="div" className="error-message" />
                                        </label>
                                        <Field type="text" id="fullName" name="fullName" className="full-name-input" placeholder="Jane Doe" maxLength="50" required />
                                    </div>
                                    <div className={`field-col ${errors.phone && touched.phone ? 'error' : ''}`}>
                                        <label htmlFor="phone">
                                            <span className="required">*&nbsp;</span>
                                            Phone <ErrorMessage name="phone" component="div" className="error-message" />
                                        </label>
                                        <Field type="tel" id="phone" name="phone" className="phone-input" placeholder="(555)555-5555" maxLength="13" required />
                                    </div>
                                    <div className={`field-col ${errors.email && touched.email ? 'error' : ''}`}>
                                        <label htmlFor="email">
                                            <span className="required">*&nbsp;</span>
                                            Email <ErrorMessage name="email" component="div" className="error-message" />
                                        </label>
                                        <Field type="email" id="email" name="email" className="email-input" placeholder="janedoe@fakemail.com" maxLength="30" required />
                                    </div>
                                </fieldset>

                                {/* Special considerations fields */}
                                <fieldset className="column-special-considerations">
                                    <legend>SPECIAL CONSIDERATIONS</legend>
                                    <div className="field-col sc-wrapper">
                                        <label htmlFor="occasion">
                                            Occasion
                                        </label>
                                        <Field as="select" id="occasion" name="occasion" className='occasion'>
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
                                        </Field>
                                        <ErrorMessage name="occasion" component="div" className="error-message" />
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
                                            <Field type="checkbox" name="children" className="box-inner" />
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
                                            <Field type="checkbox" name="wheelchair" className="box-inner" />
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
                                            <Field type="checkbox" name="allergies" className="box-inner" />
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            {/* Submit button */}
                            <div className="centered-link">
                                <button
                                    type="button"
                                    className="clear-btn"
                                    onClick={() => resetForm()}
                                >
                                    CLEAR
                                </button>
                                <button
                                    type="submit"
                                    className="booking-btn"
                                    disabled={isSubmitting || Object.keys(errors).length !== 0}
                                    onMouseEnter={() => setContinueImage(ContinueHoverImage)}
                                    onMouseLeave={() => setContinueImage(ContinueImage)}
                                >
                                    CONTINUE
                                    <img src={continueImage} alt="continue icon" />
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className="accent-bar-bottom" />
            </section>
        </>
    );
}

export default Booking;