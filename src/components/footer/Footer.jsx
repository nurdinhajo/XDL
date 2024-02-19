import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer>
      <div className="footerLogo">
        <img src={process.env.PUBLIC_URL + '/Header-Logo.jpeg'} alt="XOBO Logo" />
        {/* <p>&copy;XOBO {currentYear}. All rights reserved.</p> */}
      </div>

      {/* SERVIVES */}

      <div className="moreLinks">
        <div className="link-1">
          <h4>Services</h4>
          <a href="/services">
            <p>Transport</p>
          </a>
        </div>

        {/* DRIVERS */}

        {/* <div className="link-2">
          <h4>Drivers</h4>
          <a href="/">
            <p>Be a Delivery Partner</p>
          </a>
          <a href="/">
            <p>Fleet Management</p>
          </a>
          <a href="/">
            <p>Driver Resources</p>
          </a>
        </div> */}


          {/* LEGAL */}


        <div className="link-3">
          <h4>Policies</h4>
          <a href="/">
            <p>Terms of Service</p>
          </a>
          <a href="/privacy-policy">
            <p>Privacy Policy</p>
          </a>
          <a href="/">
            <p>Driver Privacy</p>
          </a>
        </div>


          {/* SUPPORT */}


        <div className="link-4">
          <h4>Support</h4>
          <a href="/contact">
            Contact Us
          </a>


          {/* SOCIALS */}

          <div className="socials">
        <h3>Follow</h3>

        <div className="socialIcons">
          <a href='https://twitter.com/XoboDelivery_' target='blank'>
            <img src={process.env.PUBLIC_URL + '/ICONS/XDL-X.png'} alt="XOBO X" />
          </a>
          
          <a href='https://www.facebook.com/XoboDelivery/' target='blank'>
            <img src={process.env.PUBLIC_URL + '/ICONS/XDL-FACEBOOK.png'} alt="XOBO FaceBook" />
          </a>

          <a href='https://www.instagram.com/xobo_delivery/' target='blank'>
            <img src={process.env.PUBLIC_URL + '/ICONS/XDL-INSTAGRAM.png'} alt="XOBO Instagram" />
          </a>

          <a href='https://www.youtube.com/@xobodelivery1476' target='blank'>
            <img  id='youtube' src={process.env.PUBLIC_URL + '/ICONS/XDL-YOUTUBE.png'} alt="XOBO YouTube" />
          </a>

        </div>
      </div>
      
        </div>
      </div>

      <div className="xdl-copyright">
        <p>&copy;XOBO {currentYear}. All rights reserved.</p>

      </div>

     
    </footer>
  );
}

export default Footer;
