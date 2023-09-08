interface response_data {
    row: number;
    column: number;
    layout: number[][];
    price: number;
}

// demo data

const response: response_data = {
    row: 10,
    column: 5,
    layout: [
        [3, 1, 0, 1, 1],
        [1, 1, 0, 1, 1],
        [4, 4, 0, 4, 4],
        [1, 1, 0, 4, 5],
        [3, 3, 0, 4, 5],
        [3, 2, 0, 1, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 0, 1, 1],
        [1, 1, 1, 1, 1],
    ],
    price: 50,
};

export const getSeatLayout = async (): Promise<response_data> => {
    const transport_id = sessionStorage.getItem("transportId");
    const price = sessionStorage.getItem("transportPrice");
    response.price = price ? parseInt(price) : 0;
    console.log(transport_id);
    return response;
};

import { SeatDetailsFormProps } from "@public/context/seat-selection";
import { transport_list_url, select_seat_url,payment_url } from "@public/pagelinks";
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
        return payment_url;
    }
    return "";
};
