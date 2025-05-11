import { submitAPI } from '../../utils/api';



const submitForm = (values, navigate) => {

    if (submitAPI(values)) {

        navigate("/confirmed-booking", {
            state: { 
                fromReservationForm: true,
                values: values 
            },
        });
    }                          

}

export default submitForm;