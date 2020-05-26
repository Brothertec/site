import React from 'react';

import Integrante from '../Integrante';

import imgRomulo from '../../img/romulo.jpeg';
import imgNayra from '../../img/nayra.jpeg';
import imgEverson from '../../img/everson.jpeg';

import './sobre.css';

export default function Sobre() {
    return (
        <section className="section-sobre" id="sobre">
            <div className="container">
                <h2 className="sobre-titulo">Sobre nós</h2>
                <p className="sobre-descricao">A BrotherTec surgiu da iniciativa de amigos profissionais da área da TI que perceberam que, juntos, possuem habilidades que se completam para desenvolver e conduzir projetos web de sucesso.</p>
                <p className="sobre-descricao">Conheça a equipe:</p>

                <div className="row">
                    <div className="col-12 col-sm-4">
                        <Integrante imagem={imgNayra} nome="Nayra Cruz" funcao="Desenvolvedora Front-End e Designer UX" descricao="Trabalho na área web desde 2009. Minha participação principal na BrotherTec é a criação do Design dos projetos e códigos front-end com foco na experiência do usuário." />
                        <hr className="separador-mobile"/>
                    </div>
                    <div className="col-12 col-sm-4">
                        <Integrante imagem={imgEverson} nome="Everson França" funcao="Desenvolvedor Fullstack" descricao="Sou um dos idealizadores da empresa, com responsabilidades administrativas e de logística além de ser programador com especialidade em front-end." />
                        <hr className="separador-mobile"/>
                    </div>
                    <div className="col-12 col-sm-4">
                        <Integrante imagem={imgRomulo} nome="Romulo Gomes" funcao="Desenvolvedor" descricao="Atuando na área de TI desde 2015, estive na área de testes, homologação e desnvolvimento de sistemas Java, Node.js e React. Sempre em busca de novos desafios." />
                    </div>
                </div>
            </div>
        </section>
    );
}