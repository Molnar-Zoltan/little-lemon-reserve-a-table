import { Field, ErrorMessage } from 'formik';
import reservationOccasionData from './reservationOccasionData';

const ReservationOccasion = ({label = "Text", fieldName = "occasion", errorMessageComponent = "p", handleChange}) => {

    return (
        <>
            <div className='reservation-field-container'>
                <label htmlFor={fieldName}>{label}</label>
                <Field as="select" name={fieldName} id={fieldName} className='reservation-field' onChange={handleChange} >
                    <option value="">Select occasion</option>
                    {
                        reservationOccasionData.map(occasion =>
                            <option key={occasion} value={occasion}>{occasion}</option>
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

export default ReservationOccasion;