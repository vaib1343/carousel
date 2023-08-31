import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const Header = () => {
    const [currentX, setCurrentX] = useState(0); 
    const [spring, api] = useSpring(() => ({
        from: {
            x: currentX,
        },
        onChange: (event) => {
            setCurrentX(event.value.x)
        },
        config: {
            duration: 5000,
        },
    }));
    return (
        <animated.div
            onMouseEnter={() => {
                api.start({
                    from: {
                        x: currentX,
                    },
                    to: {
                        x: 500,
                    },
                });
            }}
            onMouseLeave={() => {
                api.start({
                    from: {
                        x: currentX,
                    },
                    to: {
                        x: 0,
                    },
                });
            }}
            style={{
                height: "100px",
                width: "100px",
                borderRadius: "50%",
                backgroundColor: "olivedrab",
                ...spring,
            }}
        />
    );
};

export default Header;
