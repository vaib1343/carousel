import React from "react";
import {
    FaTwitter,
    FaFacebook,
    FaGoogle,
    FaYoutube,
    FaInstagram,
} from "react-icons/fa6";
import "./MenuIcon.css";

function MenuIcon() {
    return (
        <div className="menuIconContainer">
            <a href="#">
                <FaTwitter className="menuicon" />
            </a>
            <a href="#">
                <FaFacebook className="menuicon" />
            </a>{" "}
            <a href="#">
                <FaInstagram className="menuicon" />
            </a>{" "}
            <a href="#">
                <FaYoutube className="menuicon" />
            </a>{" "}
            <a href="#">
                <FaGoogle className="menuicon" />
            </a>
        </div>
    );
}

export default MenuIcon;
