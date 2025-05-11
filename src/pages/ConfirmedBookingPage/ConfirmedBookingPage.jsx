import './ConfirmedBookingPage.css';
import useScrollToTop from '../../assets/hooks/useScrollToTop';
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import formatDate from '../../utils/formatDate';

const ConfirmedBookingPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const cameFromReservationForm = location.state?.fromReservationForm;
    const values = location.state?.values;

    useScrollToTop();

    useEffect(() => { 
        !cameFromReservationForm && navigate("/", { replace: true }); // Redirects the user to the Homepage if they try to access the page without a reservation
    }, [cameFromReservationForm, navigate]);

    if (!cameFromReservationForm) return null; // Prevents page rendering if the user is trying to access the page without reservation
    


    return (
        <section className='confirmed-booking-page'>
            <h1 className='confirmation-text'>Thank you for your reservation!</h1>

            <h4 className='reservation-details-header'>Your reservation details:</h4>


            <div className='reservation-details'>
                <div className='reservation-labels'>
                    <p className='reservation-label'>Date:</p>
                    <p className='reservation-label'>Time:</p>
                    <p className='reservation-label'>Occasion:</p>
                    <p className='reservation-label'>Guests:</p>
                </div>

                <div className='reservation-data'>
                    <p>{formatDate(values.date)}</p>
                    <p>{values.time}</p>
                    <p>{values.occasion}</p>
                    <p>{values.guests}</p>
                </div>
            </div>

        </section>
    );


}

export default ConfirmedBookingPage;