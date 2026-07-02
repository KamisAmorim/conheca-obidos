import { useState, useEffect } from 'react';
import { ParallaxLayer } from '@react-spring/parallax';
import './bemvindo.css';

function BemVindo() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 950);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 950);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <ParallaxLayer offset={0} speed={0}>
        <div className="hero-mobile-fixo"></div>
      </ParallaxLayer>
    );
  }

  return (
    <ParallaxLayer offset={0}>
      <ParallaxLayer offset={0} speed={0}><div className="animation_layer parallax" id="background"></div></ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.50}><div className="animation_layer parallax" id="nuvens-03"></div></ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.45}><div className="animation_layer parallax" id="nuvens-02"></div></ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.40}><div className="animation_layer parallax" id="nuvens-01"></div></ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.35}><div className="animation_layer parallax" id="serra-02"></div></ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.25}><div className="animation_layer parallax" id="serra-01"></div></ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.29}><div className="animation_layer parallax" id="neblina"></div></ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.70}><div className="animation_layer parallax" id="logo"></div></ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.20}><div className="animation_layer parallax" id="rio-04"></div></ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.20}><div className="animation_layer parallax" id="barco"></div></ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.20}><div className="animation_layer parallax" id="rio-03"></div></ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.15}><div className="animation_layer parallax" id="rio-02"></div></ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.10}><div className="animation_layer parallax" id="rio-01"></div></ParallaxLayer>
      
      {/* Adicionando Listras no Desktop */}
    </ParallaxLayer>
  );
}

export default BemVindo;