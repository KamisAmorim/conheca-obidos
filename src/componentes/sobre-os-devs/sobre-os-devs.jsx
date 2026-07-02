import { ParallaxLayer } from "@react-spring/parallax";
import { FaGithub, FaInstagram } from "react-icons/fa";
import kamis from "../../assets/img/gerais/kamis01.png";
import Rob from "../../assets/img/gerais/rob.png";
import Listras from "../listra/listra";
import './sobre-devs.css'

function SobreDevs() {
  const isMobile = window.innerWidth < 950;
  const desenvolvedores = [
    {
      nome: "Kamis Souza",
      cargo: "Desenvolvedora",
      foto: kamis,
      github: "https://github.com/KamisAmorim",
      instagram: "https://www.instagram.com/kamis_sou.za?igsh=ZTVldGF5M2xnN2Y2",
    },
    {
      nome: "RobGol Viana",
      cargo: "Desenvolvedor",
      foto: Rob,
      github: "https://github.com/colega",
      instagram: "https://instagram.com/colega",
    },
  ];

  return (
    <ParallaxLayer offset={isMobile ? 5.15 : 4} speed={0}>
      <Listras />
      <div id="sobre">
        <h2 className="titulo-secao">
          Quem Somos
          <div className="barra-destaque"></div>
        </h2>
        
        <div className="dev-container">
          {desenvolvedores.map((dev, index) => (
            <div key={index} className="dev-card">
              <div 
                className="foto-perfil" 
                style={{ backgroundImage: `url(${dev.foto})` }}
              ></div>
              <h3>{dev.nome}</h3>
              <p className="cargo">{dev.cargo}</p>
              
              <p className="convite-social">Conheça-nos melhor através do nosso Instagram e/ou GitHub:</p>
              
              <div className="links">
                <a href={dev.github} target="_blank" rel="noreferrer" title="GitHub">
                  <FaGithub />
                </a>
                <a href={dev.instagram} target="_blank" rel="noreferrer" title="Instagram">
                  <FaInstagram />
                </a>
              </div>
            </div>
          ))}
        </div>

        <footer className="footer">
            <div className="footer-content">
                <h3 className="marca">Conheça Óbidos</h3>
                <p className="legenda">Um projeto dedicado à história e cultura da nossa cidade.</p>
                
                <div className="rodape-divider"></div>

                <div className="creditos">
                    <span>&copy; {new Date().getFullYear()}</span>
                    <span>Desenvolvido por Kamis Souza & RobGol Viana</span>
                </div>
            </div>
        </footer>
      </div>
    </ParallaxLayer>
  );
}

export default SobreDevs;