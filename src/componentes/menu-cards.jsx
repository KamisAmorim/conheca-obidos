import { ParallaxLayer } from "@react-spring/parallax";
import CardNavegacao from '../componentes/card/card';
import imgTurismo from '../assets/img/cards/turismo.jpeg';
import imgHistoriaCultura from '../assets/img/cards/historia-cultura.png'
import imgMoradia from '../assets/img/cards/moradia.jpeg'
import imgEdu from '../assets/img/cards/educacao.jpeg'
import imgPontos from '../assets/img/cards/pontos.jpeg'
import imgInfo from '../assets/img/cards/informacao.jpeg'
import Listras from "./listra/listra";

function MenuCards() {
    const cards = [
        { titulo: "História e Cultura", link: "conheca-obidos/historia-cultura", imagem: imgHistoriaCultura },
        { titulo: "Turismo", link: "conheca-obidos/turismo", imagem: imgTurismo },
        { titulo: "Moradia", link: "conheca-obidos/moradia", imagem: imgMoradia },
        { titulo: "Educação", link: "conheca-obidos/educacao", imagem: imgEdu },
        { titulo: "Pontos Importantes", link: "conheca-obidos/pontos-impostantes", imagem: imgPontos },
        { titulo: "Informações Gerais", link: "conheca-obidos/informacoes-gerais", imagem: imgInfo }
    ];

    return (
        <ParallaxLayer offset={2} speed={0}>
            <Listras/>
            <div id="menu-cards">
                <h2>Por Onde Desejas Começar?<div className="barra-destaque"></div></h2>
                <div id="bloco-card">
                    <div id="row01">
                        {cards.map((item, index) => (
                            <CardNavegacao key={index} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </ParallaxLayer>
    )
}
export default MenuCards;