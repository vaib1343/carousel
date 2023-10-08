import React from "react";
import "./ScaleBg.css";
import Image from "../../../assets/image.png";

function ScaleBg() {
    return (
        <div className="scaleBgContainer">
            <img src={Image} alt="" />
            <div className="caption">
                <h1>Amazing caption</h1>
                <p>you can write any thing</p>
            </div>
        </div>
    );
}

export default ScaleBg;
