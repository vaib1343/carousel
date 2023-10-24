import React from "react";
import "./GlowMenu.css";

function GlowMenu() {
    return (
        <ul className="glowMenuContainer">
            <li>
                <a href="#" data-text="Home">
                    Home
                </a>
            </li>
            <li>
                <a href="#" data-text="About">
                    About
                </a>
            </li>
            <li>
                <a href="#" data-text="Service">
                    Service
                </a>
            </li>
            <li>
                <a href="#" data-text="Team">
                    Team
                </a>
            </li>
            <li>
                <a href="#" data-text="Contact">
                    Contact
                </a>
            </li>
        </ul>
    );
}

export default GlowMenu;
