import './Button.css';
import { Link } from 'react-router-dom';


const Button = ({ text = "Button", route = "", paddingX = 2.5, paddingY = 1.5, fontSize = "var(--font-size-xl)", type="button"}) => {
    return (
        <>
            {
                route != "" ? 
                <Link to={route}>
                    <button type={type} className="button" style={{ padding: `${paddingY}rem ${paddingX}rem`, fontSize: fontSize }}>
                        {text}
                    </button>
                </Link>
                :
                <button type={type} className="button" style={{ padding: `${paddingY}rem ${paddingX}rem`, fontSize: fontSize }}>
                    {text}
                </button>
            }
        </>
    );
}

export default Button;