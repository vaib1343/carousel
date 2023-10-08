import React from "react";
import "./TBMenu.css";

function TBMenu() {
    return (
        <ul className="tbMenuContainer">
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

export default TBMenu;
