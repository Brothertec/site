import React from 'react';

import imgRomulo from '../../img/romulo.jpeg';
import Integrante from '../Integrante';

import './sobre.css';

export default function Sobre() {
    return (
        <section className="section-sobre">
            <div className="container">
                <h2 className="sobre-titulo">Sobre nós</h2>
                <p className="sobre-descricao">A BrotherTec surgiu da iniciativa de amigos profissionais da área da TI que perceberam que, juntos, possuem habilidades que se completam para desenvolver e conduzir projetos web de sucesso.</p>
                <p className="sobre-descricao">Conheça a equipe:</p>

                <div className="row">
                    <div className="col-12 col-sm-4">
                        <Integrante imagem={imgRomulo} nome="Romulo Gomes" funcao="Desenvolvedor" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                        <hr className="separador-mobile" />
                    </div>
                    <div className="col-12 col-sm-4">
                        <Integrante imagem={imgRomulo} nome="Romulo Gomes" funcao="Desenvolvedor" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                        <hr className="separador-mobile" />
                    </div>
                    <div className="col-12 col-sm-4">
                        <Integrante imagem={imgRomulo} nome="Romulo Gomes" funcao="Desenvolvedor" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />

                    </div>
                </div>
            </div>
        </section>
    );
}