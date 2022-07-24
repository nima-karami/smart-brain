import React from "react";

const Navigation = ({ onRouteChange, route }) => {
    if (route === 'home') {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signin')} className="f4 black link pa3 underline pointer">Sign Out</p>
            </nav>
        )
    } else {
        return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChange('signin')} className="f4 black link pa3 underline pointer">Sign In</p>
                <p onClick={() => onRouteChange('register')} className="f4 black link pa3 underline pointer">Register</p>
            </nav>
        )
    }
    
}

export default Navigation;