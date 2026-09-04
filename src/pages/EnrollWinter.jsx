import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EnrollWinter.css';

const EnrollWinter = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        city: '',
        program: 'winter',
        batch: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { fullName, phone, email, city, batch } = formData;

        if (!fullName || !phone || !email || !city || !batch) {
            alert('Please fill in all fields.');
            return;
        }

        const enrollData = {
            name: fullName,
            phone,
            email,
            city,
            program: 'winter',
            batch,
            amount: 8000,
            programName: 'Winter Special (3 Months)'
        };

        localStorage.setItem('aerobicsYugEnroll', JSON.stringify(enrollData));

        navigate('/payment');
    };

    return (
        <section className="enroll-section section">
            <div className="container">
                {/* Notice Alert Bar */}
                {/* <div className="notice-alert-bar">
                    <span className="notice-alert-text">
                        ⚠️ New enrollments opening from 12th October only. Stay tuned!
                    </span>
                </div> */}

                {/* Winter Special Highlight Banner */}
                <div className="winter-banner-top">
                    <div className="winter-banner-badge">LIMITED TIME OFFER ❄️</div>
                    <h2>Winter Special Program</h2>
                    <div className="winter-banner-details">
                        <span><i className="fas fa-calendar-alt"></i> Duration: <strong>November, December, January (3 Months)</strong></span>
                        <span><i className="fas fa-tag"></i> Price: <strong>₹8,000 (Full Payment Only)</strong></span>
                    </div>
                </div>

                <div className="enroll-wrapper">
                    {/* Left Info */}
                    <div className="enroll-info">
                        <h1>Join <span className="text-gradient">Winter Special</span></h1>
                        <div className="program-badge winter-badge-style">
                            <i className="fas fa-snowflake"></i>
                            <span>Winter Special — 3 Months</span>
                        </div>
                        <p>Get 3 full months of guided online aerobics classes with our expert trainer Preeti Rawat. Fill in your details to secure your seat!</p>

                        <div className="package-benefits">
                            <h3 style={{ marginBottom: '1rem', color: 'var(--text-dark)' }}>Winter Special Includes:</h3>
                            <ul className="trust-points">
                                <li><i className="fas fa-check-circle"></i> Complete 3-Month Guided Aerobics & Fitness Program</li>
                                <li><i className="fas fa-check-circle"></i> Monday to Friday Live Sessions with Preeti Coach</li>
                                <li><i className="fas fa-check-circle"></i> Access to 40+ Recorded Workout Sessions</li>
                                <li><i className="fas fa-check-circle"></i> Interactive posture & stamina tracking</li>
                                <li><i className="fas fa-check-circle"></i> Special weekend workshops included</li>
                            </ul>

                            <div className="weekly-structure" style={{ marginTop: '1.5rem' }}>
                                <h4 style={{ marginBottom: '0.8rem', color: 'var(--text-dark)' }}>Weekly Structure:</h4>
                                <ul style={{ listStyle: 'none', paddingLeft: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <li style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}><strong style={{ color: 'var(--text-dark)' }}>Mon-Wed:</strong> Strength & Aerobics</li>
                                    <li style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}><strong style={{ color: 'var(--text-dark)' }}>Thursday:</strong> Yoga / Mobility Session</li>
                                    <li style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}><strong style={{ color: 'var(--text-dark)' }}>Friday:</strong> Core & Intense Cardio</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="glass-card enroll-form-card">
                        <h3>Winter Special Form</h3>
                        <p>Pre-selected program: Winter Special (₹8,000)</p>
                        <form className="enroll-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name</label>
                                <input type="text" id="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" value={formData.phone} onChange={handleChange} placeholder="e.g. 9876543210" required pattern="[0-9]{10}" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input type="text" id="city" value={formData.city} onChange={handleChange} placeholder="Your city" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="program">Program Selected</label>
                                <select id="program" value={formData.program} onChange={handleChange} disabled required>
                                    <option value="winter">Winter Special — ₹8,000 (3 Months)</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="batch">Select Your Batch</label>
                                <select id="batch" value={formData.batch} onChange={handleChange} required>
                                    <option value="">-- Choose a Batch --</option>
                                    <option value="Morning (5:45 AM - 6:45 AM)">Morning (5:45 AM - 6:45 AM)</option>
                                    <option value="Mid-Morning (10:30 AM - 11:30 AM)">Mid-Morning (10:30 AM - 11:30 AM)</option>
                                    <option value="Evening (6:30 PM - 7:30 PM)">Evening (6:30 PM - 7:30 PM)</option>
                                </select>
                            </div>

                            <div className="price-display">
                                <span className="label">Amount to Pay</span>
                                <span className="amount">₹8,000</span>
                            </div>

                            <button type="submit" className="btn btn-primary w-100 mt-4">
                                Continue to Payment <i className="fas fa-arrow-right" style={{ marginLeft: '0.5rem' }}></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnrollWinter;
