import React from 'react';
import './Footer.css'; 
import LogoFooter from '../../assets/icons/Logo_Footer.svg';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter  } from "react-icons/fa6";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdPhoneAndroid } from "react-icons/md";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer'>
            <div className='footer-content'>
                <div className='navigation-container'>
                    <div className='logo-container'> 
                        <img src={LogoFooter} alt="Footer Logo" className='footer-image' />  
                    </div>
                    
                    <div className='doormat-navigation'>
                        <h4 className='footer-title'>Little Lemon Restaurant</h4>
                        <ul className='doormat-navigation-list'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#reservations">Reservations</a></li>
                            <li><a href="#">Order Online</a></li>
                            <li><a href="#">Login</a></li>
                        </ul>
                    </div>
                </div>
                <div className='footer-contact'>
                    <h4 className='footer-title'>Contact</h4>
                    <p className='contact-information'><MdOutlineLocationOn />123 Main St, Chicago, IL 60647</p>
                    <p className='contact-information'><MdOutlineEmail />info@littlelemonchicago.com</p>
                    <p className='contact-information'><MdPhoneAndroid />(312) 123-4567</p>
                </div>
                <div className='footer-social-media'>
                    <h4 className='footer-title'>Social Media</h4>
                    <ul className='social-media-list'>
                        <li><a href="#"><FaFacebook /></a></li>
                        <li><a href="#"><FaInstagram /> </a></li>
                        <li><a href="#"><FaSquareXTwitter  /></a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-copyright'>
                <p>Made by Zoltán Molnár</p>
                <p>&copy; {currentYear} Little Lemon Restaurant</p>
            </div>
            
        </footer>
    );
}

export default Footer;