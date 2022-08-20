import React from 'react';
import logo from "../../images/logo.png"
import "./header.css"

const Header = () => {
    return (
        <div className='logo-area'>
            <img src={logo} alt="" />
        </div>
    );
};

export default Header;