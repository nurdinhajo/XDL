import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

      <div className="moreLinks">
        <div className="link-1">
          <h4>Services</h4>
          <Link to="/">
            <p>Transport</p>
          </Link>
        </div>

        <div className="link-2">
          <h4>Drivers</h4>
          <Link to="/">
            <p>Be a Delivery Partner</p>
          </Link>
          <Link to="/">
            <p>Fleet Management</p>
          </Link>
          <Link to="/">
            <p>Driver Resources</p>
          </Link>
        </div>

        <div className="link-3">
          <h4>Policies</h4>
          <Link to="/">
            <p>Terms of Service</p>
          </Link>
          <Link to="/">
            <p>Privacy</p>
          </Link>
          <Link to="/">
            <p>Driver Privacy</p>
          </Link>
        </div>

        <div className="link-4">
          <h4>Support</h4>
          <Link to="/">
            <p>Contact Us</p>
          </Link>

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
