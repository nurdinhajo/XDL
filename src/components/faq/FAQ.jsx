import React, { useState } from 'react';
import './faq.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const FAQ = () => {
  const faqData = [
    { question: 'What is Lorem Ipsum?', answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { question: 'Why do we use it?', answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' },
    { question: 'Where does it come from?', answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text.' },
    { question: 'Is it safe to use?', answer: 'Yes, it is safe to use. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.' },
    { question: 'How can I get started?', answer: 'You can get started by following the instructions provided in the documentation.' },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
     <div className="faq-data">
        <Header/>
        <h1>Frequently Asked Questions</h1>
        <ul className="faq-list">
          {faqData.map((faq, index) => (
            <li key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="question" onClick={() => handleToggle(index)}>
                {faq.question}
              </div>
              <div className="answer">{faq.answer}</div>
            </li>
          ))}
        </ul>
        <Footer/>
      </div>
    </div>
  );
};

export default FAQ;