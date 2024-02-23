import React, { useState, useEffect, useMemo } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './contact.css';

function Contact() {
  const initialValues = useMemo(() => ({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  }), []); // Empty dependency array since it doesn't depend on any variables

  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstName) {
      errors.firstName = 'First Name is required!';
    }

    if (!values.lastName) {
      errors.lastName = 'Last Name is required!';
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = 'Phone Number is required!';
    } else if (values.phoneNumber.length < 10 || values.phoneNumber.length > 12) {
      errors.phoneNumber = 'Phone Number should be between 10 and 12 digits!';
    }

    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }

    if (!values.message) {
      errors.message = 'Message is required!';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formData));
    setIsSubmit(true);
  };

  useEffect(() => {
    const clearForm = () => {
      setFormData(initialValues);
      setIsSubmit(false);
    };

    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log('Form submitted:', formData);
      clearForm();
    }
  }, [errors, isSubmit, formData, initialValues]);

  return (
    <div className="contact">
      <Header />

      <div className="contactDetails">
        <div className="call">
          <a href="tel:+254799396000">
            <img src={process.env.PUBLIC_URL + '../media/XDL-CALL.png'} alt="XOBO Call" />
            +254 799 396 000
          </a>
        </div>

        <div className="email">
          <a href="mailto:info@xobo.co.ke">
            <img src={process.env.PUBLIC_URL + '../media/XDL-EMAIL.png'} alt="XOBO Email" />
            info@xobo.co.ke
          </a>
        </div>

        <div className="whatsapp">
          <a href="https://api.whatsapp.com/send?phone=254799396000" target='_blank' rel="noreferrer">
            <img src={process.env.PUBLIC_URL + '../media/XDL-WHATSAPP.png'} alt="XOBO WhatsApp" />
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
              placeholder='Enter Your First names'
              value={formData.firstName}
              onChange={(e) => handleChange(e.target.value, 'firstName')}
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
              placeholder='Enter Your Last names'
              value={formData.lastName}
              onChange={(e) => handleChange(e.target.value, 'lastName')}
              required
            />
            {errors.lastName && <p className="error-message">{errors.lastName}</p>}
          </div>

          <div className="input-container">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <PhoneInput
              country={'ke'}
              id="phoneNumber"
              onlyCountries={['ke']}
              value={formData.phoneNumber}
              placeholder='712 345 678'
              onChange={(value) => handleChange(value, 'phoneNumber')}
              inputProps={{
                required: true,
              }}
            />
            {errors.phoneNumber && <p className="error-message red">{errors.phoneNumber}</p>}
          </div>

          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='you@example.com'
              value={formData.email}
              onChange={(e) => handleChange(e.target.value, 'email')}
              required
            />
            {errors.email && <p className="error-message red">{errors.email}</p>}
          </div>

          <div className="input-container">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => handleChange(e.target.value, 'message')}
              placeholder='Your Message'
              required
            ></textarea>
            {errors.message && <p className="error-message red">{errors.message}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
