import React from "react";
import "./LRBorderMenu.css";

function LRBorderMenu() {
    return (
        <ul className="LRBorderMenuContainer">
            <li>
                <a href="#">
                    Home <span />
                </a>
            </li>
            <li>
                <a href="#">
                    About <span />
                </a>
            </li>
            <li>
                <a href="#">
                    Portfolio <span />
                </a>
            </li>
            <li>
                <a href="#">
                    Service <span />
                </a>
            </li>
            <li>
                <a href="#">
                    Contact <span />
                </a>
            </li>
        </ul>
    );
}

export default LRBorderMenu;
