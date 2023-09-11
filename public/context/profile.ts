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
    payment_medium: string| null;
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
    user_id: number;
    total_fare: number;
    train_schedule_id: number;
    number_of_tickets: number;
    passenger_info: number[];
    transaction_id: string;
    payment_medium: string | null;
    payment_status: number;
    date: string;
    source: string;
    destination: string;
    trainInfo: TrainInfo;
    isJourneyDatePassed: boolean;
}

export interface TrainQueueTicket {
    queue_ticket_id: string;
    user_id: number;
    total_fare: number;
    train_schedule_id: number;
    number_of_tickets: number;
    passenger_info: number[];
    train_seat_id: number[]; // Train-specific field
    date: string;
    status: number;
    source: string;
    destination: string;
    trainInfo: TrainInfo; // Replace TrainInfo with your actual TrainInfo interface
}

export interface AirInfo {
    unique_air_id: string;
    departure_time: string;
    schedule_date: string;
    air_id: number;
    air_company_name: string;
    class_id: number;
    class_name: string;
    
}

export interface AirTicket {
    ticket_id: string;
    user_id: number;
    total_fare: number;
    air_schedule_id: number;
    number_of_tickets: number;
    passenger_info: number[];
    transaction_id: string;
    payment_medium: string | null;
    payment_status: number;
    date: string;
    source: string;
    destination: string;
    airInfo: AirInfo;
    isJourneyDatePassed: boolean;
}

export interface AirQueueTicket {
    queue_ticket_id: string;
    user_id: number;
    total_fare: number;
    air_schedule_id: number;
    number_of_tickets: number;
    passenger_info: number[];
    air_seat_id: number[]; // Air-specific field
    date: string;
    status: number;
    source: string;
    destination: string;
    airInfo: AirInfo;
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
