import { ParallaxLayer } from "@react-spring/parallax";
import { FaGithub, FaInstagram } from "react-icons/fa";
import kamis from "../assets/img/gerais/kamis01.png"
import Rob from "../assets/img/gerais/rob.png"

function SobreDevs() {
  const isMobile = window.innerWidth < 768;
  const desenvolvedores = [
    {
      nome: "Kamis Souza",
      cargo: "Desenvolvedora",
      foto: kamis, // Substitua pelo caminho da sua imagem
      github: "https://github.com/KamisAmorim",
      instagram: "https://www.instagram.com/kamis_sou.za?igsh=ZTVldGF5M2xnN2Y2",
    },
    {
      nome: "RobGol Viana",
      cargo: "Desenvolvedora",
      foto: Rob, // Substitua pelo caminho da imagem do colega
      github: "https://github.com/colega",
      instagram: "https://instagram.com/colega",
    },
  ];

  return (
    <ParallaxLayer offset={isMobile? 5.5:4} speed={0}>
      <div id="sobre">
        <h2><div>Quem Somos</div></h2>
        <div className="dev-container">
          {desenvolvedores.map((dev, index) => (
            <div key={index} className="dev-card">
              <div 
                className="foto-perfil" 
                style={{ backgroundImage: `url(${dev.foto})` }}
              ></div>
              <h3>{dev.nome}</h3>
              <p className="cargo">{dev.cargo}</p>
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
      </div>
    </ParallaxLayer>
  );
}

export default SobreDevs;