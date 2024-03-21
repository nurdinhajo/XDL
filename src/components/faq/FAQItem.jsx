// FAQItem.jsx
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="question" onClick={toggleAnswer}>
        {question}
        <span className="icon">
          {isOpen ? <FaMinus size={14} /> : <FaPlus size={14} />} {/* Adjust the size of the icon */}
        </span>
      </div>
      <div className="answer">
        {isOpen && <p>{answer}</p>}
      </div>
    </div>
  );
};

export default FAQItem;
