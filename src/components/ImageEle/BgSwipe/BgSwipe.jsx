import React from "react";
import Image from "../../../assets/image.png";
import './BgSwipe.css';

function BgSwipe() {
    return (
        <div className="bgSwipeContainer">
            <img src={Image} alt="" />
            <div className="caption">
                <h1>Caption Amazing</h1>
                <p>You can write anything</p>
            </div>
        </div>
    );
}

export default BgSwipe;
