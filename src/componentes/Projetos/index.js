import React from 'react';
import Card from '../Card';

import cardImgDFDist from '../../img/card-image-df-distribuidora.jpg';
import cardImgColegio from '../../img/card-image-colegio.jpg';
import cardImgCasaProject2020 from '../../img/card-image-casaproject-2020.jpg';
import cardImgCasaLiquidecora from '../../img/card-image-liquidecora.jpg';
import cardImgVitrine from '../../img/card-image-vitrine.jpg';
import cardImgAbcPublica from '../../img/card-image-abcpublica.jpg';
import './projetos.css';

export default function Projetos() {
    return (
        <section className="projetos" id="projetos">
            <div className="container">
                <h2 className= "projeto-titulo">Projetos em destaque</h2>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <Card imagem={cardImgAbcPublica}
                            badge="Portal e e-Commerce"
                            titulo="ABCPública"
                            texto="Novo Portal da Associação Brasileira de Comunicação Pública. Destaque para espaço de notícias, Biblioteca Digital, Mapa da Regulamentação e estrutura majoritariamente acessível. Principais tecnologias: WordPress, WooCommerce, criação de CPTs, PHP, MySQL, HTML, CSS, JS."
                            botao="https://abcpublica.org.br/" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <Card imagem={cardImgVitrine}
                            badge="Website e Gerenciador de Conteúdo"
                            titulo="Vitrine CasaPark"
                            texto="Desenvolvimento de duas versões (incluindo a atual) do site Vitrine CasaPark com gerenciador para atualizações de conteúdo. Em parceria com a designer Emille Catarine. Principais tecnologias: HTML, CSS, JS, Bootstrap 4, React, MySQL, NodeJS."
                            botao="https://vitrine.casapark.com.br/" />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <Card imagem={cardImgCasaLiquidecora}
                            badge="Website"
                            titulo="Liquidecora 2021"
                            texto="Programação front-end do projeto Liquidecora. É um hotsite sazonal promocional para grandes descontos que o CasaPark oferece de tempos em tempos. Em parceria com a designer Emille Catarine. Principais tecnologias: HTML, CSS, JS, Bootstrap 4, React, NodeJS."
                            /* botao="http://www.colegiojardimgetsemani.com.br/" */ />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <Card imagem={cardImgCasaProject2020}
                            badge="Website"
                            titulo="CasaProject 2020"
                            texto="Programação front-end do site CasaProject de 2020 - um concurso promovido pelo shopping CasaPark, voltado para arquitetura e design de interiores. Em parceria com a designer Emille Catarine. Principais tecnologias: HTML, CSS, JS, Bootstrap 4, Handlebars, NodeJS."
                            /* botao="http://www.colegiojardimgetsemani.com.br/" */ />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <Card imagem={cardImgColegio}
                            badge="Website e Gerenciador de Conteúdo"
                            titulo="Colégio Jardim Getsêmani"
                            texto="Site totalmente desenvivido pela BrotherTec o planejamento, design e programação. Conta com área do aluno, criada em caráter emergencial para acompanhamento de aulas à distância durante o período de isolamento de 2020/2021. Principais tecnologias: Figma (design), HTML, CSS, JS, Bootstrap 4, React, NodeJS."
                            /* botao="http://www.colegiojardimgetsemani.com.br/" */ />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4">
                        <Card imagem={cardImgDFDist}
                            badge="Website"
                            titulo="DF Distribuidora"
                            texto="Planejamento, consultoria na organização de conteúdo, design e programação majoritária do site DF Distribuidora. Principais tecnologias: (Figma) Design, HTML, CSS, JS, Bootstrap 4, React."
                            /* botao="http://www.colegiojardimgetsemani.com.br/" */ />
                    </div>
                </div>
            </div>
        </section>
    )
};