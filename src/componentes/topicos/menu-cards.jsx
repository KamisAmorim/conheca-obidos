import { ParallaxLayer } from "@react-spring/parallax";
import CardNavegacao from '../card/card';
import imgTurismo from '../../assets/img/cards/turismo.jpeg';
import imgHistoriaCultura from '../../assets/img/cards/historia-cultura.png';
import imgMoradia from '../../assets/img/cards/moradia.jpeg';
import imgEdu from '../../assets/img/cards/educacao.jpeg';
import imgPontos from '../../assets/img/cards/pontos.jpeg';
import imgInfo from '../../assets/img/cards/informacao.jpeg';
import Listras from "../listra/listra";
import './menu-cards.css';

function MenuCards() {
    const isMobile = window.innerWidth < 950;

    const cards = [
        { titulo: "História e Cultura", link: "/conheca-obidos/paginas/historia.html", imagem: imgHistoriaCultura },
        { titulo: "Turismo", link: "/conheca-obidos/", imagem: imgTurismo },
        { titulo: "Moradia", link: "/conheca-obidos/moradia.html", imagem: imgMoradia },
        { titulo: "Educação", link: "/conheca-obidos/educacao.html", imagem: imgEdu },
        { titulo: "Pontos Importantes", link: "/conheca-obidos/pontos-importantes.html", imagem: imgPontos },
        { titulo: "Informações Gerais", link: "/conheca-obidos/informacoes-gerais.html", imagem: imgInfo }
    ];

    return (
        <ParallaxLayer offset={isMobile ? 1.74 : 2} speed={0}>
            <Listras/>
            <div id="menu-cards">
                <h2>Para Onde Vais?<div className="barra-destaque"></div></h2>
                <div id="bloco-card">
                    <div id="row01">
                        {cards.map((item, index) => (
                            <div 
                                key={index} 
                                className="card-click-wrapper"
                                onClick={() => window.location.href = item.link}
                            >
                                <CardNavegacao {...item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </ParallaxLayer>
    )
}
export default MenuCards;