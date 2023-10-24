import React from "react";
import "./PhotoCaard.css";
import Image from "../../../assets/parson.jpg";

function PhotoCard() {
    return (
        <div className="photoCardContainer">
            <div className="imgContainer">
                <img src={Image} alt="" />
            </div>
            <div className="content">
                <h2>Vaibhav Varshney</h2>
                <p>CEO</p>
            </div>
        </div>
    );
}

export default PhotoCard;
