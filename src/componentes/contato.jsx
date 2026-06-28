import { ParallaxLayer } from "@react-spring/parallax";
import Listras from "./listra/listra";

function Contatos() { // Nome da função igual ao export

    const isMobile = window.innerWidth < 768;
    return (
        // Se for a terceira página, o offset deve ser 2
        <ParallaxLayer offset={isMobile? 4.5:3} speed={0}>
        <div id="contato">
            <div className="contato-container">
            <h2><div>Entre em Contato</div></h2>
            <div id="formzin">
                <form className="form-contato">
                    <input type="text" placeholder="Seu nome" required />
                    <input type="email" placeholder="Seu e-mail" required />
                    <textarea placeholder="Como podemos ajudar?" required />
                    <button type="submit">Enviar Mensagem</button>
                </form>
                
                <div className="info-contato">
                    <p>contato@obidos.com</p>
                    <p>(93) 99999-9999</p>
                    <div className="redes-sociais">
                    {/* Ícones aqui */}
                    </div>
                </div>
            </div>
            </div>
        </div>
        </ParallaxLayer>
    );
}

export default Contatos;