import React from "react";
import "./FourPartMenu.css";

function FourPartMenu() {
    return (
        <ul className="fourPartMenuContainer">
            <li>
                <a href="#">
                    Home <span />
                    <span />
                    <span />
                    <span />
                </a>
            </li>
            <li>
                <a href="#">
                    About <span />
                    <span />
                    <span />
                    <span />
                </a>
            </li>
            <li>
                <a href="#">
                    Portfolio <span />
                    <span />
                    <span />
                    <span />
                </a>
            </li>
            <li>
                <a href="#">
                    Service <span />
                    <span />
                    <span />
                    <span />
                </a>
            </li>
            <li>
                <a href="#">
                    Contact <span />
                    <span />
                    <span />
                    <span />
                </a>
            </li>
        </ul>
    );
}

export default FourPartMenu;
