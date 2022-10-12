import React from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" />
            <ul className='header-menue'>
                <li><a href="#home">Home</a></li>
                <li><a href="#program">Programs</a></li>
                <li><a href="#why_us">Why us</a></li>
                <li><a href="#plans">Plans</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
            </ul>
        </div>
    );
};

export default Header;