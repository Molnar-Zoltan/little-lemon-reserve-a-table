import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import './HamburgerButton.css';

const HamburgerButton = ({isMenuOpen, setIsMenuOpen}) => {

    return (
        <a onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <RxHamburgerMenu className={`${isMenuOpen ? 'hidden' : 'hamburger-button'}`} />
            <GrClose className={`${isMenuOpen ? 'hamburger-button' : 'hidden'}`} />
        </a>
    );
}

export default HamburgerButton;