const date = new Date();

const currentDate = {
    year: date.getFullYear(),
    month: String(date.getMonth() + 1).padStart(2, '0'),
    day: String(date.getDate()).padStart(2, '0'),
}

const initialReservationValues = {
    date: `${currentDate.year}-${currentDate.month}-${currentDate.day}`,
    time: "",
    guests: "1",
    occasion: ""
};

export default initialReservationValues;