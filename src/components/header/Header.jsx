import React, { useState } from 'react';
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const links = [
  {
    name: '',
    link: '/',
  },
  {
    name: 'Services',
    link: '/services',
  },
  {
    name: 'Drivers',
    link: '/drivers',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
  {
    name: 'FAQS',
    link: '/faqs',
  },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src=".src/assets/XOBO-LOGO-HEADER.png" alt="Your Logo" />
      </div>
      <nav className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
        {links.map((link) => (
          <ul key={link.link}>
            <li>
              <a href={link.link}>{link.name}</a>
            </li>
          </ul>
        ))}
        <ul>
          <li>
            <button
              className={`action-button ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              Transport Login
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
