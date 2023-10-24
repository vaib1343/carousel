import React from "react";
import "./BottomImage.css";
import Image from "../../../assets/bg.jpg";

function BottomImage() {
    return (
        <div className="bottomImageContainer">
            <img src={Image} alt="" />
            <div className="content">
                <h2>Design</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam illo quae consequatur eum corrupti veritatis
                    mollitia temporibus velit expedita, sequi omnis maiores.
                    Laboriosam veniam pariatur perferendis quae, exercitationem
                    voluptatibus expedita!
                </p>
                <a href="#">Read More</a>
            </div>
        </div>
    );
}

export default BottomImage;
