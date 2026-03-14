import { Link } from 'react-router-dom';
import './Programs.css';

const Programs = () => {
    return (
        <section id="programs" className="section programs-section">
            <div className="container">
                <h2>Transform With Us</h2>
                <div className="programs-grid">
                    {/* Demo Class */}
                    <div className="glass-card program-card">
                        <div className="program-icon"><i className="fas fa-play-circle"></i></div>
                        <h3>Demo Class</h3>
                        <p>Experience our unique training style with a single trial session.</p>
                        <div className="price">₹299 <span>/ session</span></div>
                        <Link to="/enroll?program=demo" className="btn btn-secondary w-100 mt-4">Try One Session</Link>
                    </div>

                    {/* Monthly Program */}
                    <div className="glass-card program-card popular-card">
                        <div className="popular-badge">Most Popular</div>
                        <div className="program-icon"><i className="fas fa-calendar-check"></i></div>
                        <h3>Monthly Fitness Program</h3>
                        <p>Regular guided classes designed to build consistency and stamina.</p>
                        <div className="price">₹3,300 <span>/ month</span></div>
                        <Link to="/enroll?program=monthly" className="btn btn-primary w-100 mt-4 pulse-anim">Join Program</Link>
                    </div>

                    {/* 6 Month Program */}
                    <div className="glass-card program-card">
                        <div className="program-icon"><i className="fas fa-crown"></i></div>
                        <h3>2 Month Transformation</h3>
                        <p>Long term fitness transformation with dedicated tracking and support.</p>
                        <div className="price">₹6,000 <span>/ 2 months</span></div>
                        <Link to="/enroll?program=2month" className="btn btn-secondary w-100 mt-4">Commit Now</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Programs;
