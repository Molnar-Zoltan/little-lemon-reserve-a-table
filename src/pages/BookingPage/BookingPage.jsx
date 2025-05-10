import React from "react";
import './BookingPage.css'; 
import ReservationForm from '../../components/ReservationForm/ReservationForm';
import Restaurant from '../../assets/images/restaurant.jpg'





const BookingPage = ({headerHeight}) => {
    return (
        <section className="booking-page" style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}>
            <div className="booking-page-header">
                <h1 className="booking-page-title">Reserve a Table</h1>
                <div className="booking-page-image-container">
                    <img className="booking-page-image" src={Restaurant} alt="Restaurant"/>
                </div>
            </div>
            
            <ReservationForm />
            
        </section>
    );
}

export default BookingPage;