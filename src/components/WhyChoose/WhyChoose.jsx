import './WhyChoose.css';

const WhyChoose = () => {
    return (
        <section className="section features-section">
            <div className="container">
                <h2>Why Choose Aerobics <span className="logo-hi" style={{ fontSize: 'inherit' }}>युग</span>?</h2>
                <div className="features-grid">
                    <div className="glass-card feature-card">
                        <div className="feature-icon"><i className="fas fa-female"></i></div>
                        <h3>Women Focused</h3>
                        <p>Workouts designed specifically for women's bodies and hormonal health.</p>
                    </div>
                    <div className="glass-card feature-card">
                        <div className="feature-icon"><i className="fas fa-seedling"></i></div>
                        <h3>Beginner Friendly</h3>
                        <p>Modifications provided for every exercise. Start at your own pace.</p>
                    </div>
                    <div className="glass-card feature-card">
                        <div className="feature-icon"><i className="fas fa-users"></i></div>
                        <h3>Community Support</h3>
                        <p>Join an active community of inspiring women cheering each other on.</p>
                    </div>
                    <div className="glass-card feature-card">
                        <div className="feature-icon"><i className="fas fa-home"></i></div>
                        <h3>Home Friendly</h3>
                        <p>No fancy gym equipment needed. Work out from the comfort of your home.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
