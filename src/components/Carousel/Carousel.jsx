import "./Carousel.css";
import React, { useState } from "react";
import { useTransition, animated } from "react-spring";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

function Carousel({ slides }) {
    const [index, setIndex] = useState(0);

    const transition = useTransition(index, {
        from: {
            opacity: 0,
            transform: "translateX(70px)",
        },
        enter: {
            opacity: 1,
            transform: "translateX(0)",
        },
        leave: {
            opacity: 0,
            transform: "translateX(-70px)",
        },
    });

    const onNext = () => {
        setIndex((preState) => {
            if (preState === slides.length - 1) {
                return 0;
            } else {
                return preState + 1;
            }
        });
    };

    const onPrevious = () => {
        setIndex((preState) => {
            if (preState === 0) {
                return slides.length - 1;
            } else {
                return preState - 1;
            }
        });
    };

    return (
        <div className="carousel_container">
            <div className="bg_image" />
            {transition((style, index) => (
                <animated.div
                    className="carousel"
                    style={{
                        backgroundImage: `url(${slides[index]})`,
                        ...style,
                    }}
                ></animated.div>
            ))}
            <div className="btn_container">
                <div
                    className="carousel_btn left_btn"
                    onClick={() => onPrevious()}
                >
                    <BiLeftArrow />
                </div>
                <div className="carousel_btn" onClick={() => onNext()}>
                    <BiRightArrow />
                </div>
            </div>
        </div>
    );
}

export default Carousel;
