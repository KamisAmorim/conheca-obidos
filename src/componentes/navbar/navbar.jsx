import { useState } from "react";
import './navbar.css';

function Navbar({ parallaxRef }) {
  const [active, setActive] = useState(0);
  const isMobile = window.innerWidth < 768;

  const handleScroll = (index) => {
    setActive(index);
    parallaxRef.current?.scrollTo(index);
  };

  const navItems = [
    { name: "Início", id: 0 },
    { name: "Sobre", id: 1 },
    { name: "Topicos", id: 2 },
    { name: "Contato", id: isMobile ? 4.5 : 3 },
    { name: "Quem somos?", id: isMobile ? 4.5 : 4 }
  ];

  return (
    <nav className="navbar-global">
      <div className="navbar-logo">
        <button onClick={() => handleScroll(0)} className="nav-btn-logo">
          <div id='img-logo-nav'></div>
        </button>
      </div>

      <ul className="navbar-links">
        {navItems.map((item) => (
          <li key={item.name}>
            <button
              onClick={() => handleScroll(item.id)}
              className={`nav-link-btn ${active === item.id ? 'active' : ''}`}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;