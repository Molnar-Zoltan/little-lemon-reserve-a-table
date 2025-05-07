
import { Link } from "react-router-dom";


const NavItems = () => {

    return (
        <ul>
            <li><Link to="/">
                <span>Home</span>
            </Link></li>
            <li><Link to="/not-implemented">
                <span>About</span>
            </Link></li>
            <li><Link to="/not-implemented">
                <span>Menu</span>
            </Link></li>
            <li><Link to="/reservations">
                <span>Reservations</span>
            </Link></li>
            <li><Link to="/not-implemented">
                <span>Order Online</span>
            </Link></li>
            <li><Link to="/not-implemented">
                <span>Login</span>
            </Link></li>
        </ul>
    );

}

export default NavItems;