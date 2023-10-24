import React from "react";
import "./ImageMove.css";
import Image from "../../../assets/marvel.png";

function ImageMove() {
    return (
        <div className="imageMoveCard">
            <div className="content">
                <h2>Design</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla, accusantium at quam repellendus est sequi, alias
                    atque mollitia blanditiis soluta praesentium facere.
                    Voluptas suscipit tempore, delectus ipsa esse enim aut?
                </p>
            </div>
            <img src={Image} alt="" />
        </div>
    );
}

export default ImageMove;
