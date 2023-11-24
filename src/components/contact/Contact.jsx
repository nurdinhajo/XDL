// Contact.jsx
import React, { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email is empty
    if (!formData.email) {
      setEmailError('Please enter your email.');
      return;
    }

    // Clear email error if email is provided
    setEmailError('');

    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact">
      <Header />

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {emailError && <p className="error-message">{emailError}</p>}

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
