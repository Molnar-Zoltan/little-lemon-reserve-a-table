import './SpecialsCard.css';
import { Link } from 'react-router-dom';
import { MdDeliveryDining } from "react-icons/md";

const SpecialsCard = ({ special }) => {
  return (
    <div className="specials-card">
        <div className='card-image-container'>
            <img className='card-image' src={special.image} alt={special.name} />
        </div>
        <div className='card-content'>

            <div className='card-information'> 
                <div className='card-header'>
                    <h4 className='special-name'>{special.name}</h4>
                    <h4 className='special-price'>$ {special.price.toFixed(2)}</h4>
                </div>
                <p className='special-description'>{special.description}</p>
            </div>

            <Link to='/order-online'> 
                <span className='card-order'>Order a delivery <MdDeliveryDining className='delivery-icon' /></span>
            </Link>

        </div>
    </div>
  );
} 

export default SpecialsCard;