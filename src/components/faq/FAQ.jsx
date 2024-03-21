// FAQ.jsx
import React, { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import FAQPage from './FAQPage';

import './faq.css'; // Make sure to adjust the path based on your project structure

const FAQ = () => {
  const faqs = [
    { id: 1, question: 'How to place an order?', answer: '...' , category: 'order' },
    { id: 2, question: 'What are the delivery options?', answer: '...', category: 'delivery' },
    { id: 3, question: 'How to become a delivery partner?', answer: '...', category: 'delivery partner' },
    { id: 4, question: 'What payment methods are accepted?', answer: '...', category: 'payments' },
    // Add more FAQs as needed
  ];

  return (
    <>
      <Header />

      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
      </div>

      <hr />

      <div className="faqpage">
      <FAQPage faqs={faqs} />
      </div>

      <Footer />
    </>
  );
};

export default FAQ;
