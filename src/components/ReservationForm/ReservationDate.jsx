import { Field, ErrorMessage } from 'formik';

const ReservationDate = ({label = "Text", fieldName = "date", errorMessageComponent = "p", handleChange}) => {

    return (
        <>
            <div className='reservation-field-container'>
                <label htmlFor={fieldName}>{label}</label>
                <Field type={fieldName} name={fieldName} id={fieldName} className='reservation-field' onChange={handleChange} />
            </div>
            <div className='error-message-container'>
                <ErrorMessage name={fieldName} component={errorMessageComponent} className='error-message' />
            </div>
        </>
    );
}

export default ReservationDate;