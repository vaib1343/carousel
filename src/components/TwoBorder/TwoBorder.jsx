import React from "react";
import "./TwoBorder.css";

function TwoBorder() {
    return (
        <div className="twoBorderContainer">
            <span className="rotated" />
            <h1>
                CSS
                <br />
                <span className="borderTxt">border</span>
                <br />
                hover
                <br />
                effect
            </h1>
        </div>
    );
}

export default TwoBorder;
