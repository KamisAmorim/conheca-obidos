import { useState, useEffect } from "react";
import './navbar.css';

function Navbar({ parallaxRef }) {
  const [active, setActive] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Efeito para monitorar o scroll
  useEffect(() => {
    // Função que calcula a página ativa
    const handleScrollUpdate = () => {
      const container = parallaxRef.current?.container.current;
      if (container) {
        const scrollPosition = container.scrollTop;
        const pageHeight = window.innerHeight;
        const currentPage = Math.round(scrollPosition / pageHeight);
        
        // Só atualiza o estado se for diferente para evitar renderizações desnecessárias
        if (currentPage !== active) {
          setActive(currentPage);
        }
      }
    };

    // Pequeno atraso para garantir que o parallaxRef esteja montado no mobile
    const timer = setTimeout(() => {
      const container = parallaxRef.current?.container.current;
      if (container) {
        container.addEventListener("scroll", handleScrollUpdate);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
      const container = parallaxRef.current?.container.current;
      if (container) {
        container.removeEventListener("scroll", handleScrollUpdate);
      }
    };
  }, [parallaxRef, active]);

  // Efeito para fechar o menu se a tela aumentar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (index) => {
    setActive(index);
    parallaxRef.current?.scrollTo(index);
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Início", id: 0 },
    { name: "Sobre", id: 1 },
    { name: "Topicos", id: 2 },
    { name: "Contato", id: 3 },
    { name: "Quem somos?", id: 4 }
  ];

  return (
    <>
      <nav className="navbar-global">
        <div className="navbar-logo">
          <button onClick={() => handleScroll(0)} className="nav-btn-logo">
            <div id='img-logo-nav'></div>
          </button>
        </div>

        <button className="hamburger" onClick={() => setIsMenuOpen(true)}>☰</button>

        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
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

      {isMenuOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)} />}
    </>
  );
}

export default Navbar;