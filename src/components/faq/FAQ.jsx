import React, { useState, useRef, useEffect } from 'react';
import './faq.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const FAQ = () => {
  const faqData = [
    { question: 'How to place your order', answer: 'Placing an order on XOBO app is simple, choose your pick up and enter destination, add extra stops if needed. Select the preferred category then confirm your request. Always ensure your location is turned on for the app to automatically pick your current location. If the pick-up is different, you can always type the location info on the app.' },

    { question: 'Adding a destination or multiple stops', answer: 'You can add an extra stop by clicking on the additional sign ‘+’on the app. You can add up to 5 additional stops on the app. A message will pop up notifying you of the price change. You can either select one of the suggested addresses or manually type it in.' },

    { question: 'How to get a price estimate', answer: 'Your price is calculated based on:  Base fare: The price for pickup  Minute rate: Time from start to end of a journey  Kilometer rate: distance of the route covered  Dynamic pricing if applicable. The price estimate will be visible once you enter all your details and this prediction is the best estimate, we can give considering the optimal route and the estimated time of arrival. The final price may vary depending on factors such as traffic, weather, road constructions, taking a different route or adding an extra destination.' },

    { question: 'How to cancel a trip', answer: 'You can cancel a trip on the app before or after you are matched with a rider/driver. However, in some cases, a cancellation fee may be charged. To cancel a trip, tap the slider on the home screen to cancel and select the drop-down reasons for cancelling the order.' },

    { question: 
        'Managing app notifications', 
      answer: 
        'The Xobo app will send you notifications on the driver’s time of arrival and promotional campaigns. If you don’t want to receive these messages you can switch them off on your device settings.' 
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  // const [answerHeights, setAnswerHeights] = useState([]);

  const answerRefs = useRef([]);

  useEffect(() => {  
      answerRefs.current.map((ref) => (ref && ref.clientHeight) || 0)
  }, []);

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
            <li 
              key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
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