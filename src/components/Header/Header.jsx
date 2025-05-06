import Logo from '../../assets/icons/Logo.svg';
import Basket from '../../assets/icons/Basket.svg';
import Nav from '../Nav/Nav';
import NavMobile from '../NavMobile/NavMobile';
import { RxHamburgerMenu } from "react-icons/rx";
import './Header.css';

const Header = () => {
    return (
        <>
            <header className='header'>
                <div className='header-container'>
                    <div className='hidden mobile hamburger-icon'>
                        <a className='hamburger-button'><RxHamburgerMenu /></a>
                    </div>
                    <img src={Logo} alt="Logo" className="logo" />
                    <div className='hidden desktop'>
                        <Nav />
                    </div>
                    <img src={Basket} alt="Basket" className='basket' />
                </div>

                <div className='hidden mobile'>
                    <NavMobile />
                </div>
            </header>

        </>
    );
}

export default Header;