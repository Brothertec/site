import React from 'react';

import websiteImg from '../../img/websites.png';
import aplicativosImg from '../../img/aplicativos.png';
import sistemasWebImg from '../../img/sistemas-web.png';

import './header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <h1>Soluções sob medida para impulsionar o <span>seu negócio</span></h1>
                <div>
                    <span>Websites</span>
                    <img src={websiteImg} alt="Website" />
                </div>
                <div>
                    <span>Aplicativos</span>
                    <img src={aplicativosImg} alt="Aplicativos" />
                </div>
                <div>
                    <span>Sistemas Web</span>
                    <img src={sistemasWebImg} alt="Sistemas" />
                </div>
            </div>
        </header>
    )
}