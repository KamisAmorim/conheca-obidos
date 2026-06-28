import { ParallaxLayer } from "@react-spring/parallax";
import CardNavegacao from '../componentes/card/card';
import imgTurismo from '../assets/img/gerais/fundoConstrução.png';
import Listras from "./listra/listra";

function MenuCards() {
    const cards = [
        { titulo: "Turismo", link: "/turismo", imagem: imgTurismo },
        { titulo: "Gastronomia", link: "/gastronomia", imagem: imgTurismo },
        { titulo: "História", link: "/historia", imagem: imgTurismo },
        { titulo: "Turismo", link: "/turismo", imagem: imgTurismo },
        { titulo: "Gastronomia", link: "/gastronomia", imagem: imgTurismo },
        { titulo: "História", link: "/historia", imagem: imgTurismo }
    ];

    return (
        <ParallaxLayer offset={2} speed={0}>
            <Listras/>
            <div id="menu-cards">
                <h2><div>Por Onde Desejas Começar?</div></h2>
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