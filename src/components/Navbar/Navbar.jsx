import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar glass-effect sticky">
            <div className="nav-container">
                <Link to="/" className="logo">
                    <span className="logo-en" style={{ fontFamily: "'Bebas Neue', cursive", letterSpacing: "2px", textTransform: "uppercase", fontSize: "1.8rem" }}>Aerobics</span> <span className="logo-hi">युग</span>
                </Link>
                <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <Link to="/#programs" onClick={() => setIsMobileMenuOpen(false)}>Programs</Link>
                    <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                    <Link to="/about#gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
                    <Link to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                </div>
                <Link to="/#programs" onClick={() => setIsMobileMenuOpen(false)} className="btn btn-primary">Book Demo Class</Link>

                <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                    <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
