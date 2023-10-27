import React from "react";
import Image from "../../../assets/1.jpg";
import './BlurText.css';

function BlurText() {
    return (
        <div className="blurText">
            <p >focus</p>
            <img src={Image} alt=""/>
        </div>
    );
}

export default BlurText;
