import { useRef } from "react";
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



function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>

      <div className="logo">
      <Link to ="/">
        <img src={process.env.PUBLIC_URL + '/XDL-LOGO.png'} alt="XDL Logo" />
        </Link> 
      </div>

			<nav ref={navRef}>
      {navLinks.map((link) => (
          <ul key={link.link}>
            <li>
              <a href={link.link}>{link.name}</a>              
            </li>
            
          </ul>
          ))}
      
          <a href="http://18.130.30.102/xobo" target='blank'>
            <button className="orderBtn">
              Transport Login
            </button>
          </a>
      
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>

			</nav>

			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
      
		</header>
	);
}

export default Navbar;