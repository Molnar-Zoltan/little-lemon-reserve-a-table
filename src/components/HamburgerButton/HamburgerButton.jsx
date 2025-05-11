import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import './HamburgerButton.css';

const HamburgerButton = ({isMenuOpen, setIsMenuOpen}) => {

    return (
        <a onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <RxHamburgerMenu aria-label="Open menu" className={`${isMenuOpen ? 'hidden' : 'hamburger-button'}`} />
            <GrClose aria-label="Close menu" className={`${isMenuOpen ? 'hamburger-button' : 'hidden'}`} />
        </a>
    );
}

export default HamburgerButton;