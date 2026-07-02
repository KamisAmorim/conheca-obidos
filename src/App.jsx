import { Parallax } from '@react-spring/parallax';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './componentes/navbar/navbar';
import BemVindo from './componentes/bem-vindo/Bemvindo';
import SobrePagina from './componentes/sobre-a-pagina/Sobre-a-pagina';
import Contatos from './componentes/contato/contato';
import MenuCards from './componentes/topicos/menu-cards';
import SobreDevs from './componentes/sobre-os-devs/sobre-os-devs';
import "./App.css"

import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const parallaxRef = useRef();
  // Estado para rastrear se é mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 950);

  useEffect(() => {
    const handleResize = () => {
      const nowMobile = window.innerWidth < 950;
      // Só altera o estado se houver mudança real de categoria
      if (nowMobile !== isMobile) {
        setIsMobile(nowMobile);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  return (
    <BrowserRouter> 
      <Navbar parallaxRef={parallaxRef} />
      
      {/* A "key" abaixo é a chave do sucesso! 
        Sempre que 'isMobile' mudar, o React recria o Parallax.
        Isso força o recálculo de todas as posições dos ParallaxLayer.
      */}
      <Parallax 
        key={isMobile ? 'mobile' : 'desktop'}
        ref={parallaxRef} 
        pages={isMobile ? 6.7 : 5.1} 
        className='animation'
      >
        <BemVindo /> 
        <SobrePagina />
        <MenuCards />
        <Contatos />
        <SobreDevs />
      </Parallax>
    </BrowserRouter>
  );
}

export default App;