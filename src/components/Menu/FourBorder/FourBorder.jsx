import React from "react";
import "./FourBorder.css";

function FourBorder() {
    return (
        <ul className="fourBorderContainer">
            <li>
                <a href="#">
                    Home <span />
                    <span />
                </a>
            </li>
            <li>
                <a href="#">
                    About <span />
                    <span />
                </a>
            </li>
            <li>
                <a href="#">
                    Portfolio <span />
                    <span />
                </a>
            </li>
            <li>
                <a href="#">
                    Service <span />
                    <span />
                </a>
            </li>
            <li>
                <a href="#">
                    Contact <span />
                    <span />
                </a>
            </li>
        </ul>
    );
}

export default FourBorder;
