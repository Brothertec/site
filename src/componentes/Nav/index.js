import React from 'react';
import logoImg from '../../img/logo-app.png';
import './nav.css';


export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img className="logo-app" src={logoImg} alt="logo"   ></img>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menuSite" aria-controls="menuSite" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="menuSite">
                    <ul className="navbar-nav ">
                        <li className="nav-item active nav-active">
                            <a className="nav-link" href="#">Início <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Projetos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sobre nós</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};
