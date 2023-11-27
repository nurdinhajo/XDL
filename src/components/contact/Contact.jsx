// Contact.jsx
import React, { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './contact.css';

function Contact() {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formData));
    setIsSubmit(true);

    // Handle form submission logic here if needed
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log('Form submitted:', formData);
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    // Validate First Name
    if (!values.firstName) {
      errors.firstName = 'First Name is required!';
    }

    // Validate Last Name
    if (!values.lastName) {
      errors.lastName = 'Last Name is required!';
    }

    // Validate Email
    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }

    // Validate Message
    if (!values.message) {
      errors.message = 'Message is required!';
    }

    return errors;
  };

  return (
    <div className="contact">
      <Header />

      <div className="contactDetails">
      <div className="call">
          <a href="tel:+254799396000">
            <img src={process.env.PUBLIC_URL + '/XDL-CALL.png'} alt="XOBO Call" />
            +254 799 396 000
          </a>
        </div>

        <div className="email">
          <a href="mailto:info@xobo.co.ke">
            <img src={process.env.PUBLIC_URL + '/XDL-EMAIL.png'} alt="XOBO Email" />
            info@xobo.co.ke
          </a>
        </div>

        <div className="whatsapp">
          <a href="https://api.whatsapp.com/send?phone=254799396000" target='_blank'>
            <img src={process.env.PUBLIC_URL + '/XDL-WHATSAPP.png'} alt="XOBO WhatsApp" />
            +254 799 396 000
          </a>
        </div>
      </div>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Need More Information?</h3>
          <p>Fill up the form below to send us a message, and we will get in touch as soon as possible.</p>

          <div className="input-container">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            {errors.firstName && <p className="error-message">{errors.firstName}</p>}
          </div>

          <div className="input-container">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            {errors.lastName && <p className="error-message">{errors.lastName}</p>}
          </div>

          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="input-container">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.message && <p className="error-message">{errors.message}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
