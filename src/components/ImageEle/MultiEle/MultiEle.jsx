import React from "react";
import Image from "../../../assets/image.png";
import './MultiEle.css';

function MultiEle() {
    return (
        <div className="multiEleContainer">
            <img src={Image} alt="" />
            <div className="caption">
                <h1>Hover me</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Itaque quibusdam dolor voluptas.{" "}
                </p>
                <a href="#">Read more</a>
            </div>
        </div>
    );
}

export default MultiEle;
