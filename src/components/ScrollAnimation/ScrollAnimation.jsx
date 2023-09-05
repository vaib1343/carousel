import React from "react";
import "./ScrollAnimation.css";
import { BsFillSunFill } from "react-icons/bs";
import { Waypoint } from "react-waypoint";
import { useSpring, animated } from "react-spring";

function ScrollAnimation() {
    const [spring, api] = useSpring(() => ({
        from: {
            position: "static",
        },
    }));

    const onLeave = () => {
        api.start({
            from: { position: "static" },
            to: { position: "fixed", top: "0", right: "0" },
        });
    };
    return (
        <Waypoint onEnter={() => {}} onLeave={() => onLeave()}>
            <div className="scroll_container">
                <animated.div className="icon_container" style={spring}>
                    <BsFillSunFill className="icon" />
                </animated.div>
            </div>
        </Waypoint>
    );
}

export default ScrollAnimation;
