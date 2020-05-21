import React from 'react';

import './integrante.css';

export default function Integrante({ imagem, nome, funcao, descricao }) {
    return (
        <div className="integrante">
            <div className="integrante-div-imagem">
                <img src={imagem} alt="" className="integrante-imagem" />
            </div>
            <h3 className="integrante-nome">{nome}</h3>
            <span className="integrante-funcao">{funcao}</span>
            <span className="integrante-descricao">{descricao}</span>
        </div>
    );

}