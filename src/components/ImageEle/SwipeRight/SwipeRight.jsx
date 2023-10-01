import React from "react";
import "./SwipeRight.css";
import Image from "../../../assets/image.png";

function SwipeRight() {
    return (
        <div className="swipeRightContainer">
            <img src={Image} alt="" />
            <div className="caption">
                <h1>Amazing caption</h1>
                <p>you can write any thing</p>
            </div>
        </div>
    );
}

export default SwipeRight;
