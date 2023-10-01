import React from "react";
import "./ScaleTil.css";
import Image from "../../../assets/image.png";

function ScaleTil() {
    return (
        <div className="scaleTilContainer">
            <img src={Image} alt="" />
            <div className="caption">
                <h1>Amazing caption</h1>
                <p>you can write any thing</p>
            </div>
        </div>
    );
}

export default ScaleTil;
