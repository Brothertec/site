import React from 'react';
import Nav from './componentes/Nav';
import Header from './componentes/Header';

import Card from './componentes/Card';
import Projetos from './componentes/Projetos';




import './global.css';
import Sobre from './componentes/Sobre';

function App() {
  return (
    <div>
      <Nav />
      <Header />
      <Sobre />
      <Projetos />
    </div>
  )
};

export default App;
