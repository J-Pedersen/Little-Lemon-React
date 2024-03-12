import './styles/normalize.css';
import './styles/contact.css';

function Contact() {
    return (
        <>
            <section className="contact-section" aria-labelledby="contact-section-title">
                <h3 id="contact-section-title" className="contact-title">CONTACT US</h3>
                <ul className="contact-info" aria-label="Contact Information">
                    <li>123 West Fake St</li>
                    <li>Chicago, Il 55555</li>
                    <li>(789)555-5555</li>
                    <li className="email-info"><strong>littlelemonbigcity<br /> @littlelemon.com</strong></li>
                </ul>
            </section>
        </>
    );
}

export default Contact;