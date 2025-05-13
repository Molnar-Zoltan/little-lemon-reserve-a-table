
import './ReservationForm.css'
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from '../../components/Button/Button';
import initialReservationValues from './initialReservationValues';
import reservationSchema from './reservationSchema';
import ReservationDate from './ReservationDate';
import ReservationTime from './ReservationTime';
import ReservationGuests from './ReservationGuests';
import ReservationOccasion from './ReservationOccasion';
import { useEffect, useReducer } from 'react';
import initializeTimes from './initializeTimes';
import updateTimes from './updateTimes';
import submitForm from './submitForm';
import { useNavigate } from 'react-router-dom';


const ReservationForm = () => {

    const navigate = useNavigate();
    const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, [], initializeTimes);

    return (
        <Formik
            initialValues={initialReservationValues}
            validationSchema={reservationSchema}
            onSubmit={
                (values) => {
                    submitForm(values, navigate);     
                }
            } 
        >
        {
            ({ values, handleChange }) => {

                useEffect(() => {
            
                    values.date != '' && dispatchAvailableTimes(values.date);

                }, [values.date]); 
                
                return (
                    <Form className='reservation-form'>

                        <div className='hidden-mobile reservation-date-time'>
                            <div className='reservation-field-component'>
                                <ReservationDate label='Date:' handleChange={handleChange} />
                            </div> 
                            <div className='reservation-field-component'>
                                <ReservationTime label='Time:' availableTimes={availableTimes} handleChange={handleChange} />
                            </div> 
                        </div>


                        <div className='reservation-container'>
                            <div className='hidden-desktop reservation-field-component'>
                                <ReservationDate label='Date:' handleChange={handleChange} />
                            </div> 
                            <div className='hidden-desktop reservation-field-component'>
                                <ReservationTime label='Time:' availableTimes={availableTimes} handleChange={handleChange} />
                            </div> 
                            <div className='reservation-guests'>
                                <div className='reservation-field-component'>
                                    <ReservationGuests label='Guests:' handleChange={handleChange} />
                                </div> 
                            </div>

                            <div className='reservation-occasion'>
                                <div className='reservation-field-component'>
                                    <ReservationOccasion label='Occasion:' handleChange={handleChange} />
                                </div> 
                            </div>
                        </div>
            


                        <Button text="Make Your Reservation" type="submit" />
        
                    </Form>
                )
            }
        }
    
        </Formik>
    );


}

export default ReservationForm