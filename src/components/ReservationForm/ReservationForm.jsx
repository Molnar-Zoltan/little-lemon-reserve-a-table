
import './ReservationForm.css'
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from '../../components/Button/Button';
import initialReservationValues from './initialReservationValues';
import reservationSchema from './reservationSchema';
import ReservationDate from './ReservationDate';
import ReservationTime from './ReservationTime';
import ReservationGuests from './ReservationGuests';
import ReservationOccasion from './ReservationOccasion';

const ReservationForm = () => {
 
    return (
        <Formik
            initialValues={initialReservationValues}
            validationSchema={reservationSchema}
            onSubmit={values => console.log(JSON.stringify(values, null, 2)) } 
        >
        {
            () => (
                <Form className='reservation-form'>

                    <div className='hidden-mobile reservation-date-time'>
                        <div className='reservation-field-component'>
                            <ReservationDate label='Date:' />
                        </div> 
                        <div className='reservation-field-component'>
                            <ReservationTime label='Time:' />
                        </div> 
                    </div>


                    <div className='reservation-container'>
                        <div className='hidden-desktop reservation-field-component'>
                            <ReservationDate label='Date:' />
                        </div> 
                        <div className='hidden-desktop reservation-field-component'>
                            <ReservationTime label='Time:' />
                        </div> 
                        <div className='reservation-guests'>
                            <div className='reservation-field-component'>
                                <ReservationGuests label='Guests:' />
                            </div> 
                        </div>

                        <div className='reservation-occasion'>
                            <div className='reservation-field-component'>
                                <ReservationOccasion label='Occasion:' />
                            </div> 
                        </div>
                    </div>
          


                    <Button text="Make Your Reservation" type="submit" />
    
                </Form>
            )
        }
    
        </Formik>
    );


}

export default ReservationForm