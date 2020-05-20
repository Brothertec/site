import React from 'react';

import websiteImg from '../../img/websites.png';
import aplicativosImg from '../../img/aplicativos.png';
import sistemasWebImg from '../../img/sistemas-web.png';

import './header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="titulo">
                    <h1>Soluções sob medida<br />para impulsionar o <br /><span>seu negócio</span></h1>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <span className="icon-title">Websites</span>
                        <img className="icon-image website" src={websiteImg} alt="Website" />
                    </div>
                    <div className="col-6 col-md-4">
                        <span className="icon-title">Aplicativos</span>
                        <img className="icon-image" src={aplicativosImg} alt="Aplicativos" />
                    </div>
                    <div className="col-6 col-md 4">
                        <span className="icon-title">Sistemas Web</span>
                        <img className="icon-image" src={sistemasWebImg} alt="Sistemas" />
                    </div>
                </div>
            </div>
        </header>
    )
}