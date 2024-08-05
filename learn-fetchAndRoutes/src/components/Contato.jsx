import React from 'react';
import './Contato.css';

const Contato = () => {
  return (
    <article className="contato-article">
      <img
        className="contato-img"
        src="path-to-your-image.jpg"
        alt="Descrição da imagem"
      />
      <aside className="contato-aside">
        <h2 className="contato-h2">Entre em contato</h2>
        <p className="contato-p">- email@email.com</p>
        <p className="contato-p">- 9 9999-9999</p>
        <p className="contato-p">- Rua Ali perto, 999</p>
      </aside>
    </article>
  );
};

export default Contato;
