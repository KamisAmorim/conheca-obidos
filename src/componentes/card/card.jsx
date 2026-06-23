import React from 'react';
import { Link } from 'react-router-dom'; // Se estiver usando React Router
import './card.css';

const CardNavegacao = ({ titulo, imagem, link }) => {
  return (
    <Link to={link} className="card-link">
      <div className="card-item">
        <img src={imagem} alt={titulo} />
        <div className="card-content">
          <h3>{titulo}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CardNavegacao;