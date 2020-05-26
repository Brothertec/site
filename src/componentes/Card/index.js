import React from 'react';


import './card.css';

export default function Card(props) {
  return (
    <div className="card card--brothertec" >
      <img src={props.imagem} className="card-img-top imagem-card" alt="..." />
      <div className="card-body">
        <span className="badge badge-card">{props.badge}</span>
        <h5 className="card-title titulo-card">{props.titulo}</h5>
        <p className="card-text texto-card">{props.texto}</p>
        <a href={props.botao} className="btn btn-primary botao-card" target="_blank">Acessar projeto</a>
      </div>
    </div>
  );
}