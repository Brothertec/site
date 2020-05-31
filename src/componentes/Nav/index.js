import React, { useEffect } from 'react';
import logoImg from '../../img/logo-web.png';
import {FaBars} from 'react-icons/fa';


import './nav.css';
import { NavHashLink } from 'react-router-hash-link';


export default function Nav() {
    useEffect(() => window.addEventListener('scroll', function() {
        const links = document.querySelectorAll('.nav-link');
        this.console.log('scrolling');
        this.console.log(window.scrollY);
        if (window.scrollY < 500) {
            setActiveLink(links[0])
        }
        else if (window.scrollY >= 500 && window.scrollY < 1200) {
            setActiveLink(links[1])
        }
        else if (window.scrollY >= 1200 && window.scrollY <1360) {
            setActiveLink(links[2])
        }
        else {
            setActiveLink(links[3])
        }
    }));
    
    function setActive(e){
        const links = document.querySelectorAll('.nav-link');

        links.forEach(element => {
            element.classList.remove('selected');
        });

        e.target.classList.add('selected');
    }

    function setActiveLink(link){
        const links = document.querySelectorAll('.nav-link');

        links.forEach(element => {
            element.classList.remove('selected');
        });

        link.classList.add('selected');
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
                            <NavHashLink className="nav-link selected" smooth to="/#banner" exact>Início</NavHashLink>
                        </li>
                        <li className="nav-item nav-item--brothertec">
                            <NavHashLink className="nav-link" smooth to="/#projetos" exact>Projetos</NavHashLink>
                        </li>
                        <li className="nav-item nav-item--brothertec">
                            <NavHashLink className="nav-link" smooth to="/#sobre" exact>Sobre nós</NavHashLink>
                        </li>
                        <li className="nav-item nav-item--brothertec">
                            <NavHashLink className="nav-link" smooth to="/#contato" exact>Contato</NavHashLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};
