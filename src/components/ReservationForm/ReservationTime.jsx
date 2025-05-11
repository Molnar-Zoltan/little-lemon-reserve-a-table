import { Field, ErrorMessage } from 'formik';


const ReservationTime = ({label = "Text:", fieldName = "time", errorMessageComponent = "p", availableTimes = [], handleChange}) => {

    const times = Array.isArray(availableTimes) ? availableTimes : [];

    return (
        <>
            <div className='reservation-field-container'>
                <label htmlFor={fieldName}>{label}</label>
                <Field as="select" name={fieldName} id={fieldName} className='reservation-field' onChange={handleChange} >
                    <option value="">Select time</option>
                    {
                        times.map(time => 
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