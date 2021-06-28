import React from 'react';

import Integrante from '../Integrante';

import imgRomulo from '../../img/romulo.jpeg';
import imgNayra from '../../img/nayra.jpg';
import imgEverson from '../../img/everson.jpeg';
import imgRodrigo from '../../img/rodrigo.jpg';
import imgVanessa from '../../img/vanessa.jpg';

import './sobre.css';

export default function Sobre() {
  return (
    <section className="section-sobre" id="sobre">
      <div className="container">
        <h2 className="sobre-titulo">Sobre nós</h2>
        <p className="sobre-descricao">
          A <strong>BrotherTec</strong> é uma cooperativa de soluções digitais. Surgiu da iniciativa de amigos profissionais da área de TI que perceberam que, juntos, possuem habilidades que se completam para conduzir e desenvolver projetos digitais. Como cooperados, aproveitamos a oportunidade para estudar, praticar em projetos reais ou de estudo e receber apoio da nossa comunidade. Contamos com profissionais de diferentes níveis de senioridade, que são alocados conforme a complexidade de cada projeto.
        </p>
        <p className="sobre-descricao">Conheça a equipe:</p>

        <div className="row">
          <div className="col-12 col-md-6">
            <div className="l-integrante">
              <Integrante
                imagem={imgNayra}
                nome="Nayra Cruz"
                funcao="UI/UX/Front-end/Product Designer"
                descricao="Meu foco é desenvolver produtos que vão de encontro às necessidades dos usuários, alinhadas ao modelo de negócio e às limitações financeiras e técnicas de cada projeto. Sou entusiasta no assunto Acessibilidade Digital. Nossos cooperados contam com minha mentoria."
              />
            </div>
            <hr className="separador-mobile" />
          </div>
          <div className="col-12 col-md-6">
            <div className="l-integrante">
              <Integrante
                imagem={imgRomulo}
                nome="Romulo Gomes"
                funcao="Desenvolvedor"
                descricao="Atuo na área de TI desde 2015. Minha especialidade é automação de testes, homologação e desenvolvimento de sistemas Java, Node.js e React. Sempre em busca de novos desafios! Sou um dos mentores na BrotherTec e líder técnico de projetos."
              />
            </div>
            <hr className="separador-mobile" />
          </div>
          <div className="col-12 col-md-6">
            <div className="l-integrante">
              <Integrante
                imagem={imgEverson}
                nome="Everson França"
                funcao="Desenvolvedor Full Stack"
                descricao="Sou um dos idealizadores da cooperativa. Atuo com programação front-end, iniciando pelo HTML, CSS e JS até o desenvolvimento mais avançado com React e consumo de APIs. Repasso os conhecimentos que possuo para os cooperados da BrotherTec."
              />
            </div>
            <hr className="separador-mobile" />
          </div>
          <div className="col-12 col-md-6">
            <div className="l-integrante">
              <Integrante
                imagem={imgRodrigo}
                nome="Rodrigo Sales"
                funcao="Desenvolvedor Full Stack"
                descricao="Trabalho na área de TI desde de 2014. Iniciei com suporte e monitoramento dos ativos de rede e sua estrutura. Em busca de novos desafios, entrei de cabeça nos estudos para ser o melhor desenvolvedor full stack, onde, atualmente, dedico grande parte do meu tempo."
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="l-integrante">
              <Integrante
                imagem={imgVanessa}
                nome="Vanessa Sousa"
                funcao="Desenvolvedora front-end e UX/UI designer"
                descricao="Atuo com tecnologia desde 2015. Venho me especializando em front-end e também em UX/UI design. Pronta sempre para novos desafios e para compartilhar conhecimento!"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
