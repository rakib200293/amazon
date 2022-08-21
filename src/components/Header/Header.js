import React from 'react';
import logo from "../../images/logo.png"
import "./header.css"

const Header = () => {
    return (
        <div className='logo-area'>
            <img src={logo} alt="" />
            <nav>
                <a href="/home">Shop</a>
                <a href="/home">Order Review</a>
                <a href="/home">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;