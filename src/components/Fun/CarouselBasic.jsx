import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import ImageOne from "../../assets/img1.jpg";
import ImageTwo from "../../assets/img2.jpg";
import ImageThree from "../../assets/img3.jpg";
import ImageFour from "../../assets/img4.jpg";
import ImageFive from "../../assets/img5.jpg";

function CarouselBasic() {
    const [slides, setSlides] = useState([
        ImageOne,
        ImageTwo,
        ImageThree,
        ImageFour,
        ImageFive,
    ]);
    const [index, setIndex] = useState(0);

    const transition = useTransition(slides, {
        from: {
            transform: "translate3d(100%, 0, 0)",
            opacity: 0,
            position: "absolute",
            height: "100%",
            width: "100%",
            top: 0,
            left: 0,
        },
        enter: {
            transform: "translate3d(0, 0, 0)",
            opacity: 1,
        },
        leave: {
            transform: "translate3d(-100%, 0, 0)",
            opacity: 0,
        },
    });

    return (
        <div className="carousel_basic">
            <button
                onClick={() =>
                    setIndex(
                        (preState) =>
                            (preState - 1 + slides.length) % slides.length
                    )
                }
            >
                Previous
            </button>
            <div
                style={{
                    position: "relative",
                    height: "400px",
                    width: "400px",
                }}
            >
                {transition(
                    (style, item) =>
                        item && (
                            <animated.div
                                className="img_container"
                                style={style}
                            >
                                <img src={item} alt="" />
                            </animated.div>
                        )
                )}
            </div>
            <button
                onClick={() =>
                    setIndex((preState) => (preState + 1) % slides.length)
                }
            >
                Next
            </button>
        </div>
    );
}

export default CarouselBasic;
