import React from "react";
import "./TwoPartCard.css";
import Image from "../../../assets/design.png";

function TwoPartCard() {
    return (
        <div className="twoPartCard">
            <div className="face1">
                <img src={Image} alt="" />
                <h2>Design</h2>
            </div>
            <div className="face2">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                    dignissimos, molestias iste optio harum veniam eos
                    consequuntur fugiat, consequatur voluptate suscipit itaque
                    voluptas ab. Architecto quisquam iste laborum porro
                    blanditiis!
                </p>
                <a href="#">read more</a>
            </div>
        </div>
    );
}

export default TwoPartCard;
