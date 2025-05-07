import { useState } from 'react';
import Logo from '../../assets/icons/Logo.svg';
import Basket from '../../assets/icons/Basket.svg';
import Nav from '../Nav/Nav';
import NavMobile from '../NavMobile/NavMobile';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import './Header.css';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the mobile menu open/close



    return (
        <>
            <header className='header'>
                <div className='header-container'>
                    <div className='hidden mobile hamburger-icon'>
                        <HamburgerButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                    </div>
                    <img src={Logo} alt="Logo" className="logo" />
                    <div className='hidden desktop'>
                        <Nav />
                    </div>
                    <img src={Basket} alt="Basket" className='basket' />
                </div>

                <div className={`hidden ${isMenuOpen && ' mobile'}`}>
                    <NavMobile />
                </div>
            </header>

        </>
    );
}

export default Header;