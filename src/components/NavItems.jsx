
import { Link } from "react-router-dom";


const NavItems = () => {

    const routes = [
        { path: "/",                text: "Home" },
        { path: "/about",           text: "About" },
        { path: "/menu",            text: "Menu" },
        { path: "/reservations",    text: "Reservations" },
        { path: "/order-online",    text: "Order Online" },
        { path: "/login",           text: "Login" },
    ];


    return (
        <ul>
            {
                routes.map((route) => (
                    <li key={route.path}>
                        <Link to={route.path}>
                            <span>{route.text}</span>
                        </Link>
                    </li>
                ))
            }
        </ul>
    );

}

export default NavItems;