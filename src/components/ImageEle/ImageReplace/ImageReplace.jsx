import React from "react";
import "./ImageReplace.css";
import Image from '../../../assets/image.png';


function ImageReplace() {
    return (
        <div className="imageReplaceContainer">
            <img src={Image} alt="" />
            <div className="caption">
                <h1>Amazing caption</h1>
                <p>you can write any thing</p>
            </div>
        </div>
    );
}

export default ImageReplace;
