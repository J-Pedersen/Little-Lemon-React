import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import '../components/styles/normalize.css';
import '../components/styles/login.css';

function Login() {
    return (
        <>
            <section className="login-section">
                <div className="accent-bar-top" />
                <h1>Login</h1>
                <div className="login-form">
                    <div className="form-group">
                        <div className='login-label-bar'>
                            <label htmlFor="username">Username</label>
                            <a href="/forgot-username" className="forgot" >Forgot Username?</a>
                        </div>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div className="form-group">
                        <div className='login-label-bar'>
                            <label htmlFor="password">Password</label>
                            <a href="/forgot-password" className="forgot" >Forgot Password?</a>
                        </div>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div className="chk-box">
                        <input className="box-inner chk-box-inner" type="checkbox" id="remember-me" name="remember-me" />
                        <label htmlFor="remember-me">Remember Me</label>
                    </div>
                    <button className="login-btn" type="submit">LOGIN</button>
                    <p className='suggestion-text'>Or Login Using</p>
                    <div className="social-login-buttons">
                        <button className="google-login-button">
                            <FontAwesomeIcon
                                icon={faGoogle}
                                size="2x"
                                alt="Google"
                                title="Google"
                                aria-label="Google"
                            />
                            &nbsp;&nbsp;GOOGLE</button>
                        <button className="facebook-login-button">
                        <FontAwesomeIcon
                            icon={faFacebook}
                            size="2x"
                            alt="Facebook"
                            title="Facebook"
                            aria-label="Facebook"
                        />
                            &nbsp;&nbsp;FACEBOOK</button>
                    </div>
                </div>
                <div className="register-link">
                    Don't have an account? <Link className="register-new" to="/register">Create One Here</Link>
                </div>
                <div className="accent-bar-bottom" />
            </section>
        </>
    );
}

export default Login;