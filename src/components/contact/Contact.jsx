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

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error when user starts typing
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields and set errors
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = 'Please complete this required field.';
      }
    });

    // If there are errors, set them in the state and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors if there are no issues
    setErrors({});

    // Handle form submission logic here
    console.log('Form submitted:', formData);
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
         <a href="mailto:info@xobo.co.ke" >
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
          <h3>
            Need More Information?
          </h3>
          <p>
            Fill up the form below to send us a message and we will get in touch as soon as possible.
          </p>
          <label htmlFor="name">First Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error-message">{errors.name}</p>}

          <label htmlFor="name">Last Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error-message">{errors.name}</p>}

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

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <p className="error-message">{errors.message}</p>}

          <button type="submit">Submit</button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
