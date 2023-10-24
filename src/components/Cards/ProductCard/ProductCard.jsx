import React from "react";
import "./ProductCard.css";
import Image from "../../../assets/headphone1.png";

function ProductCard() {
    return (
        <div className="productCardContainer">
            {/* <div className="content">
                <img src={Image} alt="" />
                <h4>Wireless headphones</h4>
                <p>$60.88</p>
            </div>
            <a href="#">Buy now</a> */}
            <div className="imgbox">
                <img src={Image} alt="" />
            </div>
            <div className="contentBox">
                <h2>Wireless Headphones</h2>
                <p>$60.88</p>
                <a href="#">Buy Now</a>
            </div>
        </div>
    );
}

export default ProductCard;
