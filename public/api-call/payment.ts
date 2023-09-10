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
