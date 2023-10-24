import React from "react";
import "./CursorMenu.css";

function CursorMenu() {
    return (
        <div
            style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                // backgroundColor: "#414141",
            }}
        >
            <ul className="cursorMenuContainer">
                <li>
                    <a href="#" data-text="Home">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" data-text="About">
                        About
                    </a>
                </li>{" "}
                <li>
                    <a href="#" data-text="Service">
                        Service
                    </a>
                </li>
                <li>
                    <a href="#" data-text="team">
                        Team
                    </a>
                </li>
                <li>
                    <a href="#" data-text="Contact">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default CursorMenu;
