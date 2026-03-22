import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './Enroll.css';

const Enroll = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        city: '',
        program: '',
        batch: ''
    });

    const prices = { demo: 299, monthly: 3300, '2month': 6000 };
    const names = { demo: 'Demo Class', monthly: 'Monthly Fitness Program', '2month': '2 Month Transformation' };

    useEffect(() => {
        const programParam = searchParams.get('program');
        if (programParam && prices[programParam]) {
            setFormData(prev => ({ ...prev, program: programParam }));
        }
    }, [searchParams]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { fullName, phone, email, city, program, batch } = formData;

        if (!fullName || !phone || !email || !city || !program || !batch) {
            alert('Please fill in all fields.');
            return;
        }

        const enrollData = {
            name: fullName,
            phone,
            email,
            city,
            program,
            batch,
            amount: prices[program],
            programName: names[program]
        };

        localStorage.setItem('aerobicsYugEnroll', JSON.stringify(enrollData));

        navigate('/payment');
    };

    const currentPrice = formData.program ? prices[formData.program] : 0;
    const currentProgramName = formData.program ? names[formData.program] : 'Select a Program';

    return (
        <section className="enroll-section section">
            <div className="container">
                <div className="enroll-wrapper">
                    {/* Left Info */}
                    <div className="enroll-info">
                        <h1>Join <span className="text-gradient">Aerobics युग</span></h1>
                        <div className="program-badge">
                            <i className="fas fa-star"></i>
                            <span>{currentProgramName}</span>
                        </div>
                        <p>Fill in your details to enroll. After submitting, you'll be redirected to the payment page to complete your registration.</p>
                        {formData.program === 'demo' ? (
                            <div className="package-benefits">
                                <h3 style={{ marginBottom: '1rem', color: 'var(--text-dark)' }}>Demo Class Includes:</h3>
                                <ul className="trust-points">
                                    <li><i className="fas fa-check-circle"></i> 1 Live Session with our expert trainers</li>
                                    <li><i className="fas fa-check-circle"></i> Experience our interactive workout style</li>
                                    <li><i className="fas fa-check-circle"></i> Basic fitness assessment & guidance</li>
                                    <li><i className="fas fa-check-circle"></i> Understanding of our weekly structure</li>
                                </ul>
                            </div>
                        ) : (
                            <div className="package-benefits">
                                <h3 style={{ marginBottom: '1rem', color: 'var(--text-dark)' }}>What's Included:</h3>
                                <ul className="trust-points">
                                    <li><i className="fas fa-check-circle"></i> Access to 40+ recorded workout sessions (Lifetime access)</li>
                                    <li><i className="fas fa-check-circle"></i> Follow do-along videos if you miss a class</li>
                                    <li><i className="fas fa-check-circle"></i> Variety of workouts to keep you engaged</li>
                                    <li><i className="fas fa-check-circle"></i> Extra workshops on weekends</li>
                                    <li><i className="fas fa-check-circle"></i> Monday to Friday live classes</li>
                                </ul>

                                <div className="weekly-structure" style={{ marginTop: '1.5rem' }}>
                                    <h4 style={{ marginBottom: '0.8rem', color: 'var(--text-dark)' }}>Weekly Structure:</h4>
                                    <ul style={{ listStyle: 'none', paddingLeft: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <li style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}><strong style={{ color: 'var(--text-dark)' }}>Mon-Wed:</strong> Strength Training</li>
                                        <li style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}><strong style={{ color: 'var(--text-dark)' }}>Thursday:</strong> Yoga/Mobility Session</li>
                                        <li style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}><strong style={{ color: 'var(--text-dark)' }}>Friday:</strong> Core & Cardio Session</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Form */}
                    <div className="glass-card enroll-form-card">
                        <h3>Enrollment Form</h3>
                        <p>All fields are required</p>
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
                                <select id="program" value={formData.program} onChange={handleChange} required>
                                    <option value="">-- Choose a Program --</option>
                                    <option value="demo">Demo Class — ₹299</option>
                                    <option value="monthly">Monthly Fitness Program — ₹3,300</option>
                                    <option value="2month">2 Month Transformation — ₹6,000</option>
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

                            {formData.program && (
                                <div className="price-display">
                                    <span className="label">Amount to Pay</span>
                                    <span className="amount">₹{currentPrice.toLocaleString('en-IN')}</span>
                                </div>
                            )}

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

export default Enroll;
