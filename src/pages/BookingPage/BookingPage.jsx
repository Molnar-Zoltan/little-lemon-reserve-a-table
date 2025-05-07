import './BookingPage.css'; 


const BookingPage = ({headerHeight}) => {
    return (
        <section className="booking-page" style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}>
            <h1>Booking Page</h1>
        </section>
    );
}

export default BookingPage;