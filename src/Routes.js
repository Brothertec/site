import React from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';

import Nav from './componentes/Nav';
import Banner from './componentes/Banner';
import Sobre from './componentes/Sobre';
import Projetos from './componentes/Projetos';
import Footer from './componentes/Footer';
import Contato from './componentes/Contato';

import BrotherTec from './componentes/BrotherTec';

export default function Routes(props) {
    return (
        <div>
        <header>
            {/* <Nav /> */}
            <Banner />
        </header>
        <main className= "main">
            <Projetos />
            <Sobre />
            <Contato />
        </main>
        <Footer />
    </div>
    );
}
