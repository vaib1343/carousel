import React from "react";
import "./BlurMenu.css";

function BlurMenu() {
    return (
        <ul className="blurMenuContainer">
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
                <a href="#" data-text="Portfolio">
                    Portfolio
                </a>
            </li>
            <li>
                <a href="#" data-text="Service">
                    Service
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

export default BlurMenu;
