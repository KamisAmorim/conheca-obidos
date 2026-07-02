import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ParallaxLayer } from "@react-spring/parallax";
import Listras from "../listra/listra";
import obidos from "../../assets/img/gerais/obidos-pixel.png"; // Certifique-se do caminho da imagem
import "./contato.css"

function Contatos() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_h2cmqnx', 
            'template_jgw7o7c', 
            form.current, 
            'kALAvr-dSV0vYf12q'
        )
        .then(() => {
            alert("Mensagem enviada com sucesso!");
            form.current.reset();
        }, (error) => {
            console.error("Erro:", error);
            alert("Ocorreu um erro ao enviar. Tente novamente.");
        });
    };

    const isMobile = window.innerWidth < 950;

    return (
        <ParallaxLayer offset={isMobile? 4 : 3} speed={0}>
            <Listras />
            <div id="contato">
                <div className="card-contato">
                    {/* Imagem agora na esquerda */}
                    <figure className="contato-img">
                        <img src={obidos} alt="Contato Óbidos" />
                    </figure>

                    {/* Formulário na direita */}
                    <div className="contato-formulario">
                        <h2>
                            Entre em Contato
                            <div className="barra-destaque"></div>
                        </h2>
                        <p>Dúvidas ou sugestões? Envie uma mensagem para nossa equipe.</p>
                        
                        <form ref={form} onSubmit={sendEmail} className="form-contato-unico">
                            <input type="text" name="name" placeholder="Seu nome" required />
                            <input type="email" name="email" placeholder="Seu e-mail" required />
                            <textarea name="message" placeholder="Como podemos ajudar?" required />
                            <button type="submit">Enviar Mensagem</button>
                        </form>
                    </div>
                </div>
            </div>
        </ParallaxLayer>
    );
}

export default Contatos;