import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ( {imageURL} ) => {
    return (
        <div className="center pv4">
            <div className=' photo-container shadow-hover br4 center pointer'>
                <img className="br4 pointer shadow-hover " alt='' src={imageURL}/>              
            </div> 
        </div>
        
    )
}

export default FaceRecognition;