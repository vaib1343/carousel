import React, { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import "./Battery.css";

function Battery() {
    const fillerRef = useRef();
    const [state, toggle] = useState(false);
    const [spring, api] = useSpring(() => ({
        from: {
            width: "100%",
        },
    }));

    const onClick = () => {
        if (state) {
            toggle(false);
            api.start({
                from: {
                    width: "0",
                },
                to: {
                    width: "100%",
                },
            });
        } else {
            api.start({
                from: {
                    width: "100%",
                },
                to: {
                    width: "0",
                },
            });
            toggle(true);
        }
    };

    return (
        <div className="battery_container">
            <h1>Battery Animation</h1>
            <div className="battery" onClick={onClick}>
                <animated.div
                    ref={fillerRef}
                    style={{
                        ...spring,
                        height: "100%",
                        background: "green",
                        textAlign: "center",
                        position: "absolute",
                        top: "0",
                    }}
                ></animated.div>
                <div>{}</div>
            </div>
        </div>
    );
}

export default Battery;
