import './WhyChoose.css';
import { FaPersonDress, FaSeedling, FaPeopleGroup, FaHouse } from 'react-icons/fa6';

const WhyChoose = () => {
    return (
        <section className="section features-section">
            <div className="container">
                <h2>Why Choose Aerobics <span className="logo-hi" style={{ fontSize: 'inherit' }}>युग</span>?</h2>
                <div className="features-grid">
                    <div className="glass-card feature-card">
                        <div className="feature-icon shape-circle"><FaPersonDress /></div>
                        <h3>Women Focused</h3>
                        <p>Workouts designed specifically for women's bodies and hormonal health.</p>
                    </div>
                    <div className="glass-card feature-card">
                        <div className="feature-icon shape-petal"><FaSeedling /></div>
                        <h3>Beginner Friendly</h3>
                        <p>Modifications provided for every exercise. Start at your own pace.</p>
                    </div>
                    <div className="glass-card feature-card">
                        <div className="feature-icon shape-rounded-square"><FaPeopleGroup /></div>
                        <h3>Community Support</h3>
                        <p>Join an active community of inspiring women cheering each other on.</p>
                    </div>
                    <div className="glass-card feature-card">
                        <div className="feature-icon shape-blob"><FaHouse /></div>
                        <h3>Home Friendly</h3>
                        <p>No fancy gym equipment needed. Work out from the comfort of your home.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
