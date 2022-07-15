import React from "react";
import Tilt from "react-tilt";

const Logo = () => {
    return (
        <div className="ma4 mt0 center">
            <Tilt className="Tilt br2 shadow-2 center" options={{ max : 25 }} style={{ height: 200, width: 200 }} >
                <div className="Tilt-inner"> 👽 </div>
            </Tilt>
        </div>
    )
}

export default Logo;