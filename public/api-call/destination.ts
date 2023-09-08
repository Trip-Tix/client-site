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

const locations: LocationData[] = [
    { label: "Dhaka", id: 1 },
    { label: "Chittagong", id: 2 },
    { label: "Sylhet", id: 3 },
    { label: "Rajshahi", id: 4 },
    { label: "Khulna", id: 5 },
    { label: "Barishal", id: 6 },
    { label: "Rangpur", id: 7 },
    { label: "Mymensingh", id: 8 },
];

export const getLocations = async (
    transportType: TransportType
): Promise<LocationData[]> => {
    console.log({
        message: "getLocations() called",
        sent: null,
        received: locations,
    });
    return locations;
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
