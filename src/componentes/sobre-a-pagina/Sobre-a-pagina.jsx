import { ParallaxLayer } from "@react-spring/parallax";
import Listras from "../listra/listra";
import obidos from "../../assets/img/gerais/obidos-pixel.png";
import './sobre-a-pagina.css';

function SobrePagina() {
    const isMobile = window.innerWidth < 950;

    return (
        <ParallaxLayer offset={isMobile? 0.6 : 1} speed={0}>
        <Listras />
        <div id="bloco-sobre">
            <div className="card-sobre">
            <div id="sobre-texto">
                <h2>
                Sobre a Página
                <div className="barra-destaque"></div>
                </h2>
                <p>
                O site “Conheça Óbidos” tem como objetivo apresentar um guia completo sobre o
                município de Óbidos, no estado do Pará, reunindo informações sobre pontos turísticos,
                paisagens naturais, balneários, gastronomia local, opções de moradia para aluguel, vida
                cotidiana e aspectos culturais da cidade. O site é voltado para pessoas que desejam
                conhecer melhor o município antes de visitá-lo, trabalhar ou residir, oferecendo uma visão
                geral organizada e informativa da cidade.
                </p>
            </div>

            <figure className="sobre-img">
                <img src={obidos} alt="Cidade de Óbidos" />
            </figure>
            </div>
        </div>
        </ParallaxLayer>
    );
}

export default SobrePagina;