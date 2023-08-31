import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

const SLIDES = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];

function FunFour() {
    const [index, setIndex] = useState(0);

    const transition = useTransition([index], {
        from: {
            transform: "translate3d(100%, 0, 0)",
            opacity: 0,
            display: 'none',
            backgroundColor: "orange",
        },
        enter: {
            transform: "translate3d(0, 0, 0)",
            display: 'block',
            opacity: 1,
        },
        leave: {
            transform: "translate3d(-100%, 0, 0)",
            display: 'none',
            opacity: 0,
        },
    });

    const onNext = () => {
        setIndex((preState) => {
            if (preState === SLIDES.length - 1) {
                return 0;
            } else {
                return preState + 1;
            }
        });
    };

    const onPrevious = () => {
        setIndex((preState) => {
            if (preState === 0) {
                return SLIDES.length - 1;
            } else {
                return preState - 1;
            }
        });
    };

    return (
        <div style={{ position: "relative", height: "100%", width: "100%" }}>
            <button onClick={onPrevious}>Previous</button>
            {transition((styles, item) => (
                <animated.div
                    style={{
                        ...styles,
                        // position: "absolute",
                        height: "100%",
                        width: "100%",
                    }}
                >
                    {SLIDES[item]}
                </animated.div>
            ))}
            <button onClick={onNext}>Next</button>
        </div>
    );
}

export default FunFour;
