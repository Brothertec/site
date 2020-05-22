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
                    <div className="col mb-4">
                        <Card imagem={cardImg}
                            badge="Website"
                            titulo="Colégio Jardim Getsêmani"
                            texto="site colegio não sei o que exigiu não sei mais o que e foi idealizado não sei o que, produzido não sei que mais, visual trabalhado para publico infantil, com cores não sei o que, e precisou de não sei mais, com um toque de não sei o que mais e não sei o que lá"
                            botao="" />
                    </div>
                    <div className="col mb-4">
                        <Card imagem={cardImg}
                            badge="Website"
                            titulo="Colégio Jardim Getsêmani"
                            texto="site colegio não sei o que exigiu não sei mais o que e foi idealizado não sei o que, produzido não sei que mais, visual trabalhado para publico infantil, com cores não sei o que, e precisou de não sei mais, com um toque de não sei o que mais e não sei o que lá"
                            botao="" />
                    </div>
                </div>
            </div>
        </section>
    )
};