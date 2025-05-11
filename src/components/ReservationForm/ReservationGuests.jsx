import { Field, ErrorMessage } from 'formik';

const ReservationGuests = ({label = "Text", fieldName = "guests", errorMessageComponent = "p", handleChange}) => {

    return (
        <>
            <div className='reservation-field-container'>
                <label htmlFor={fieldName}>{label}</label>
                <Field type="number" name={fieldName} id={fieldName} placeholder="1" min="1" max="10" className='reservation-field' onChange={handleChange} />
            </div>
            <div className='error-message-container'>
                <ErrorMessage name={fieldName} component={errorMessageComponent} className='error-message' />
            </div>
        </>
    );
}

export default ReservationGuests;