import { Parallax } from '@react-spring/parallax';
import { BrowserRouter } from 'react-router-dom'; // IMPORTANTE
import Navbar from './componentes/navbar/navbar';
import BemVindo from './componentes/Bemvindo';
import SobrePagina from './componentes/Sobre-a-pagina';
import Contatos from './componentes/contato';
import MenuCards from './componentes/menu-cards';
import SobreDevs from './componentes/sobre-os-devs';

import { useRef } from 'react';
import './App.css';

function App() {
  const parallaxRef = useRef();
  const isMobile = window.innerWidth < 768;

  return (
    <BrowserRouter> 
      <Navbar parallaxRef={parallaxRef} />
      <Parallax ref={parallaxRef} pages={isMobile? 7.1:5.1} className='animation'>
        {/* O ParallaxLayer já organiza o posicionamento, não use <section> */}
        <BemVindo /> 
        <div id="fundo-geral">
          <SobrePagina />
          <MenuCards />
          <Contatos/>
          <SobreDevs/>
        </div>
      </Parallax>
    </BrowserRouter>
  );
}

export default App;