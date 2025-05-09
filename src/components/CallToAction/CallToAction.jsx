import './CallToAction.css';
import RestaurantFood from '../../assets/images/restaurant-food.jpg';
import CTAReserveTableButton from '../Button/Button';


const CallToAction = () => {
    return (
        <section className="call-to-action">
            <div className='cta-content'>
                <div className='cta-main'>
                    <div className='description-container'>
                        <h2 className='cta-title'>Little Lemon</h2>
                        <h4 className='cta-subtitle'>Chicago</h4>
                        <p className='cta-description'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    </div>
                    <CTAReserveTableButton 
                        text='Reserve a Table' 
                        route={'/reservations'} 
                        paddingY={1.5} paddingX={2.5} 
                        fontSize='var(--font-size-xl)' 
                    />
                </div>
                <div className='cta-image-container'>
                    <img src={RestaurantFood} alt="Restaurant Food" className='cta-image' />
                </div>
            </div>
        </section>
    );
}

export default CallToAction;