import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

const DATA = ["orange", "blue", "red"];
function FunSecond() {
    const [colors, setColors] = useState(DATA);
    const transition = useTransition(colors, {
        from: {
            opacity: 0,
            transform: "perspective(600px) rotateX(180deg)",
        },
        leave: {
            opacity: 0,
            transform: "perspective(600px) rotateX(180deg)",
        },
        enter: {
            opacity: 1,
            transform: "perspective(600px) rotateX(0deg)",
        },
        config: {
            duration: 2000,
        },
    });
    return (
        <div
            onMouseEnter={() => setColors(DATA)}
            onMouseLeave={() => setColors([])}
        >
            <h2>COlors</h2>
            {transition((styles, item) => (
                <animated.div
                    style={{
                        ...styles,
                        color: item,
                        fontSize: "100px",
                        fontWeight: 800,
                    }}
                >
                    {item.toUpperCase()}
                </animated.div>
            ))}
        </div>
    );
}

export default FunSecond;
