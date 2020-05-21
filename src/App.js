import React from 'react';
import Nav from './componentes/Nav';
import Header from './componentes/Header';
import Integrante from './componentes/Integrante';

import imgRomulo from './img/romulo.jpeg';

import './global.css';

function App() {
  return (
    <Integrante imagem={imgRomulo} nome="Romulo Gomes" funcao="Desenvolvedor" descricao="O mais Pika Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>

  );
}

export default App;
