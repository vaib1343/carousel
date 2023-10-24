import React from "react";
import "./BgMenu.css";

function BgMenu() {
    return (
        <div className="bgMenuContainer">
            <ul>
                <li>
                    <a href="#" data-text="Home">Home</a>
                </li>

                <li>
                    <a href="#" data-text="About">About</a>
                </li>

                <li>
                    <a href="#" data-text="Service">Service</a>
                </li>

                <li>
                    <a href="#" data-text="Team">Team</a>
                </li>

                <li>
                    <a href="#" data-text="Contact">Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default BgMenu;
