import { ParallaxLayer } from "@react-spring/parallax";

function Contatos() { // Nome da função igual ao export

    const isMobile = window.innerWidth < 768;
    return (
        // Se for a terceira página, o offset deve ser 2
        <ParallaxLayer offset={isMobile? 4.5:3} speed={0}>
        <div id="contato">
            <h2>ENTRE EM CONTATO</h2>
            <div className="contato-container">
            <form className="form-contato">
                <input type="text" placeholder="Seu nome" required />
                <input type="email" placeholder="Seu e-mail" required />
                <textarea placeholder="Como podemos ajudar?" required />
                <button type="submit">Enviar Mensagem</button>
            </form>
            
            <div className="info-contato">
                <p>📧 contato@obidos.com</p>
                <p>📱 (93) 99999-9999</p>
                <div className="redes-sociais">
                {/* Ícones aqui */}
                </div>
            </div>
            </div>
        </div>
        </ParallaxLayer>
    );
}

export default Contatos;