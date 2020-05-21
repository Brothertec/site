import React from 'react';
import cardImg from '../../img/card-image.png';

import './card.css';

export default function Card() {
  return (
    <div className="card card--brothertec" >
      <img src={cardImg} className="card-img-top image-card" alt="..." />
      <div className="card-body">
        <span className="badge badge-card">Website</span>
        <h5 className="card-title">Colégio Jardim Getsêmani</h5>
        <p className="card-text">bla bla bla</p>
        <a href="#" className="btn btn-primary botao-card">Acessar projeto</a>
      </div>
    </div>
  );
}