import React from "react";
import Tilt from "react-tilt";
import './Logo.css'
import brain from './brain-1.png'

const Logo = () => {
    return (
        <div className="ma2 mt0 center pointer">
            <Tilt className="Tilt center" options={{ max : 100, reverse: true}} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner pa2"> <img alt='brain logo' src={brain}/> </div>
            </Tilt>
            <h1>Smart Brain</h1>
        </div>
    )
}

export default Logo;