import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home';
import Menu from './pages/menu';
import Reservation from './pages/reservation';
import Contact from './pages/contact';
import ThankYou from './pages/thanks';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/reservation">Reservation</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} /> {/* Add this route for ThankYou page */}
          </Routes>
        </main>

        {/* Footer Section */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <h4>Contact Us</h4>
              <p>69 Restaurant</p>
              <p>123 Food Street, Delicious City</p>
              <p>Phone: +123 456 7890</p>
              <p>Email: info@69restaurant.com</p>
            </div>
            <div className="footer-section">
              <h4>Opening Hours</h4>
              <p>Monday - Friday: 10:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday: 11:00 AM - 11:00 PM</p>
            </div>
            <div className="footer-section">
              <h4>Follow Us</h4>
              <p>
                <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
              </p>
              <p>
                <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              </p>
              <p>
                <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© Copyright 69 Restaurant 2025. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
