import axios from "axios";
import { main_url } from "./constant";
// const main_url = "https://triptix-backend.onrender.com";

interface TicketInfo {
    ticketId: string;
    passengerIdArray: number[];
    busScheduleId: number;
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

const responseData: ResponseData = {
    ticketInfo: [
        {
            ticketId: "914461281570339",
            passengerIdArray: [101, 102, 103],
            busScheduleId: 124,
            totalFare: 100.5,
            numberOfTickets: 3,
        },
        {
            ticketId: "888019318576150",
            passengerIdArray: [101, 102, 103],
            busScheduleId: 125,
            totalFare: 100.5,
            numberOfTickets: 3,
        },
    ],
    tempTicketInfo: [
        {
            ticketId: "888019318576152",
            passengerIdArray: [101, 102, 103],
            busScheduleId: 125,
            totalFare: 100.5,
            numberOfTickets: 3,
        },
    ], // Structure is same as ticket info
    userId: 100,
    grandTotalFare: 201,
    tempTotalFare: 100.5,
};

export async function parseResponseDataFromStorage(): Promise<ResponseData> {
    const book_response = sessionStorage.getItem("book_response");
    if (book_response) {
        return JSON.parse(book_response) as ResponseData;
    } else {
        return responseData;
    }
}

interface PaymentRequest {
    userId: number;
    ticketInfo: TicketInfo[];
    grandTotalFare: number;
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
    const paymentRequest: PaymentRequest = {
        userId: data.userId,
        ticketInfo: data.ticketInfo,
        grandTotalFare: data.grandTotalFare,
    };

    console.log(paymentRequest);
    try {
        const res = await axios.post(
            payment_url,
            paymentRequest
        );

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
