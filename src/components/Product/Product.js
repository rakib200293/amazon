import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./products.css";

const Products = (props) => {
    const { img, name, seller, price, stock} = props.prd;
    return (
        <div className="single-product">
            <div className="image">
                <img src={img} alt="" />
            </div>
            <div className="content">
                <a href="#">{name}</a>
                <p>by:{seller}</p>
                <div className="left-half">
                    <p>${price}</p>
                    <p>Only {stock} left today. Order now.</p>
                </div>
                <div className="right-half"></div>
                <button type="button" onClick={ () => props.handleProduct(props.prd) }>Add to cart</button>
            </div>
        </div>
    );
};

export default Products;
