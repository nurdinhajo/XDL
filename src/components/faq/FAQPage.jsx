// FAQPage.jsx
import React, { useState } from 'react';
import FAQList from './FAQList';

const FAQPage = ({ faqs }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="faq-container">
    <div className="categories">
      <a href="#All" onClick={() => handleCategoryChange('All')}>All</a>
      <a href="#Order" onClick={() => handleCategoryChange('order')}>Order</a>
      <a href="#Delivery" onClick={() => handleCategoryChange('delivery')}>Delivery</a>
      {/* <a href="#Partner" onClick={() => handleCategoryChange('delivery partner')}>Delivery Partner</a> */}
      <a href="#Payments" onClick={() => handleCategoryChange('payments')}>Payments</a>
    </div>
    <div className="questions">
      <FAQList faqs={faqs} category={selectedCategory} />
    </div>
  </div>
  );
};

export default FAQPage;
