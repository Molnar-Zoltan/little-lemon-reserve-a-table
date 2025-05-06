
import NavItems from '../NavItems';
import { GrClose } from "react-icons/gr";
import './NavMobile.css';


const NavMobile = () => {


    return (
        <>
            <nav className='nav-mobile'>
                <NavItems />
                <div className='close-button-container'>
                    <a className='close-button'><GrClose /></a>
                </div>
                
            </nav>
        </>
    );
}

export default NavMobile;