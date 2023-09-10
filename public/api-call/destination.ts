import axios from "axios";
const main_url = "https://triptix-backend.onrender.com";

export const getDistanceKm = async (
    source: string,
    destination: string
): Promise<number> => {
    const distance = 100;
    console.log({
        message: "getDistance() called",
        sent: { source, destination },
        received: distance,
    });
    return distance;
};

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
        }
        console.log("getLocations called");
        console.log(JSON.stringify(request, null, 2));
        const res = await axios.post(get_locations_api, request);
        console.log(JSON.stringify(res.data, null, 2));
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

export const getTicketStats = async (
    transportType: TransportType,
    source: string,
    destination: string,
    date: string
): Promise<TicketStats> => {
    const stats: TicketStats = {
        total: 100,
        sold: 50,
        avgPrice: 500,
    };
    console.log({
        message: "getTicketStats() called",
        sent: { source, destination, date },
        received: stats,
    });
    return stats;
};
