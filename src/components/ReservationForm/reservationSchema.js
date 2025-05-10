import * as Yup from 'yup';

const reservationSchema = Yup.object().shape({
    date: Yup.date()
        .required("You have to pick a date.")
        .min(
            new Date(new Date().setHours(0, 0, 0, 0)),
            "Please select a future date."
        ),
    time: Yup.string().required("Please select a time."),
    guests: Yup.number()
        .required("You need to add at least 1 guest.")
        .min(1, "You need to add at least 1 guest.")
        .max(10, "You can only add 10 guests."),
    occasion: Yup.string().required("Please select an occasion.")
});

export default reservationSchema;