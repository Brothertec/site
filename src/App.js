import React from 'react';
import Nav from './componentes/Nav';
import Header from './componentes/Header';
import Integrante from './componentes/Integrante';
import Card from './componentes/Card';
import Projetos from './componentes/Projetos';


import imgRomulo from './img/romulo.jpeg';

import './global.css';

function App() {
  return (
   <div>
     <Projetos/>
     {/* <Card imagem={cardImg}
     badge="Website"
     titulo="Colégio Jardim Getsêmani"
     texto="site colegio não sei o que exigiu não sei mais o que e foi idealizado não sei o que, produzido não sei que mais, visual trabalhado para publico infantil, com cores não sei o que, e precisou de não sei mais, com um toque de não sei o que mais e não sei o que lá"
     botao=""/> */}
     {/* <Integrante imagem={imgRomulo} 
     nome="Romulo Gomes" 
     funcao="Desenvolvedor"
     descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
     <Integrante imagem={imgRomulo}
     nome="everson"
     funcao= "bspdksad"
     descricao="hdsaiuhdqaiusnbd" /> */}
     
   </div>
  )
};

export default App;
