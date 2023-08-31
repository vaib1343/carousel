import React from "react";
import "./Hero.css";
import { useSpring, animated } from "react-spring";

function Hero() {
    const spring = useSpring({
        from: {
            transform: "translate3d(0, -100%, 0)",
            opacity: 0.2,
        },
        to: {
            transform: "translate3d(0,0,0)",
            opacity: 1,
        },
        config: {
            duration: 800,
        },
    });
    return (
        <div className="hero_container">
            <animated.div style={{ ...spring, textAlign: "center" }}>
                <h1>Welcome to Vaibhav Kingdom</h1>
                <p>Here you will learn frontend developement</p>
            </animated.div>
        </div>
    );
}

export default Hero;
