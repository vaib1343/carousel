import React from "react";
import "./BlurMenu.css";

function BlurMenu() {
    return (
        <ul className="blurMenuContainer">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Portfolio</a>
            </li>
            <li>
                <a href="#">Service</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    );
}

export default BlurMenu;
