import React from "react";
import "./ExpandCard.css";
import Image from "../../../assets/1.jpg";

function ExpandCard() {
    return (
        <div className="expandCardContainer">
            <div className="imgContainer">
                <img src={Image} alt="" />
            </div>
            <div className="content">
                <h2>Design</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                    cumque eius distinctio eveniet nam consequatur totam quasi.
                    Nam non ad pariatur at laborum laudantium quod omnis, quis,
                    iusto nulla mollitia!
                </p>
            </div>
        </div>
    );
}

export default ExpandCard;
