import { fetchAPI } from "../../utils/api";

const initializeTimes = (state, date) => {
    return fetchAPI(new Date());
}

export default initializeTimes;