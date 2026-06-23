import { Parallax } from '@react-spring/parallax';
import { BrowserRouter } from 'react-router-dom'; // IMPORTANTE
import Navbar from './componentes/navbar/navbar';
import BemVindo from './componentes/Bemvindo';
import SobrePagina from './componentes/Sobre-a-pagina';
import Contatos from './componentes/contato';
import MenuCards from './componentes/menu-cards';

import { useRef } from 'react';
import './App.css';

function App() {
  const parallaxRef = useRef();

  return (
    <BrowserRouter> 
      <Navbar parallaxRef={parallaxRef} />
      <Parallax ref={parallaxRef} pages={5} className='animation'>
        {/* O ParallaxLayer já organiza o posicionamento, não use <section> */}
        <BemVindo /> 
        <SobrePagina />
        <MenuCards />
        <Contatos/>
      </Parallax>
    </BrowserRouter>
  );
}

export default App;