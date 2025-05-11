import useScrollToTop from '../../assets/hooks/useScrollToTop';
import './ConfirmedBookingPage.css';
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
        !cameFromReservationForm && navigate("/", { replace: true });
    }, [cameFromReservationForm, navigate]);

    if (!cameFromReservationForm) return null; // Prevents page rendering
    


    return (
        <div>
            <h1>Your reservation was successful!</h1>

            <p>Date: {formatDate(values.date)}</p>
            <p>Time: {values.time}</p>
            <p>Guests: {values.guests}</p>
            <p>Occasion: {values.occasion}</p>
        </div>
    );


}

export default ConfirmedBookingPage;