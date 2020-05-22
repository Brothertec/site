import React from 'react';
import logoImg from '../../img/logo-web.png';
import {FaBars} from 'react-icons/fa';


import './nav.css';
import { NavHashLink } from 'react-router-hash-link';


export default function Nav() {
    function setActive(e){
        const links = document.querySelectorAll('.nav-link');

        links.forEach(element => {
            element.classList.remove('selected');
        });

        e.target.classList.add('selected');
    }

    return (
        <nav className="navbar navbar-expand-lg nav--brothertec fixed-top ">
            <div className="container">
                <a className="navbar-brand" href="#banner">
                    <img className="logo-app nav-imagem" src={logoImg} alt="logo"   ></img>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menuSite" aria-controls="menuSite" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><FaBars size={30} color="#0063B1" /></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="menuSite">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <NavHashLink className="nav-link selected" smooth to="/#banner" exact onClick={(e) =>setActive(e)}>Início</NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink className="nav-link" smooth to="/#projetos" exact onClick={(e) =>setActive(e)}>Projetos</NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink className="nav-link" smooth to="/#sobre" exact onClick={(e) =>setActive(e)}>Sobre nós</NavHashLink>
                        </li>
                        <li className="nav-item">
                            <NavHashLink className="nav-link" smooth to="/#contato" exact onClick={(e) =>setActive(e)}>Contato</NavHashLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};
