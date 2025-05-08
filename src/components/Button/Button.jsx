import './Button.css';
import { Link } from 'react-router-dom';


const CTAReserveTableButton = ({ text, route, paddingX, paddingY, fontSize}) => {
    return (
        <Link to={route}>
            <button className="button" style={{ padding: `${paddingY}rem ${paddingX}rem`, fontSize: fontSize }}>
                {text}
            </button>
        </Link>
    );
}

export default CTAReserveTableButton;