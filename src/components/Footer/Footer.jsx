import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="logo" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
                            <span className="logo-en">Aerobics</span> <span className="logo-hi">युग</span>
                        </Link>
                        <p>Empowering women through home-based fitness and holistic health guided online.</p>
                    </div>
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <Link to="/#programs">Programs</Link>
                        <Link to="/about">About Coach</Link>
                        <Link to="/#contact">Contact Us</Link>
                    </div>
                    <div className="footer-col">
                        <h4>Programs</h4>
                        <Link to="/enroll?program=demo">Demo Class</Link>
                        <Link to="/enroll?program=monthly">Monthly Program</Link>
                        <Link to="/enroll?program=6month">6 Month Transformation</Link>
                    </div>
                    <div className="footer-col">
                        <h4>Follow Us</h4>
                        <div className="footer-social-icons">
                            <a href="https://instagram.com/aerobics_yug" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
                            <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2026 Aerobics युग. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
