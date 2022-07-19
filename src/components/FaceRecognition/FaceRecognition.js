import React from "react";
import "./FaceRecognition.css";
import FaceBox from "./FaceBox";

const FaceRecognition = ( {faceBoxes, imageURL} ) => {


    const boxComponent = [];
    for (let i = 0; i < faceBoxes.length; i++) {
        let faceBox = faceBoxes[i];
        console.log('box component faceBox: ', faceBox);
        let boundingBox = <FaceBox faceBox= {faceBox}/>
        boxComponent.push(boundingBox);
    }

    

    return (
        <div className="center pv4">
            <div className=' photo-container shadow-hover br4 center pointer'>
                {/* <div className="bounding-box" style={{top: faceBox.topRow, right: faceBox.rightCol, bottom: faceBox.bottomRow, left: faceBox.leftCol}}></div> */}
                <img id="input-image" className="br4 pointer shadow-hover " alt='' src={imageURL}/>
                {boxComponent}
                
            </div> 
        </div>
        
    )
}

export default FaceRecognition;