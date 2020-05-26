import React from 'react';

import './global.css';
import Nav from './componentes/Nav';
import Banner from './componentes/Banner';
import Sobre from './componentes/Sobre';
import Projetos from './componentes/Projetos';
import Footer from './componentes/Footer';
import Contato from './componentes/Contato';
// import Routes from './Routes';

function App() {
  return (
    <div>
      <header>
        {/* <Nav /> */}
        <Banner />
      </header>
      <main className="main">
        <Projetos />
        <Sobre />
        <Contato />
      </main>
      <Footer />
    </div>
  );
};

export default App;
