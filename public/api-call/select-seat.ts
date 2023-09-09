import axios from "axios";

const main_url = "https://triptix-backend.onrender.com";
const layout_api = main_url + "/api/getUniqueBusDetails";

interface layout_data {
    layout: number[][];
    seatName: string[][];
    SeatId: number[][];
    numberOfSeats: number;
    availableSeatCount: number;
    price: number;
    uniqueId: string;
    transportId: number;
    scheduleId: number;
}

interface bus_response_data {
    layout: number[][];
    seatName: string[][];
    busSeatId: number[][];
    numberOfSeats: number;
    availableSeatCount: number;
}

const getBusLayout = async (): Promise<layout_data> => {
    try {
        const response = await axios.post(
            layout_api,
            {
                uniqueBusId: sessionStorage.getItem("uniqueId"),
                busId: sessionStorage.getItem("transportId"),
                busScheduleId: sessionStorage.getItem("scheduleId"),
            },
            {
                headers: {
                    token: sessionStorage.getItem("access_token"),
                },
            }
        );

        const responseData: bus_response_data = response.data;

        if (response.status === 200) {
            console.log(responseData);
            return {
                layout: responseData.layout,
                seatName: responseData.seatName,
                SeatId: responseData.busSeatId,
                numberOfSeats: responseData.numberOfSeats,
                availableSeatCount: responseData.availableSeatCount,
                price:
                    sessionStorage.getItem("transportPrice") === null
                        ? 0
                        : parseInt(sessionStorage.getItem("transportPrice") as string),
                uniqueId: sessionStorage.getItem("uniqueId") as string,
                transportId:
                    sessionStorage.getItem("transportId") === null
                        ? 0
                        : parseInt(
                              sessionStorage.getItem("transportId") as string
                          ),
                scheduleId:
                    sessionStorage.getItem("scheduleId") === null
                        ? 0
                        : parseInt(
                              sessionStorage.getItem("scheduleId") as string
                          ),
            };
        } else {
            console.log(response);
            return {
                layout: [],
                seatName: [],
                SeatId: [],
                numberOfSeats: 0,
                availableSeatCount: 0,
                price: 0,
                uniqueId: "",
                transportId: 0,
                scheduleId: 0,
            };
        }
    } catch (error) {
        return {
            layout: [],
            seatName: [],
            SeatId: [],
            numberOfSeats: 0,
            availableSeatCount: 0,
            price: 0,
            uniqueId: "",
            transportId: 0,
            scheduleId: 0,
        };
    }
};

export const getSeatLayout = async (): Promise<layout_data> => {
    const transportType = sessionStorage.getItem("transport") as TransportType;
    if (transportType === TransportType.Bus) {
        return await getBusLayout();
    } else {
        return {
            layout: [],
            seatName: [],
            SeatId: [],
            numberOfSeats: 0,
            availableSeatCount: 0,
            price: 0,
            uniqueId: "",
            transportId: 0,
            scheduleId: 0,
        };
    }
};

import { SeatDetailsFormProps } from "@public/context/seat-selection";
import {
    transport_list_url,
    select_seat_url,
    payment_url,
} from "@public/pagelinks";
import { TransportType } from "@public/interface/transport";
export const processPurchase = async (
    purchasingSeats: SeatDetailsFormProps[]
): Promise<string> => {
    console.log(purchasingSeats);
    const hasReturn = sessionStorage.getItem("hasReturn");
    const processingReturn = sessionStorage.getItem("processingReturn");
    if (hasReturn === "true" && processingReturn === "false") {
        sessionStorage.setItem("processingReturn", "true");
        // redirect to return Ticket
        // store forwardTicket in json format in session storage
        const forwardTicket = {
            transportId: sessionStorage.getItem("transportId"),
            transportType: sessionStorage.getItem("transport"),
            source: sessionStorage.getItem("source"),
            destination: sessionStorage.getItem("destination"),
            date: sessionStorage.getItem("date"),
            seatDetails: purchasingSeats,
        };
        sessionStorage.setItem("forwardTicket", JSON.stringify(forwardTicket));
        return transport_list_url;
    } else if (hasReturn === "true" && processingReturn === "true") {
        sessionStorage.setItem("processingReturn", "false");
        // redirect to payment
        // store returnTicket in json format in session storage
        const returnTicket = {
            transportId: sessionStorage.getItem("transportId"),
            transportType: sessionStorage.getItem("transport"),
            destination: sessionStorage.getItem("source"),
            source: sessionStorage.getItem("destination"),
            date: sessionStorage.getItem("returnDate"),
            seatDetails: purchasingSeats,
        };
        sessionStorage.setItem("returnTicket", JSON.stringify(returnTicket));
        //call api
        return payment_url;
    } else if (hasReturn === "false") {
        // redirect to payment
        const forwardTicket = {
            transportId: sessionStorage.getItem("transportId"),
            transportType: sessionStorage.getItem("transport"),
            source: sessionStorage.getItem("source"),
            destination: sessionStorage.getItem("destination"),
            date: sessionStorage.getItem("date"),
            seatDetails: purchasingSeats,
        };
        //call api
        return payment_url;
    }
    return "";
};
