import React from "react";
import Tilt from "react-tilt";
import './Logo.css'
import brain from './brain-1.png'

const Logo = () => {
    return (
        <div className="ma4 mt0 center pointer">
            <Tilt className="Tilt br2 center" options={{ max : 100, reverse: true}} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner pa3"> <img alt='brain logo' src={brain}/> </div>
            </Tilt>
        </div>
    )
}

export default Logo;