import React from 'react'
import './3DTextMenu.css';

function Text3Dmenu() {
  return (
    <ul className="text3dMenuContainer">
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
  )
}

export default Text3Dmenu