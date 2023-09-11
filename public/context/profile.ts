import { createContext } from "react";

export interface BusInfo {
    unique_bus_id: string;
    departure_time: string;
    schedule_date: string;
    bus_id: number;
    bus_company_name: string;
    coach_id: number;
    brand_name_id: number;
    coach_name: string;
    brand_name: string;
}

export interface BusTicket {
    ticket_id: string;
    user_id: number;
    total_fare: number;
    bus_schedule_id: number;
    number_of_tickets: number;
    passenger_info: number[];
    transaction_id: string;
    payment_medium: string;
    payment_status: number;
    date: string;
    source: string;
    destination: string;
    busInfo: BusInfo;
    isJourneyDatePassed: boolean;
}

export interface BusQueueTicket {
    queue_ticket_id: string;
    user_id: number;
    total_fare: number;
    bus_schedule_id: number;
    number_of_tickets: number;
    passenger_info: number[];
    bus_seat_id: number[];
    date: string;
    status: number;
    source: string;
    destination: string;
    busInfo: BusInfo;
}

export interface TrainInfo {
    unique_train_id: string;
    departure_time: string;
    schedule_date: string;
    train_id: number;
    train_company_name: string;
    coach_id: number;
    coach_name: string;
}

export interface TrainTicket {
    ticket_id: string;
    user_id: string;
    total_fare: number;
    train_schedule_id: string;
    number_of_tickets: number;
    passenger_info: string[];
    transaction_id: string;
    payment_medium: string | null;
    payment_status: number;
    date: string;
    source: string | null;
    destination: string | null;
    trainInfo: TrainInfo;
    isJourneyDatePassed: boolean;
}

export interface TrainQueueTicket {
    queue_ticket_id: string;
    user_id: string;
    total_fare: number;
    train_schedule_id: string;
    number_of_tickets: number;
    passenger_info: string[];
    train_seat_id: string[]; // Train-specific field
    date: string;
    status: number;
    source: string | null;
    destination: string | null;
    trainInfo: TrainInfo; // Replace TrainInfo with your actual TrainInfo interface
}

interface AirInfo {
    flight_id: string;
    airline_name: string;
    departure_time: string;
    departure_airport: string;
    arrival_time: string;
    arrival_airport: string;
}

interface AirTicket {
    ticket_id: string;
    user_id: string;
    total_fare: number;
    flight_schedule_id: string;
    number_of_tickets: number;
    passenger_info: string[];
    transaction_id: string;
    payment_medium: string | null;
    payment_status: number;
    date: string;
    source: string | null;
    destination: string | null;
    airInfo: AirInfo;
    isJourneyDatePassed: boolean;
}

interface AirQueueTicket {
    queue_ticket_id: string;
    user_id: string;
    total_fare: number;
    flight_schedule_id: string;
    number_of_tickets: number;
    passenger_info: string[];
    air_seat_id: string[]; // Air-specific field
    date: string;
    status: number;
    source: string | null;
    destination: string | null;
    airInfo: AirInfo; // Replace AirInfo with your actual AirInfo interface
}

export interface TicketHistoryData {
    busTicketInfo: BusTicket[];
    busQueueTicketInfo: BusQueueTicket[];
    trainTicketInfo: TrainTicket[];
    trainQueueTicketInfo: TrainQueueTicket[];
    airTicketInfo: AirTicket[];
    airQueueTicketInfo: AirQueueTicket[];
}

interface TicketHistoryContextProps {
    ticketHistory: TicketHistoryData;
    setTicketHistory: React.Dispatch<React.SetStateAction<TicketHistoryData>>;
}

export  const TicketHistoryContext = createContext<TicketHistoryContextProps>({
    ticketHistory: {
        busTicketInfo: [],
        busQueueTicketInfo: [],
        trainTicketInfo: [],
        trainQueueTicketInfo: [],
        airTicketInfo: [],
        airQueueTicketInfo: [],
    },
    setTicketHistory: () => {},
});
