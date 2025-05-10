import React from "react";
import './BookingPage.css'; 

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Button from '../../components/Button/Button';


const ReservationSchema = Yup.object().shape({
    date: Yup.date()
        .required("You have to pick a date.")
        .min(
            new Date(new Date().setHours(0, 0, 0, 0)),
            "You cannot pick a date from the past."
        ),
    time: Yup.string().required("Please select a time."),
    guests: Yup.number()
        .required("Please enter the number of guests.")
        .min(1, "You need to add at least 1 guest.")
        .max(10, "You can only add 10 guests."),
    occasion: Yup.string().required("Please select an occasion.")
});


const BookingPage = ({headerHeight}) => {
    return (
        <section className="booking-page" style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}>
            <h1>Reserve a Table</h1>

            <Formik
                initialValues={{
                    date: "",
                    time: "",
                    guests: "1",
                    occasion: ""
                }}
                validationSchema={ReservationSchema}
                onSubmit={values => console.log(JSON.stringify(values, null, 2)) } 
            >
                {
                    () => (
                        <Form className='reservation-form'>
                            <label htmlFor="date">Date:</label>
                            <Field type="date" name="date" id="date" />
                            <ErrorMessage name="date" component="div" className='error-message' />

                            <label htmlFor="time">Time:</label>
                            <Field as="select" name="time" id="time">
                                <option value="">Select time</option>
                                <option value="17:00">17:00</option>
                                <option value="18:00">18:00</option>
                                <option value="19:00">19:00</option>
                                <option value="20:00">20:00</option>
                                <option value="21:00">21:00</option>
                                <option value="22:00">22:00</option>
                            </Field>
                            <ErrorMessage name="time" component="div" className='error-message' />

                            <label htmlFor="guests">Guests:</label>
                            <Field type="number" name="guests" id="guests" placeholder="1" min="1" max="10" />
                            <ErrorMessage name="guests" component="div" className="error-message" />

                            <label htmlFor="occasion">Occasion:</label>
                            <Field as="select" name="occasion" id="occasion">
                                <option value="">Select occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                            </Field>
                            <ErrorMessage name="occasion" component="div" className="error-message" />

                            <Button text="Reserve" type="submit" />

                        </Form>
                    )
                }

            </Formik>

        </section>
    );
}

export default BookingPage;