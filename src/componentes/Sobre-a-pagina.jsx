import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Listras from "./listra/listra";
import obidos from "../assets/img/gerais/obidos-pixel.png"


function SobrePagina(){

    return(
            <ParallaxLayer offset={1} speed={0}>
                <Listras/>
                <div id="bloco-sobre">
                    <div id="sobre-texto">
                        <h2>
                            <div>
                                Sobre a Página
                            </div>
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

                    <figure>
                        <img src={obidos} alt="" />
                    </figure>
                </div>
            </ParallaxLayer>
    )
}

export default SobrePagina