import React from 'react';
import Logo from '../assets/icons/Logo.svg';
import Basket from '../assets/icons/Basket.svg';

const Nav = () => {
    return (
        <nav>
            <img src={Logo} alt="Logo" className="logo" />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#reservations">Reservations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
            <img src={Basket} alt="Basket" className='basket' />
        </nav>
    );
}

export default Nav;