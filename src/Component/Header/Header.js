import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='nav'>
                <img src={logo} alt="" />
                <div>
                <a href="/Shop">Shop</a>
                <a href="/Order">Order</a>
                <a href="/Manage-Inventory">Manage Inventory</a>
                <a href="/Contact">Contact US</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;