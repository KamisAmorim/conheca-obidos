import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Navbar from './componentes/navbar/navbar'
import BemVindo from './componentes/Bemvindo'
import SobrePagina from './componentes/Sobre-a-pagina'
import MenuCards from './componentes/menu-cards'
import { useRef, useEffect } from 'react'
import './App.css'

function App() {
  const parallaxRef = useRef();

  return (
    <>
      <Navbar parallaxRef={parallaxRef} />
      <Parallax ref={parallaxRef} pages={3} className='animation'>
        <section id="secao-inicio">
          <BemVindo />
        </section>
        
        <section id="secao-sobre">
          <SobrePagina />
        </section>

        <section id='menu-cards'>
            <MenuCards/>
        </section>
      </Parallax>
    </>
  );
}

export default App