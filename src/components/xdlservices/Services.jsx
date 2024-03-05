import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './services.css';

function Services() {
  return (
    <div className="services">
      <Header />

      <div className="serviceDetails">
        <div className="background-container">
          <img 
            loading='lazy'
            src={process.env.PUBLIC_URL + '/SERVICES/XDL-SERVICES-2.png'} alt="XOBO SERVICES" 
          />


          <div className="content">
          <h2>On-demand delivery for your business</h2>

          <a href="https://app.xobo.co.ke/" target='_blank' rel="noreferrer">

            <button className='serviceBtn'>
              Deliver Now
            </button>
          </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Services;
