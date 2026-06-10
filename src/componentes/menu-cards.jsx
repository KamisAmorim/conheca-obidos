import { ParallaxLayer } from "@react-spring/parallax";

function MenuCards(){
    return(
        <ParallaxLayer offset={1.45} speed={0.35}>
        <div id="menu-cards">
            <h2 style={{color: "black"}}>POR ONDE DESEJAS COMEÇAR?</h2>
        </div>
        </ParallaxLayer>
    )
}

export default MenuCards