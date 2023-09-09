import { TransportType } from "@public/interface/transport";
import { TransportEntry } from "@public/context/list-transport";
import axios from "axios";

/*
const transportEntries: TransportEntry[] = [
    {
        unique_id: "1",
        company_name: "Company A",
        brand_name: "Brand X",
        coach_type: "Type 1",
        time: "10:00 AM",
        fare: 50.0,
        number_of_seats: 30,
        fasilites: ["WiFi", "AC"],
        transport_type: TransportType.Bus,
        company_logo: "companyA-logo.png",
        has_offer: true,
        is_refundable: true,
    },
    {
        unique_id: "2",
        company_name: "Company B",
        brand_name: "Brand Y",
        coach_type: "Type 2",
        time: "11:30 AM",
        fare: 60.0,
        number_of_seats: 25,
        fasilites: ["WiFi", "Refreshments"],
        transport_type: TransportType.Train,
        company_logo: "companyB-logo.png",
        has_offer: false,
        is_refundable: false,
    },
    {
        unique_id: "3",
        company_name: "Company C",
        brand_name: "Brand Z",
        coach_type: "Type 3",
        time: "2:00 PM",
        fare: 70.0,
        number_of_seats: 40,
        fasilites: ["AC"],
        transport_type: TransportType.Bus,
        company_logo: "companyC-logo.png",
        has_offer: true,
        is_refundable: true,
    },
    {
        unique_id: "4",
        company_name: "Company D",
        brand_name: "Brand W",
        coach_type: "Type 4",
        time: "4:30 PM",
        fare: 55.0,
        number_of_seats: 20,
        fasilites: ["WiFi", "Refreshments"],
        transport_type: TransportType.Train,
        company_logo: "companyD-logo.png",
        has_offer: false,
        is_refundable: false,
    },
    {
        unique_id: "5",
        company_name: "Company E",
        brand_name: "Brand V",
        coach_type: "Type 5",
        time: "7:15 AM",
        fare: 80.0,
        number_of_seats: 35,
        fasilites: ["WiFi", "AC", "Entertainment"],
        transport_type: TransportType.Bus,
        company_logo: "companyE-logo.png",
        has_offer: true,
        is_refundable: true,
    },
    {
        unique_id: "6",
        company_name: "Company F",
        brand_name: "Brand M",
        coach_type: "Type 1A",
        time: "8:45 AM",
        fare: 45.0,
        number_of_seats: 28,
        fasilites: ["WiFi", "Snacks"],
        transport_type: TransportType.Bus,
        company_logo: "companyF-logo.png",
        has_offer: true,
        is_refundable: true,
    },
    {
        unique_id: "7",
        company_name: "Company G",
        brand_name: "Brand N",
        coach_type: "Type 2A",
        time: "1:00 PM",
        fare: 70.0,
        number_of_seats: 22,
        fasilites: ["WiFi", "AC", "Entertainment"],
        transport_type: TransportType.Train,
        company_logo: "companyG-logo.png",
        has_offer: false,
        is_refundable: true,
    },
    {
        unique_id: "8",
        company_name: "Company H",
        brand_name: "Brand O",
        coach_type: "Type 3A",
        time: "3:30 PM",
        fare: 55.0,
        number_of_seats: 33,
        fasilites: ["WiFi", "AC", "Refreshments"],
        transport_type: TransportType.Bus,
        company_logo: "companyH-logo.png",
        has_offer: true,
        is_refundable: false,
    },
    {
        unique_id: "9",
        company_name: "Company F",
        brand_name: "Brand U",
        coach_type: "Type 6",
        time: "9:45 AM",
        fare: 45.0,
        number_of_seats: 15,
        fasilites: ["WiFi"],
        transport_type: TransportType.Train,
        company_logo: "companyF-logo.png",
        has_offer: false,
        is_refundable: true,
    },
    {
        unique_id: "10",
        company_name: "Company G",
        brand_name: "Brand T",
        coach_type: "Type 7",
        time: "1:30 PM",
        fare: 65.0,
        number_of_seats: 50,
        fasilites: ["AC", "Entertainment"],
        transport_type: TransportType.Bus,
        company_logo: "companyG-logo.png",
        has_offer: true,
        is_refundable: false,
    },
    {
        unique_id: "11",
        company_name: "Company H",
        brand_name: "Brand S",
        coach_type: "Type 8",
        time: "3:20 PM",
        fare: 70.0,
        number_of_seats: 40,
        fasilites: ["WiFi", "Refreshments"],
        transport_type: TransportType.Train,
        company_logo: "companyH-logo.png",
        has_offer: true,
        is_refundable: true,
    },
    // Add more entries as needed
];
*/

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
const plane_api = main_url + "/api/getScheduleWisePlaneDetails";

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
}

export const getBusList = async (
    source: string,
    destination: string,
    date: string
): Promise<TransportEntry[]> => {
    try {
        console.log({
            source: source,
            destination: destination,
            journeyDate: date,
        });
        const res = await axios.post(bus_api, {
            source: source,
            destination: destination,
            journeyDate: date,
        });
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
                    fasilites: ["--"],
                    transport_type: TransportType.Bus,
                    company_logo: "companyA-logo.png",
                    has_offer: false,
                    is_refundable: false,
                    schedule_id: bus.bus_schedule_id,
                    transport_id: bus.bus_id,
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

export const getTransportList = async (): Promise<TransportEntry[]> => {
    const transport_type = sessionStorage.getItem("transport");
    const source = sessionStorage.getItem("source");
    const destination = sessionStorage.getItem("destination");
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
            return await getBusList(destination!, source!, formattedReturnDate!);
        } else {
            return await getBusList(source!, destination!, formattedJourneyDate!);
        }
    } else if (transport_type === TransportType.Train) {
        return [];
    } else if (transport_type === TransportType.Flight) {
        return [];
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
