import { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import "./header.css";

const navLinks = [
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
    link: '/faq',
  },
];

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const navRef = useRef();

  const toggleNavbar = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={process.env.PUBLIC_URL + '/XDL-LOGO.png'} alt="XDL Logo" />
        </Link>
      </div>

      <nav className={isNavVisible ? "responsive_nav" : "hidden"}>
        {navLinks.map((link) => (
          <ul key={link.link}>
            <li>
              <a href={link.link}>{link.name}</a>
            </li>
          </ul>
        ))}

        <a href="#">
          <button className="orderBtn">
            Transport Login
          </button>
        </a>
      </nav>

      <button
        className={`nav-btn ${isNavVisible ? "nav-close-btn" : ""}`}
        onClick={toggleNavbar}
      >
        {isNavVisible ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}

export default Header;
