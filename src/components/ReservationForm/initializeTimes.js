import { fetchAPI } from "../../utils/api";

const initializeTimes = () => {
    return fetchAPI(new Date());
}

export default initializeTimes;