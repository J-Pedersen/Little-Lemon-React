import './styles/contact.css';

function Contact() {
    return (
        <>
            <section className="contact-section">
                <h3 className="contact-title">CONTACT US</h3>
                <ul className="contact-info">
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