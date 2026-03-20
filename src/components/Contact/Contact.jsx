import './Contact.css';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa6';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2>Get In Touch</h2>
                <p style={{ textAlign: 'center', color: 'var(--text-light)', margin: '0.5rem auto 3rem auto', maxWidth: '600px', width: '100%' }}>
                    We'd love to hear from you. Choose your preferred way to reach out!
                </p>
                <div className="contact-grid">
                    <div className="glass-card contact-info-card">
                        <div className="contact-icon-wrap" style={{ color: "#25D366" }}>
                            <FaWhatsapp />
                        </div>
                        <div>
                            <h4>WhatsApp</h4>
                            <p>Chat with us directly for quick answers</p>
                            {/* <a href="#" className="btn btn-primary" style={{ marginTop: '1rem' }}>Message Now</a> */}
                            <a
                                href="https://wa.me/919056114997?text=Hi%20I%20am%20interested%20in%20your%20Aerobics%20classes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                                style={{ marginTop: '1rem' }}
                            >
                                Message Now
                            </a>
                        </div>
                    </div>
                    <div className="glass-card contact-info-card">
                        <div className="contact-icon-wrap">
                            <img loading="lazy" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" style={{ width: "1em", height: "1em" }} />
                        </div>
                        <div>
                            <h4>Instagram</h4>
                            <p>Follow us for daily fitness tips & motivation</p>
                            <a
                                href="https://instagram.com/aerobics_yug"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                                style={{ marginTop: '1rem' }}
                            >
                                Follow Us
                            </a>
                        </div>
                    </div>
                    <div className="glass-card contact-info-card">
                        <div className="contact-icon-wrap" style={{ color: "#EA4335" }}>
                            <FaEnvelope />
                        </div>
                        <div>
                            <h4>Email</h4>
                            <p>For partnerships & business inquiries</p>
                            <a
                                href="mailto:preet26.maahii@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                                style={{ marginTop: '1rem' }}
                            >
                                Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Contact;
