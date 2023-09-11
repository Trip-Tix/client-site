import { TransportType } from "@public/interface/transport";
import { TransportEntry } from "@public/context/list-transport";
import axios from "axios";

interface GetTransportListProps {
    transportType: TransportType;
    source: string;
    destination: string;
    date: string;
    hasReturn: boolean;
    returnDate?: string;
    processingReturn: boolean;
}

const main_url = "https://triptix-backend.onrender.com";
const bus_api = main_url + "/api/getScheduleWiseBusDetails";
const train_api = main_url + "/api/getScheduleWiseTrainDetails";
const plane_api = main_url + "/api/getScheduleWiseAirDetails";

interface busListReturnType {
    unique_bus_id: string;
    bus_id: number;
    bus_schedule_id: number;
    departure_time: string;
    arrival_time: string;
    fare: number;
    bus_company_name: string;
    coach_id: number;
    brand_name: string;
    coach_name: string;
    available_seat_count: number;
    bus_layout_id: number;
    number_of_seats: number;
    layout: number[][];
    seat_name: string[][];
    facilities: string[];
}

export const getBusList = async (
    source: string,
    destination: string,
    date: string
): Promise<TransportEntry[]> => {
    try {
        // generate request
        const request = {
            source: source,
            destination: destination,
            journeyDate: date,
        };
        console.log("getBusList() called");
        console.log(JSON.stringify(request, null, 2));

        // get response
        const res = await axios.post(bus_api, request);
        console.log(JSON.stringify(res.data, null, 2));

        // process response
        const returningResponse: TransportEntry[] = [];
        if (res.status === 200) {
            console.log(res);
            const busList: busListReturnType[] = res.data;
            busList.forEach((bus) => {
                const newEntry: TransportEntry = {
                    unique_id: bus.unique_bus_id,
                    company_name: bus.bus_company_name,
                    brand_name: bus.brand_name,
                    coach_type: bus.coach_name,
                    time: bus.departure_time,
                    fare: bus.fare,
                    number_of_seats: bus.available_seat_count,
                    fasilites: bus.facilities,
                    transport_type: TransportType.Bus,
                    company_logo: "companyA-logo.png",
                    has_offer: false,
                    is_refundable: false,
                    schedule_id: bus.bus_schedule_id,
                    transport_id: bus.bus_id,
                    coach_id: bus.coach_id,
                };
                returningResponse.push(newEntry);
            });
        } else {
            console.log("Error in getBusList()");
        }
        return returningResponse;
    } catch (err: any) {
        console.log(err);
        console.log("We got Error in getBusList()");
        const returningResponse: TransportEntry[] = [];
        return returningResponse;
    }
};

interface trainListReturnType {
    coach_name: string;
    train_fare: number;
    train_company_name: string;
    brand_name: string;
    unique_train_id: string;
    train_schedule_id: number;
    departure_time: string;
    facilities: string[];
    train_id: number;
    number_of_seats: number;
    available_seat_count: number;
    coach_id: number;
}

export const getTrainList = async (
    source: number,
    destination: number,
    date: string
): Promise<TransportEntry[]> => {
    try {
        // generate request
        const request = {
            source: source,
            destination: destination,
            journeyDate: date,
        };
        console.log("getTrainList() called");
        console.log(JSON.stringify(request, null, 2));

        // get response
        const res = await axios.post(train_api, request);
        console.log(JSON.stringify(res.data, null, 2));

        // process response
        const returningResponse: TransportEntry[] = [];
        if (res.status === 200) {
            console.log(res);
            const trainList: trainListReturnType[] = res.data;
            trainList.forEach((train) => {
                const newEntry: TransportEntry = {
                    unique_id: train.unique_train_id,
                    company_name: train.train_company_name,
                    brand_name: train.brand_name,
                    coach_type: train.coach_name,
                    time: train.departure_time,
                    fare: train.train_fare,
                    number_of_seats: train.available_seat_count,
                    fasilites: train.facilities,
                    transport_type: TransportType.Train,
                    company_logo: "companyA-logo.png",
                    has_offer: false,
                    is_refundable: false,
                    schedule_id: train.train_schedule_id,
                    transport_id: train.train_id,
                    coach_id: train.coach_id,
                };
                returningResponse.push(newEntry);
            });
        } else {
            console.log("Error in getTrainList()");
        }
        return returningResponse;
    } catch (err: any) {
        console.log(err);
        console.log("We got Error in getTrainList()");
        const returningResponse: TransportEntry[] = [];
        return returningResponse;
    }
};

interface planeListReturnType {
    class_name: string;
    air_fare: number;
    air_company_name: string;
    brand_name: string;
    unique_air_id: string;
    air_schedule_id: number;
    departure_time: string;
    facilities: ["Cool View", "Premium Food"];
    air_company_id: number;
    number_of_seats: number;
    available_seat_count: number;
    class_id: number;
}

