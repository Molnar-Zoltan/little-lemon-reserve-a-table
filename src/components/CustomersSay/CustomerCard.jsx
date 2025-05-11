import './CustomerCard.css';
import { GoStar } from "react-icons/go";
import { GoStarFill } from "react-icons/go";
import { generateStarArray } from './generateStarArray';


const CustomerCard = ({ name, rating, text, image }) => {

    const maxStars = 5;

    return (
        <div className='customer-card'>
            <div className="customer-rating">
                {
                    generateStarArray(maxStars, rating, <GoStar />, <GoStarFill />)
                        .map((star, index) => 
                            <span key={index} className='star'>{star}</span>
                    )
                }
            </div>
            <div className='customer-card-header'>
                <div className='customer-image-container'>
                    <img className='customer-image' src={image} alt={`Picture of ${name}`} />
                </div>
                <h4 className='customer-name'>{name}</h4>
            </div>
            <p className='customer-text'>{text}</p>
        </div>
    );
}

export default CustomerCard;