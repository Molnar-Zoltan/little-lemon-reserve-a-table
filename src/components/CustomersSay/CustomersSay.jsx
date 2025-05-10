import './CustomersSay.css';
import CustomerCard from './CustomerCard';
import AvatarJackThompson from '../../assets/images/avatar-jack-thompson.png'
import AvatarEmilyCarter from '../../assets/images/avatar-emily-carter.png'
import AvatarOliviaBenett from '../../assets/images/avatar-olivia-benett.png'
import AvatarRyanMitchell from '../../assets/images/avatar-ryan-mitchell.png'

const CustomersSay = () => {


    const customers = [
        { 
            id: 1,
            name: "Jack Thompson",
            rating: 5,
            text: "Absolutely amazing food and friendly staff. The Greek Salad was so fresh with just the right touch of olive oil and oregano, and the homemade lemonade was super refreshing!",
            image: AvatarJackThompson
        },
        { 
            id: 2,
            name: "Emily Carter",
            rating: 4,
            text: "Loved the cozy atmosphere and the fresh flavors! The Lemon Dessert was a standout. Service could be a bit faster, but I'll definitely be back.",
            image: AvatarEmilyCarter
        },
        { 
            id: 3,
            name: "Olivia Bennett",
            rating: 5,
            text: "Fantastic experience! The Bruschetta was perfectly crisp and flavorful, and everything we tried tasted amazing. Can't wait to come back!",
            image: AvatarOliviaBenett
        },
        { 
            id: 4,
            name: "Ryan Mitchell",
            rating: 3,
            text: "Good food and friendly service. I enjoyed my Greek Salad, but the wait time was a little longer than expected. Will give it another try soon.",
            image: AvatarRyanMitchell
        }

    ]


    return (
        <section className="customers-say">
            <h2 className='customers-say-title'>What Our Customers Say</h2>
            <div className="customer-testimonials">
                {
                    customers.map(customer =>
                        <CustomerCard key={customer.id} 
                            name={customer.name} 
                            rating={customer.rating} 
                            text={customer.text}
                            image={customer.image} 
                        />
                    )
                }
            </div>
        </section>
    );
}

export default CustomersSay;