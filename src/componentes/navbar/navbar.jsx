import './navbar.css';

function Navbar({ parallaxRef }) {
  console.log("Navbar renderizou");
  return (
    <nav className="navbar-global" >
      <div className="navbar-logo">
        <button
          onClick={() => parallaxRef.current?.scrollTo(0)}
          className="nav-btn-logo"
        >
          <div id='img-logo-nav'></div>
          <div id='text-logo'>
            <span id='filho1'>conheça</span>
            <span id='filho2'>ÓBIDOS</span>
          </div>
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
            onClick={() => parallaxRef.current?.scrollTo(0.938)}
            className="nav-link-btn"
          >
            Sobre
          </button>
        </li>

        <li>
          <button
            onClick={() => parallaxRef.current?.scrollTo(1.3)}
            className="nav-link-btn"
          >
            Galeria
          </button>
        </li>

        <li>
          <button
            onClick={() => parallaxRef.current?.scrollTo(3)}
            className="nav-link-btn"
          >
            Contato
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;