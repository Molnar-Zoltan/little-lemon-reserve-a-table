import { fetchAPI } from "../../utils/api";
const updateTimes = (state, date) => {
    return fetchAPI(new Date(date));
}

export default updateTimes;