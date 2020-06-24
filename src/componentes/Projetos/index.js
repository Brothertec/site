import React from 'react';
import Card from '../Card';

import cardImg from '../../img/card-image.png';
import './projetos.css';

export default function Projetos() {
    return (
        <section className="projetos" id="projetos">
            <div className="container">
                <h2 className= "projeto-titulo">Projetos</h2>
                <div className="row row-cols-1 row-cols-sm-2">
                    <div className="col mb-4 offset-sm-3">
                        <Card imagem={cardImg}
                            badge="Website"
                            titulo="Colégio Jardim Getsêmani"
                            texto="Website provisório desenvolvido para o Colégio Jardim Getsêmani em caráter emergencial devido às necessidades de educação à distância por conta da pandemia do Covid-19. Projeto permanente em desenvolvimento."
                            botao="https://trello.com/b/mAf3JWJn/site-col%C3%A9gio-jardim-gets%C3%AAmani-20"/>
                    </div>
                </div>
            </div>
        </section>
    )
};