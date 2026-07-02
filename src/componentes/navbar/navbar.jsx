import { useState, useEffect } from "react";
import './navbar.css';

function Navbar({ parallaxRef }) {
  const [active, setActive] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 950);

  // Configuração centralizada dos destinos
  const navItems = [
    { name: "Início", id: 0, desktop: 0, mobile: 0 },
    { name: "Sobre", id: 1, desktop: 1, mobile: 0.6 },
    { name: "Topicos", id: 2, desktop: 2, mobile: 1.74 },
    { name: "Contato", id: 3, desktop: 3, mobile: 4 },
    { name: "Quem somos?", id: 4, desktop: 4, mobile: 5.15 }
  ];

  // Monitora redimensionamento para ajustar o isMobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 950);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lógica inteligente de Scroll (não usa Math.round)
  useEffect(() => {
    const handleScrollUpdate = () => {
      const container = parallaxRef.current?.container.current;
      if (!container) return;

      const scrollPosition = container.scrollTop;
      const pageHeight = window.innerHeight;
      const currentScroll = scrollPosition / pageHeight;

      // Encontra qual item está ativo baseando-se nos offsets definidos
      const activeItem = navItems.find((item, index) => {
        const threshold = isMobile ? item.mobile : item.desktop;
        const nextThreshold = navItems[index + 1] 
          ? (isMobile ? navItems[index + 1].mobile : navItems[index + 1].desktop) 
          : threshold + 1;
        
        // Margem de erro de 0.2 para suavizar a transição
        return currentScroll >= threshold - 0.2 && currentScroll < nextThreshold - 0.2;
      });

      if (activeItem && activeItem.id !== active) {
        setActive(activeItem.id);
      }
    };

    const container = parallaxRef.current?.container.current;
    container?.addEventListener("scroll", handleScrollUpdate);
    return () => container?.removeEventListener("scroll", handleScrollUpdate);
  }, [parallaxRef, active, isMobile]);

  const handleScroll = (item) => {
    const destino = isMobile ? item.mobile : item.desktop;
    parallaxRef.current?.scrollTo(destino);
    setIsMenuOpen(false);
    setActive(item.id);
  };

  return (
    <>
      <nav className="navbar-global">
        <div className="navbar-logo">
          <button onClick={() => handleScroll(navItems[0])} className="nav-btn-logo">
            <div id='img-logo-nav'></div>
          </button>
        </div>

        <button className="hamburger" onClick={() => setIsMenuOpen(true)}>☰</button>

        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleScroll(item)}
                className={`nav-link-btn ${active === item.id ? 'active' : ''}`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {isMenuOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)} />}
    </>
  );
}

export default Navbar;