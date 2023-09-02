import { createContext } from "react";
import { TransportType } from "@public/interface/transport";

export interface TransportEntry {
    unique_id: string;
    company_name: string;
    brand_name: string;
    coach_type: string;
    time: string;
    fare: number;
    number_of_seats: number;
    fasilites: string[];
    transport_type: TransportType;
    company_logo: string;
    has_offer: boolean;
    is_refundable: boolean;
}

export interface FilteringData {
    maxFare: number;
    minFare: number;
    maxSeats: number;
    minSeats: number;
    company: string;
    coachType: string;
    wantOffer: boolean;
    wantRefundable: boolean;
    searchField: string;
    maxDepartureTime: string;
    minDepartureTime: string;
}

interface ListTransportContextType {
    transportList: TransportEntry[];
    setTransportList: React.Dispatch<React.SetStateAction<TransportEntry[]>>;
    filteringData: FilteringData;
    setFilteringData: React.Dispatch<React.SetStateAction<FilteringData>>;
}

export const ListTransportContext = createContext<ListTransportContextType>({
    transportList: [],
    setTransportList: () => {},
    filteringData: {
        maxFare: 0,
        minFare: 0,
        maxSeats: 0,
        minSeats: 0,
        company: '',
        coachType: '',
        wantOffer: false,
        wantRefundable: false,
        searchField: '',
        maxDepartureTime: '',
        minDepartureTime: '',
    },
    setFilteringData: () => {},
});