export const getPlaneList = async (
    source: number,
    destination: number,
    date: string
): Promise<TransportEntry[]> => {
    try {
        // generate request
        const request = {
            source: source,
            destination: destination,
            journeyDate: date,
        };
        console.log("getPlaneList() called");
        console.log(JSON.stringify(request, null, 2));

        // get response
        const res = await axios.post(plane_api, request);
        console.log(JSON.stringify(res.data, null, 2));

        // process response
        const returningResponse: TransportEntry[] = [];
        if (res.status === 200) {
            console.log(res);
            const planeList: planeListReturnType[] = res.data;
            planeList.forEach((plane) => {
                const newEntry: TransportEntry = {
                    unique_id: plane.unique_air_id,
                    company_name: plane.air_company_name,
                    brand_name: plane.brand_name,
                    coach_type: plane.class_name,
                    time: plane.departure_time,
                    fare: plane.air_fare,
                    number_of_seats: plane.available_seat_count,
                    fasilites: plane.facilities,
                    transport_type: TransportType.Train,
                    company_logo: "companyA-logo.png",
                    has_offer: false,
                    is_refundable: false,
                    schedule_id: plane.air_schedule_id,
                    transport_id: plane.air_company_id,
                    coach_id: plane.class_id,
                };
                returningResponse.push(newEntry);
            });
        } else {
            console.log("Error in getPlaneList()");
        }
        return returningResponse;
    } catch (err: any) {
        console.log(err);
        console.log("We got Error in getPlaneList()");
        const returningResponse: TransportEntry[] = [];
        return returningResponse;
    }
};

export const getTransportList = async (): Promise<TransportEntry[]> => {
    const transport_type = sessionStorage.getItem("transport");
    const source = sessionStorage.getItem("source");
    const destination = sessionStorage.getItem("destination");
    const sourceId = parseInt(sessionStorage.getItem("sourceId") || "0");
    const destinationId = parseInt(
        sessionStorage.getItem("destinationId") || "0"
    );
    const processingReturn = sessionStorage.getItem("processingReturn");
    const date = sessionStorage.getItem("date");
    const returnDate = sessionStorage.getItem("returnDate");
    const hasReturn = sessionStorage.getItem("hasReturn");

    const journeyDateParsed = new Date(date!);
    const returnDateParsed = new Date(returnDate!);

    let day = journeyDateParsed.getDate();
    let month = journeyDateParsed.getMonth() + 1;
    let year = journeyDateParsed.getFullYear();

    const formattedJourneyDate = `${day.toString().padStart(2, "0")}-${month
        .toString()
        .padStart(2, "0")}-${year}`;

    day = returnDateParsed.getDate();
    month = returnDateParsed.getMonth() + 1;
    year = returnDateParsed.getFullYear();

    const formattedReturnDate = `${day.toString().padStart(2, "0")}-${month
        .toString()
        .padStart(2, "0")}-${year}`;

    if (transport_type === TransportType.Bus) {
        if (processingReturn === "true") {
            return await getBusList(
                destination!,
                source!,
                formattedReturnDate!
            );
        } else {
            return await getBusList(
                source!,
                destination!,
                formattedJourneyDate!
            );
        }
    } else if (transport_type === TransportType.Train) {
        if (processingReturn === "true") {
            return await getTrainList(
                destinationId!,
                sourceId!,
                formattedReturnDate!
            );
        } else {
            return await getTrainList(
                sourceId!,
                destinationId!,
                formattedJourneyDate!
            );
        }
    } else if (transport_type === TransportType.Flight) {
        if (processingReturn === "true") {
            return await getPlaneList(
                destinationId!,
                sourceId!,
                formattedReturnDate!
            );
        } else {
            return await getPlaneList(
                sourceId!,
                destinationId!,
                formattedJourneyDate!
            );
        }
    } else {
        return [];
    }
};

/*
const extraOptions = [
        "Transport Details",
        "Price Details",
        "Refund Policy",
    ];
*/

export const getTransportDetails = async (
    unique_id: string
): Promise<string> => {
    const transportDetails = `Transport is good. Like my app.`;
    console.log({
        message: "getTransportDetails() called",
        sent: unique_id,
        received: transportDetails,
    });
    return transportDetails;
};

export const getPriceDetails = async (unique_id: string): Promise<string> => {
    const priceDetails = `Price is good. Like my app.`;
    console.log({
        message: "getPriceDetails() called",
        sent: unique_id,
        received: priceDetails,
    });
    return priceDetails;
};

export const getRefundPolicy = async (unique_id: string): Promise<string> => {
    const refundPolicy = `No refund. Like my app.`;
    console.log({
        message: "getRefundPolicy() called",
        sent: unique_id,
        received: refundPolicy,
    });
    return refundPolicy;
};
