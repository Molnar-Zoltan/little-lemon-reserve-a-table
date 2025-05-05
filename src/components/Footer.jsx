import React from 'react';
import LogoFooter from '../assets/images/Logo_Footer.png';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter  } from "react-icons/fa6";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className='footer-content'>
                <div className='foorer-image-container'>
                    <img src={LogoFooter} alt="Footer Logo" className='footer-image' />  
                </div>
                <div className='doormat-navigation'>
                    <h4>Little Lemon Restaurant</h4>
                    <ul className='doormat-navigation-list'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#reservations">Reservations</a></li>
                        <li><a href="#">Order Online</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
                <div className='footer-contact'>
                    <h4>Contact</h4>
                    <p>123 Main St, Chicago, IL 60647</p>
                    <p>Email: info@littlelemonchicago.com</p>
                    <p>Phone: (312) 123-4567</p>
                </div>
                <div className='footer-social-media'>
                    <h4>Social Media</h4>
                    <ul className='social-media-list'>
                        <li><a href="#"><FaFacebook /></a></li>
                        <li><a href="#"><FaInstagram /> </a></li>
                        <li><a href="#"><FaSquareXTwitter  /></a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-copyright'>
                <p>Made by Zoltán Molnár</p>
                <p>&copy; {currentYear} Little Lemon Restaurant.</p>
            </div>
            
        </footer>
    );
}

export default Footer;