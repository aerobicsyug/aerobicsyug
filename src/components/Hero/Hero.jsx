import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <header id="home" className="hero-section section">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="trust-badge">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" className="ig-icon" />
                        <span>Trusted by 90,000+ fitness enthusiasts on Instagram</span>
                    </div>
                    <h1 className="headline">Transform Your Body With Online <span className="text-gradient">Aerobics Classes</span></h1>
                    <p className="subheadline">Join thousands of women improving their health, confidence and energy through guided online fitness training.</p>
                    <div className="hero-buttons">
                        <Link to="/enroll?program=demo" className="btn btn-primary pulse-anim">Book Demo Class</Link>
                        <a href="#programs" className="btn btn-secondary">Explore Programs</a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="glass-card vsl-card">
                        <div className="video-placeholder">
                            <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Aerobics Class" className="video-thumbnail" />
                            <button className="play-btn"><i className="fas fa-play"></i></button>
                        </div>
                    </div>
                    <div className="trainer-badge glass-card float-anim">
                        <img src="https://res.cloudinary.com/da7ewmcje/image/upload/v1773482590/IMG_6263.JPG_yycovw.jpg" alt="Trainer Profile" />
                        <div className="trainer-info">
                            <strong>Expert Coach</strong>
                            <span>Online Live</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
