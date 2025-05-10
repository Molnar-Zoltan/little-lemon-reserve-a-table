import { Field, ErrorMessage } from 'formik';
import reservationTimeData from './reservationTimeData';


const ReservationTime = ({label = "Text:", fieldName = "time", errorMessageComponent = "p"}) => {

    return (
        <>
            <div className='reservation-field-container'>
                <label htmlFor={fieldName}>{label}</label>
                <Field as="select" name={fieldName} id={fieldName} className='reservation-field' >
                    <option value="">Select time</option>
                    {
                        reservationTimeData.map(time => 
                            <option key={time} value={time}>{time}</option>
                        )
                    }
                </Field>
            </div>
            <div className='error-message-container'>
                <ErrorMessage name={fieldName} component={errorMessageComponent} className='error-message' />
            </div>
        </>
    );
}

export default ReservationTime;