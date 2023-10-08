import React from "react";
import "./RotateEntry.css";
import Image from "../../../assets/image.png";

function RotateEntry() {
    return (
        <div className="rotateEntryContainer">
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

export default RotateEntry;
