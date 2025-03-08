import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../CSS/home.css';
import Food1 from '../Photos/Z1.png';
import pp from '../Photos/69.png';
import I1 from '../Photos/1.png';
import I2 from '../Photos/2.png';
import I3 from '../Photos/3.png';

const OrderNowButton = ({ onOrderClick }) => (
  <div className="order-button-container">
    <button className="order-now-button" onClick={onOrderClick}>
      Order Now
    </button>
  </div>
);

const AuthPopup = ({ onClose }) => {
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAuth = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    try {
      // Decide which endpoint and payload based on register/login
      const endpoint = isRegister ? 'http://localhost:3001/api/register' : 'http://localhost:3001/api/login';
      const payload = isRegister ? { name, email, password, address } : { email, password };
      const response = await axios.post(endpoint, payload);

      if (response?.data?.success) {
        if (isRegister) {
          navigate('/menu'); // Redirect to login after successful registration
        } else {
          navigate('/menu'); // Redirect to dashboard after successful login
        }
      } else {
        setErrorMessage('Authentication failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{isRegister ? "Register" : "Sign In"}</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleAuth}>
          {isRegister &&(
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {isRegister && (
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          )}
          <button type="submit" className="auth-button">
            {isRegister ? "Register" : "Sign In"}
          </button>
        </form>
        <p onClick={() => setIsRegister(!isRegister)} className="toggle-auth">
          {isRegister ? "Already have an account? Sign In" : "Don't have an account? Register"}
        </p>
        <button onClick={onClose} className="close-popup">
          Close
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  const [showAuthPopup, setShowAuthPopup] = useState(false);

  return (
    <div className="home-container">
      <img src={Food1} alt="A1" className="food-image" />
      <h1 className="restaurant-title">Welcome to 69 Restaurant</h1>
      <OrderNowButton onOrderClick={() => setShowAuthPopup(true)} />
      {showAuthPopup && <AuthPopup onClose={() => setShowAuthPopup(false)} />}
      
      <div className="order-section">
        <h3 className="order-heading">How to order</h3>
        <h1 className="order-subheading">It's as easy as this.</h1>
      </div>

      <div className="Middle">
        <h1> Enjoy Our Delicious Meal </h1>
        <p className="Middle1">
          Explore our curated products for your needs. Whether browsing or searching,<br /> we’re here to help.
          Find your perfect match in our quality collection. With<br /> style and excellence, the best awaits.
        </p>
      </div>

      <div className="icon-container">
        <div className="icon">
          <img src={I1} alt="Step 1" className="icon-img" />
          <p className="icon-text">Find Us</p>
        </div>
        <div className="icon">
          <img src={I2} alt="Step 2" className="icon-img" />
          <p className="icon-text">Order Food</p>
        </div>
        <div className="icon">
          <img src={I3} alt="Step 3" className="icon-img" />
          <p className="icon-text">Enjoy Meal</p>
        </div>
      </div>
      
      <div className="icon1">
        <img src={pp} alt="Step 2" className="sixtyNine-img" />
      </div>
    </div>
  );
};


// Removed invalid export statement