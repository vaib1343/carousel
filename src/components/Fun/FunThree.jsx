import React, { useEffect, useRef, useState } from "react";
import { useTransition, animated } from "react-spring";

const DATA = ["orange", "blue", "red"];
function FunThree() {
    const timer = useRef();
    const [index, setIndex] = useState(0);
    const [color, setColors] = useState([]);
    const transition = useTransition(color, {
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
            duration: 500,
        },
    });

    useEffect(() => {
        timer.current = setInterval(() => {
            setIndex((preState) => (preState + 1) % 3);
        }, 2000);
        return () => {
            clearInterval(timer.current);
        };
    }, []);

    useEffect(() => {
        setColors(DATA[index]);
        setTimeout(() => {
            setColors([]);
        }, 1000);
    }, [index]);

    return (
        <div>
            {transition((styles, item) => (
                <animated.div
                    style={{
                        ...styles,
                        color: item,
                        fontSize: "100px",
                        fontWeight: 800,
                    }}
                >
                    {item}
                </animated.div>
            ))}
        </div>
    );
}

export default FunThree;
