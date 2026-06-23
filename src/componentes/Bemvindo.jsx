// src/components/BackgroundHero.jsx
import { ParallaxLayer } from '@react-spring/parallax'

function BemVindo() {
  return (
    // CORREÇÃO: Removemos o <> e envelopamos tudo em uma ParallaxLayer pai na página 0
    <ParallaxLayer offset={0}>
      
      {/* Suas subcamadas continuam aqui dentro, fazendo a mágica do efeito 3D */}
      <ParallaxLayer offset={0} speed={0.5}>
        <div className="animation_layer parallax" id="background"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.50}>
        <div className="animation_layer parallax" id="nuvens-03"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.45}>
        <div className="animation_layer parallax" id="nuvens-02"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.40}>
        <div className="animation_layer parallax" id="nuvens-01"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.35}>
        <div className="animation_layer parallax" id="serra-02"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.25}>
        <div className="animation_layer parallax" id="serra-01"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.29}>
        <div className="animation_layer parallax" id="neblina"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.70}>
        <div className="animation_layer parallax" id="logo"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.20}>
        <div className="animation_layer parallax" id="rio-04"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.20}>
        <div className="animation_layer parallax" id="barco"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.20}>
        <div className="animation_layer parallax" id="rio-03"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.15}>
        <div className="animation_layer parallax" id="rio-02"></div>
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={-0.10}>
        <div className="animation_layer parallax" id="rio-01"></div>
      </ParallaxLayer>

    </ParallaxLayer>
  )
}

export default BemVindo