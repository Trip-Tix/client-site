// /api/admin/getAll{User}CountUser
import axios from "axios";
const main_url = "https://triptix-backend.onrender.com";

export const getBusCount = main_url + "/api/admin/getAllBusCountUser";
export const getTrainCount = main_url + "/api/admin/getAllTrainCountUser";
export const getFlightCount = main_url + "/api/admin/getAllFlightCountUser";
export const getUserCount = main_url + "/api/admin/getAllUserCountUser";

export const getBusCountUser = async (): Promise<number> => {
    try {
        console.log("getBusCountUser called");
        const res = await axios.get(getBusCount);
        console.log(JSON.stringify(res.data, null, 2));
        return res.data.totalUniqueBuses;
    } catch (err) {
        console.log(err);
        return 0;
    }
}

export const getTrainCountUser = async (): Promise<number> => {
    try {
        console.log("getTrainCountUser called");
        const res = await axios.get(getTrainCount);
        console.log(JSON.stringify(res.data, null, 2));
        return res.data.totalUniqueTrains;
    } catch (err) {
        console.log(err);
        return 0;
    }
}

export const getFlightCountUser = async (): Promise<number> => {
    try {
        console.log("getFlightCountUser called");
        const res = await axios.get(getFlightCount);
        console.log(JSON.stringify(res.data, null, 2));
        return res.data.totalUniqueFlights;
    } catch (err) {
        console.log(err);
        return 0;
    }
}

export const getUserCountUser = async (): Promise<number> => {
    try {
        console.log("getUserCountUser called");
        const res = await axios.get(getUserCount);
        console.log(JSON.stringify(res.data, null, 2));
        return res.data.totalUniqueUsers;
    } catch (err) {
        console.log(err);
        return 0;
    }
}
