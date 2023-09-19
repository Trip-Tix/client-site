import axios from "axios";
import { main_url } from "./constant";
// const main_url = "https://triptix-backend.onrender.com";

const get_distance_api = main_url + "/api/getDistance";
export const getDistanceKm = async (
    source: string,
    destination: string
): Promise<number> => {
    try {
        const request = {
            source: source,
            destination: destination,
        };
        console.log("getDistanceKm called");
        console.log(JSON.stringify(request, null, 2));
        const res = await axios.post(get_distance_api, request);
        console.log(JSON.stringify(res.data, null, 2));
        const distance: number = res.data.distance;
        return distance;
    } catch (err) {
        console.log(err);
        return 0;
    }
};
//     const distance = Math.random() * 1000;
//     console.log({
//         message: "getDistance() called",
//         sent: { source, destination },
//         received: distance,
//     });
//     return distance;
// };

import { TransportType } from "@public/interface/transport";

export interface LocationData {
    label: string;
    id: number;
}

interface response_data {
    location_id: number;
    location_name: string;
}

const get_locations_api = main_url + "/api/getLocations";
export const getLocations = async (
    transportType: TransportType
): Promise<LocationData[]> => {
    try {
        const request = {
            transport_type: transportType,
        };
        console.log("getLocations called");
        // console.log(JSON.stringify(request, null, 2));
        const res = await axios.post(get_locations_api, request);
        // console.log(JSON.stringify(res.data, null, 2));
        const response_data: response_data[] = res.data;
        const locations: LocationData[] = [];
        response_data.forEach((location) => {
            locations.push({
                label: location.location_name,
                id: location.location_id,
            });
        });
        return locations;
    } catch (err) {
        console.log(err);
        return [];
    }
};

interface TicketStats {
    total: number;
    sold: number;
    avgPrice: number;
}

const busStatApi = main_url + "/getBusSeatFareStat";
const trainStatApi = main_url + "/getTrainSeatFareStat";
const flightStatApi = main_url + "/getAirSeatFareStat";

interface response_data {
    totalSeats: number;
    bookedSeats: number;
    avgFare: number;
}

function convertDateFormat(inputDate: string): string {
    // Split the input date string into components
    const [year, month, day] = inputDate.split('-');
  
    // Create a new date string in the "dd-mm-yyyy" format
    const formattedDate = `${day}-${month}-${year}`;
  
    return formattedDate;
  }

export const getTicketStats = async (
    transportType: TransportType,
    source: string,
    sourceId: number,
    destination: string,
    destinationId: number,
    date: string
): Promise<TicketStats> => {
    console.log(date);
    date = convertDateFormat(date);
    let api = "";
    let request = {};
    if (transportType === TransportType.Bus) {
        api = busStatApi;
        request = {
            src: source,
            dest: destination,
            date: date,
        };
    } else if (transportType === TransportType.Train) {
        api = trainStatApi;
        request = {
            src: sourceId,
            dest: destinationId,
            date: date,
        };
    } else if (transportType === TransportType.Flight) {
        api = flightStatApi;
        request = {
            src: sourceId,
            dest: destinationId,
            date: date,
        };
    } else {
        return {
            total: 0,
            sold: 0,
            avgPrice: 0,
        };
    }

    console.log(JSON.stringify(request, null, 2));

    try {
        const res = await axios.post(api, request);
        const response_data: response_data = res.data;
        const stats: TicketStats = {
            total: response_data.totalSeats,
            sold: response_data.bookedSeats,
            avgPrice: response_data.avgFare,
        };

        return stats;
    } catch (err) {
        console.log(err);
        return {
            total: 0,
            sold: 0,
            avgPrice: 0,
        };
    }
};
