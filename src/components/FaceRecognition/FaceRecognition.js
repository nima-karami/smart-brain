import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ( {box, imageURL} ) => {
    return (
        <div className="center pv4">
            <div className=' photo-container shadow-hover br4 center pointer'>
                <div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
                <img id="input-image" className="br4 pointer shadow-hover " alt='' src={imageURL}/>
            </div> 
        </div>
        
    )
}

export default FaceRecognition;