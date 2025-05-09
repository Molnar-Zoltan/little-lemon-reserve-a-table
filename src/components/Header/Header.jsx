import { useState, useRef, useEffect } from 'react';
import Logo from '../../assets/icons/logo.svg';
import Basket from '../../assets/icons/basket.svg';
import Nav from '../Nav/Nav';
import NavMobile from '../NavMobile/NavMobile';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import './Header.css';

const Header = ({setHeaderHeight}) => {

    const headerRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the mobile menu open/close


    useEffect(() => {
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
    }, [setHeaderHeight]);



    return (
        <>
            <header ref={headerRef} className='header'>
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