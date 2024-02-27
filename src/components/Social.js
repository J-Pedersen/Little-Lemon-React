import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './styles/social.css';
import './styles/normalize.css';

function Social() {
    return (
        <section className="social-section">
            <h3 className="social-title">SOCIAL MEDIA</h3>
            <ul className="social-icons">
                <li className="social-icon">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </li>
                <li className="social-icon">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </li>
                <li className="social-icon">
                    <FontAwesomeIcon icon={faXTwitter} size="2x" />
                </li>
            </ul>
        </section>
    );
}

export default Social;