import React from 'react';
import '../CSS/contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-description">
        Welcome to 69 Restaurant, where exceptional flavors and unforgettable experiences come together. 
        Have any questions or feedback? We would love to hear from you! Please fill out the form below, and 
        our team will get back to you as soon as possible.
      </p>

      <div className="contact-details">
        <p><strong>Our Location:</strong> 69 Main Street, YourCity, Country</p>
        <p><strong>Phone:</strong> +123 456 7890</p>
        <p><strong>Email:</strong> contact@69restaurant.com</p>
        <p>
          <strong>Follow Us:</strong> 
          <a href="https://www.instagram.com/69restaurant" target="_blank" rel="noopener noreferrer"> Instagram</a> | 
          <a href="https://www.facebook.com/69restaurant" target="_blank" rel="noopener noreferrer"> Facebook</a>
        </p>
      </div>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Enter your message" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
