import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm = () => {
    return (
        <div>
            <p>
                This Magic Brain will detect faces in your pictures. Give it a try!
            </p>
            <div className="form center">
                <input className='f5 bn pa2 w-70 center bg-white-20' type='text'/>
                <button className="w-30 pointer shadow-hover hover-bg-black br0 f5 link bn ph3 pv2 dib white bg-black-50">Detect</button>
            </div>
            
        </div>
        
    )
}

export default ImageLinkForm;