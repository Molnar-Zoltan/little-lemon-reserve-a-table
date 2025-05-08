import './CustomersSay.css';

const CustomersSay = () => {

    return (
        <section className="customers-say">
            <h2>What Our Customers Say</h2>
            <div className="customer-testimonials">
                <div className="testimonial">
                    <p>"The best service I've ever received!"</p>
                    <cite>- John Doe</cite>
                </div>
                <div className="testimonial">
                    <p>"Absolutely fantastic experience!"</p>
                    <cite>- Jane Smith</cite>
                </div>
            </div>
        </section>
    );
}

export default CustomersSay;