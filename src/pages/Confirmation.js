import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/normalize.css';
import '../components/styles/confirmation.css';
import BackHoverImage from "../assets/back-hover.png";
import BackImage from "../assets/back.png";
import SubmitHoverImage from "../assets/submit-hover.png";
import SubmitImage from "../assets/submit.png";

function Confirmation() {

    const [backImage, setBackImage] = React.useState(BackImage);
    const [submitImage, setSubmitImage] = React.useState(SubmitImage);

    return (
        <>
            <section className="confirmation-section">
                <div className="accent-bar-top" />
                <div className='confirm-data-wrapper'>
                    <h1>Reservation Details</h1>
                    <div className='confirmation-data'>
                        <div className='res-info'>
                            <p>Date: </p>
                            <p>Time: </p>
                            <p>Number of Guests: </p>
                        </div>
                        <div className='cnt-info'>
                            <p>First Name: </p>
                            <p>Last Name: </p>
                            <p>Contact: </p>
                        </div>
                        <div className='special-info'>
                            <p>Occasion: </p>
                            <p>Highchair: </p>
                            <p>Wheelchair: </p>
                            <p>Food Allergies: </p>
                        </div>
                    </div>
                    <div className='conf-btns'>
                        <Link to="/booking" className="back-btn"
                            onMouseEnter={() => setBackImage(BackHoverImage)}
                            onMouseLeave={() => setBackImage(BackImage)}
                        >
                            <img src={backImage} alt="back icon"></img>
                            BACK
                        </Link>
                        <Link to="/thankyou" className="submit-btn"
                            onMouseEnter={() => setSubmitImage(SubmitHoverImage)}
                            onMouseLeave={() => setSubmitImage(SubmitImage)}
                        >
                            SUBMIT
                            <img src={submitImage} alt="submit icon"></img>
                        </Link>
                    </div>
                </div>
                <div className="accent-bar-bottom" />
            </section>
        </>
    );
}

export default Confirmation;