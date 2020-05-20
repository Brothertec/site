import React from 'react';

export default function Integrante({ imagem, nome, funcao, descricao }) {
    return (
        <div className="integrante">
            <img src={imagem} alt="" className="integrante-imagem" />
            <h3 className="integrante-nome">{nome}</h3>
            <span className="integrante-funcao">{funcao}</span>
            <span className="integrante-funcao">{descricao}</span>
        </div>
    );

}