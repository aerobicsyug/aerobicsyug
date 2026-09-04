import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './PopupBanner.css';

const PopupBanner = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const dismissed = sessionStorage.getItem('aerobics_popup_dismissed');
        if (!dismissed) {
            setIsOpen(true);
        }
    }, []);

    const handleClose = () => {
        sessionStorage.setItem('aerobics_popup_dismissed', 'true');
        setIsOpen(false);
    };

    const handleNotifyMe = () => {
        handleClose();
        if (location.pathname === '/enroll' || location.pathname === '/enroll-winter') {
            const formElement = document.querySelector('.enroll-form-card') || document.querySelector('.enroll-section');
            if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/enroll');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="popup-overlay" onClick={handleClose}>
            <div className="popup-modal glass-card" onClick={(e) => e.stopPropagation()}>
                <button className="popup-close-btn" onClick={handleClose} aria-label="Close modal">
                    <i className="fas fa-times"></i>
                </button>
                <div className="popup-badge">Notice</div>
                <h2>Enrollments Closed Temporarily</h2>
                <p className="popup-message">
                    We are not accepting new enrollments right now. New batches will begin from 12th October. You can book your seat in the first week of October.
                </p>
                {/* <button className="btn btn-primary w-100 mt-4 popup-cta" onClick={handleNotifyMe}>
                    Notify Me <i className="fas fa-bell" style={{ marginLeft: '0.5rem' }}></i>
                </button> */}
            </div>
        </div>
    );
};

export default PopupBanner;
