import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Enroll from './pages/Enroll';
import EnrollWinter from './pages/EnrollWinter';
import Payment from './pages/Payment';
import Success from './pages/Success';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';
import PopupBanner from './components/PopupBanner/PopupBanner';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <PopupBanner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/enroll-winter" element={<EnrollWinter />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </Router>
  );
}

export default App;
