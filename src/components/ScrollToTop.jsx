import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;

        // If there's a hash in the URL, try scrolling to that specific section
        if (hash) {
            // Need a slight delay to ensure React has fully rendered the new page's DOM
            setTimeout(() => {
                const element = document.getElementById(hash.replace('#', ''));
                if (element) {
                    const navbarHeight = 80; // approximate height of your fixed navbar
                    const offsetTop = element.offsetTop - navbarHeight;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }, 100);
        } else {
            // If no hash, scroll simply to the very top immediately
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, [location.pathname, location.hash, location.key]);

    return null; // This component doesn't render any UI
};

export default ScrollToTop;
