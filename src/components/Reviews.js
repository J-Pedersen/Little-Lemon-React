import React from 'react';
import Andy from "../assets/Andy.png"
import Andrea from "../assets/Andrea.png"
import Chris from "../assets/Chris.png"
import Jane from "../assets/Jane.png"
import Star from "../assets/star.png"
import './styles/normalize.css';
import './styles/reviews.css';

function Reviews() {
    return (
        <>
            <section className='reviews-section' aria-labelledby="reviews-heading">
                <h2 id="reviews-heading">What Are People Saying About Little Lemon?</h2>
                <div className='reviews-wrapper' role="list">
                    <article className='review-card' role="listitem">
                        <div className='review-upper'>
                            <img
                                src={Andy}
                                alt="Andy"
                                title="Andy"
                                aria-label="Andy"
                                className='reviewer'
                            />
                            <div className='review-upper-right'>
                                <h3 className='reviewer-name'>Andy</h3>
                                <div className='rating'>
                                    <img src={Star} alt="Star" className='star' />
                                    <img src={Star} alt="Star" className='star' />
                                    <img src={Star} alt="Star" className='star' />
                                    <img src={Star} alt="Star" className='star' />
                                    <img src={Star} alt="Star" className='star' />
                                </div>
                            </div>
                        </div>
                        <p className='review-comments'>“The service was amazing and the food was even better!”</p>
                    </article>
                    <article className='review-card' role="listitem">
                        <div className='review-upper'>
                            <img
                                src={Andrea}
                                alt="Andrea"
                                title="Andrea"
                                aria-label="Andrea"
                                className='reviewer'
                            />
                            <div className='review-upper-right'>
                                <h3 className='reviewer-name'>Andrea</h3>
                                <div className='rating'>
                                    <img src={Star} alt="Star" className='star' />
                                    <img src={Star} alt="Star" className='star' />
                                    <img src={Star} alt="Star" className='star' />
                                    <img src={Star} alt="Star" className='star' />
                                </div>
                            </div>
                        </div>
                        <p className='review-comments'>
                            “The food was great and I really liked
                            that we were able to view the menu online
                            ahead of time.”
                        </p>
                    </article>
                    <article className='review-card' role="listitem">
                        <div className='review-upper'>
                            <img
                                src={Chris}
                                alt="Chris"
                                title="Chris"
                                aria-label="Chris"
                                className='reviewer'
                            />
                            <div className='review-upper-right'>
                                <h3 className='reviewer-name'>Chris</h3>
                                <div className='rating'>
                                    <img src={Star} alt="Star" className='star' />
                                    <img src={Star} alt="Star" className='star' />
                                    <img src={Star} alt="Star" className='star' />
                                    <img src={Star} alt="Star" className='star' />
                                    <img src={Star} alt="Star" className='star' />
                                </div>
                            </div>
                        </div>
                        <p className='review-comments'>
                            “Reserved a table on the site and when got to
                            the restaurant our table was ready.”
                        </p>
                    </article>
                    <article className='review-card' role="listitem">
                        <div className='review-upper'>
                            <img
                                src={Jane}
                                alt="Jane"
                                title="Jane"
                                aria-label="Jane"
                                className='reviewer'
                            />
                            <div className='review-upper-right'>
                                <h3 className='reviewer-name'>Jane</h3>
                                <div className='rating'>
                                    <img src={Star} alt="Star" className='star' />
                                    <img src={Star} alt="Star" className='star' />
                                    <img src={Star} alt="Star" className='star' />
                                    <img src={Star} alt="Star" className='star' />
                                </div>
                            </div>
                        </div>
                        <p className='review-comments'>
                            “Best meal I have had in a long time!”
                        </p>
                    </article>
                </div>
            </section>
        </>
    );
}

export default Reviews;