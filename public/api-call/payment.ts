import axios from "axios";
import { main_url } from "./constant";
// const main_url = "https://triptix-backend.onrender.com";

interface TicketInfo {
    ticketId: string;
    passengerIdArray: number[];
    busScheduleId: number;
    trainScheduleId: number;
    airScheduleId: number;
    totalFare: number;
    numberOfTickets: number;
}

export interface ResponseData {
    ticketInfo: TicketInfo[];
    tempTicketInfo: TicketInfo[];
    userId: number;
    grandTotalFare: number;
    tempTotalFare: number;
}

export async function parseResponseDataFromStorage(): Promise<ResponseData> {
    const book_response = sessionStorage.getItem("book_response");
    console.log(book_response);

    if (book_response) {
        return JSON.parse(book_response) as ResponseData;
    } else {
        return {
            ticketInfo: [],
            tempTicketInfo: [],
            userId: 0,
            grandTotalFare: 0,
            tempTotalFare: 0,
        };
    }
}

interface PaymentRequest {
    userId: number;
    ticketInfo: TicketInfo[];
    grandTotalFare: number;
    transportType: "air" | "bus" | "train";
}

interface PaymentResponse {
    status: number;
    message: string;
    data: any;
    url: string;
}

const payment_url = main_url + "/paymentInit";
export async function handlePayment(): Promise<string> {
    console.log("Payment Initiated");

    const book_response = sessionStorage.getItem("book_response");
    if (book_response === null) return "/";

    console.log(book_response);
    const data = JSON.parse(book_response) as ResponseData;
    if (data.ticketInfo.length <= 0) return "/";

    console.log(data);
    const transportType =
        sessionStorage.getItem("transport") === "Flight"
            ? "air"
            : sessionStorage.getItem("transport") === "Bus"
            ? "bus"
            : "train";
    
    sessionStorage.removeItem("book_response");
    sessionStorage.removeItem("transport");
    const paymentRequest: PaymentRequest = {
        userId: data.userId,
        ticketInfo: data.ticketInfo,
        grandTotalFare: data.grandTotalFare,
        transportType: transportType,
    };

    console.log(paymentRequest);
    try {
        const res = await axios.post(payment_url, paymentRequest);

        const response: PaymentResponse = res.data;
        console.log(response);
        if (res.status === 200) {
            return response.url;
        } else {
            return "/";
        }
    } catch (error) {
        console.log(error);
        return "/";
    }
}
