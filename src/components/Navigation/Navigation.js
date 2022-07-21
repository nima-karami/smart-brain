import React from "react";

const Navigation = ({ onRouteChange }) => {
    return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChange('signin')} className="f4 black link pa3 underline pointer">Sign Out</p>
        </nav>
    )
}

export default Navigation;