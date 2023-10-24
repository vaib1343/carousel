import React from "react";
import "./ProductCard2.css";
import Image from "../../../assets/shoes.png";

function ProductCard2() {
    return (
        <div className="productCard2Container">
            <div className="imgContainer">
                <img src={Image} alt="x" />
            </div>
            <div className="contentContainer">
                <h2 className="title">Nike shoes</h2>
                <div className="sizeContainer">
                    <p>size:</p>
                    <div className="sizes">
                        <span className="sizeNumber">7</span>
                        <span className="sizeNumber">8</span>
                        <span className="sizeNumber">9</span>
                        <span className="sizeNumber">10</span>
                    </div>
                </div>
                {/* <div className="colorContainer">
                    <p>Color:</p>
                    <div>
                        <span className="colorType"></span>
                        <span className="colorType"></span>
                        <span className="colorType"></span>
                    </div>
                </div> */}
                <a className="buyNow" href="#">buy now</a>
            </div>
        </div>
    );
}

export default ProductCard2;
