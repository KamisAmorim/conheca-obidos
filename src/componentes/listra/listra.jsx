import React from 'react';
import './listra.css';

export default function Listras({
  cor1 = '#FFE677',       // Vermelho padrão
  cor2 = '#C7A300',       // Azul padrão
  velocidade = '2s',      // Tempo da animação
  tamanhoListra = '80px', // Tamanho do padrão
  children                // Para você colocar texto ou links dentro
}) {
  
  // Criamos o estilo dinâmico para injetar as cores e variáveis no CSS
  const estiloDinamico = {
    backgroundImage: `linear-gradient(
      45deg,
      ${cor1} 25%,
      ${cor2} 25%,
      ${cor2} 50%,
      ${cor1} 50%,
      ${cor1} 75%,
      ${cor2} 75%,
      ${cor2} 100%
    )`,
    backgroundSize: `${tamanhoListra} ${tamanhoListra}`,
    animationDuration: velocidade,
    '--tamanho-deslocamento': tamanhoListra // Passa o tamanho para o Keyframes do CSS
  };

  return (
    <div className="barra-container">
      <div className="listras-animadas" style={estiloDinamico}></div>
      {children && <div className="conteudo-barra">{children}</div>}
    </div>
  );
}