import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What are the class timings available?",
            answer: "There are 3 batches currently running and you can join any one of them. If you miss your class, you can switch to another batch. Morning: 5:45 AM – 6:45 AM, Morning: 10:30 AM – 11:30 AM, Evening: 6:30 PM – 7:30 PM (Indian Standard Time). Classes run from Monday to Friday."
        },
        {
            question: "Can absolute beginners join?",
            answer: "Yes, of course! The class is designed for all fitness levels. Proper instructions and guidance are provided by Preeti, making it suitable for beginners to advanced participants."
        },
        {
            question: "What equipment do I need?",
            answer: "You will need 2 pairs of dumbbells, 2 resistance bands (one long loop and one short loop), a yoga mat, yoga belt, and yoga blocks. Purchase links will be shared once you join the class."
        },
        {
            question: "What extra benefits do I get with the program?",
            answer: "Along with live sessions, you will get lifetime access to 40+ workout videos so you can continue workouts even if you miss a class. Free Sunday workshops are also included where you can learn additional skills like pushups, yogic shatkarma techniques, pistol squats, and advanced yoga asanas. A basic diet plan can also be provided if needed."
        },
        {
            question: "What age group can join the classes?",
            answer: "Females between the ages of 15 to 50 years can enroll in the classes."
        },
        {
            question: "I am a postpartum mom. Can I join?",
            answer: "Yes, absolutely! Moms who are at least 6 months postpartum can join the class to regain strength, heal their core, and rebuild confidence."
        },
        {
            question: "Who should not join the program?",
            answer: "You should not enroll if you are pregnant, suffering from a serious medical condition, underweight and physically weak, or not serious about improving your health and fitness."
        },
        {
            question: "How can I join or book my seat?",
            answer: "Simply select the program you want to enroll in, fill in your details, and complete the payment using the available payment method. Once done, we will connect with you on WhatsApp for further guidance."
        }
    ];

    return (
        <section className="section faq-section">
            <div className="container">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`glass-card faq-item ${activeIndex === index ? 'active' : ''}`}
                        >
                            <div className="faq-header" onClick={() => toggleFAQ(index)}>
                                <h3>{faq.question}</h3>
                                <i className="fas fa-chevron-down"></i>
                            </div>
                            <div className="faq-body">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
