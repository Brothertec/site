import React from 'react';
import Nav from '../Nav';
import Banner from '../Banner';
import Sobre from '../Sobre';
import Projetos from '../Projetos';
import Footer from '../Footer';
import Contato from '../Contato';

export default function BrotherTec() {
    return (
        <div>
            <header>
                <Nav />
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