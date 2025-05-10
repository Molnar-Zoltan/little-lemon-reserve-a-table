import './CustomersSay.css';
import CustomerCard from './CustomerCard';
import customers from './customersData';

const CustomersSay = () => {


 

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