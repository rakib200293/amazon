import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



import "./products.css"

const Products = (props) => {
    return (
        <div className='single-product'>
            <div className='image'>
                <img src={props.prd.img} alt="" />
            </div>
            <div className='content'>
                <a href="#">{props.prd.name}</a>
                <p>by:{props.prd.seller}</p>
                <div className='left-half'>
                    <p>${props.prd.price}</p>
                    <p>Only {props.prd.stock} left today. Order now.</p>
                </div>
                <div className='right-half'></div>
                <button type='button'>Add to cart</button>
                <FontAwesomeIcon icon={('coffee')} />
            </div>
        </div>
    );
};

export default Products;