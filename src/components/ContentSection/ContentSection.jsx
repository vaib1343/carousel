import React from "react";
import "./ContentSection.css";
import ImageOne from "../../assets/img1.jpg";
import ImageTwo from "../../assets/img2.jpg";
import ImageThree from "../../assets/img3.jpg";
import ImageFour from "../../assets/img4.jpg";
import ImageFive from "../../assets/img5.jpg";
import Carousel from "../Carousel/Carousel";

const SLIDES = [ImageOne, ImageTwo, ImageThree, ImageFour, ImageFive];

function ContentSection() {
    return (
        <div className="content_container">
            <div className="content-left content_clm">
                <h1 className="content_heading">This is the content heading</h1>
                <p className="content_paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sed vitae eaque illo sunt ut dolorum atque optio. Incidunt,
                    ab veritatis praesentium, magnam provident pariatur
                    necessitatibus fugit voluptates sint culpa ullam!
                </p>
                <p className="content_paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sed vitae eaque illo sunt ut dolorum atque optio. Incidunt,
                    ab veritatis praesentium, magnam provident pariatur
                    necessitatibus fugit voluptates sint culpa ullam!
                </p>
                <p className="content_paragraph">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sed vitae eaque illo sunt ut dolorum atque optio. Incidunt,
                    ab veritatis praesentium, magnam provident pariatur
                    necessitatibus fugit voluptates sint culpa ullam!
                </p>
            </div>
            <div className="content-right content_clm">
                <Carousel slides={SLIDES} />
            </div>
        </div>
    );
}

export default ContentSection;
