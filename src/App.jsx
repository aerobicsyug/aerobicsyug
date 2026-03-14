import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Enroll from './pages/Enroll';
import Payment from './pages/Payment';
import Success from './pages/Success';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </Router>
  );
}

export default App;
