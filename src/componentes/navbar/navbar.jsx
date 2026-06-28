import './navbar.css';

function Navbar({ parallaxRef }) {
  console.log("Navbar renderizou");
  const isMobile = window.innerWidth < 768;
  return (
    <nav className="navbar-global" >
      <div className="navbar-logo">
        <button
          onClick={() => parallaxRef.current?.scrollTo(0)}
          className="nav-btn-logo">
          <div id='img-logo-nav'></div>
        </button>
      </div>

      <ul className="navbar-links">
        <li>
          <button
            onClick={() => parallaxRef.current?.scrollTo(0)}
            className="nav-link-btn"
          >
            Início
          </button>
        </li>

        <li>
          <button
            onClick={() => parallaxRef.current?.scrollTo(1)}
            className="nav-link-btn"
          >
            Sobre
          </button>
        </li>

        <li>
          <button
            onClick={() => parallaxRef.current?.scrollTo(2)}
            className="nav-link-btn"
          >
            Topicos
          </button>
        </li>

        <li>
          <button
            onClick={() => parallaxRef.current?.scrollTo(isMobile? 4.5:3)}
            className="nav-link-btn"
          >
            Contato
          </button>
        </li>

        <li>
          <button
            onClick={() => parallaxRef.current?.scrollTo(isMobile? 4.5:4)}
            className="nav-link-btn"
          >
            Quem somos?
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;