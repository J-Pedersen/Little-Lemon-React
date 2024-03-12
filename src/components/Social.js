import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './styles/normalize.css';
import './styles/social.css';


function Social() {
    return (
        <section className="social-section" aria-labelledby="social-section-title">
            <h3 id="social-section-title" className="social-title">SOCIAL MEDIA</h3>
            <ul className="social-icons">
                <li className="social-icon">
                    <FontAwesomeIcon
                        icon={faFacebook}
                        size="2x"
                        alt="Facebook"
                        title="Facebook"
                        aria-label="Facebook"
                    />
                </li>
                <li className="social-icon">
                    <FontAwesomeIcon
                        icon={faInstagram}
                        size="2x"
                        alt="Instagram"
                        title="Instagram"
                        aria-label="Instagram"
                    />
                </li>
                <li className="social-icon">
                    <FontAwesomeIcon
                        icon={faXTwitter}
                        size="2x"
                        alt="Twitter/X"
                        title="Twitter/X"
                        aria-label="Twitter/X"
                    />
                </li>
            </ul>
        </section>
    );
}

export default Social;