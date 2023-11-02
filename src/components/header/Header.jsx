import './header.css'
import { Link } from 'react-router-dom';

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
    link: '/faq',
  },
];

function Header() {

  return (
    <header className="header">
      <div className="logo">
      <Link to ="/">
        <img src={process.env.PUBLIC_URL + '/XDL-LOGO.png'} alt="XDL Logo" />
        </Link> 
      </div>
      <nav>
        {links.map((link) => (
          <ul key={link.link}>
            <li>
              <a href={link.link}>{link.name}</a>
            </li>
          </ul>
        ))}
        <ul>
          <li>
              <a href="http://18.130.30.102/xobo">
              <button>
                Transport Login
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
