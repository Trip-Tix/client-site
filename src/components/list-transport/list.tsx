import { useContext, useState, useEffect } from "react";
import { ListTransportContext, TransportEntry } from "@public/context/list-transport";
import Stack from "@mui/material/Stack";
import TransportCard from "@components/list-transport/transport-card";

export default function ListTransport() {

    const { transportList, filteringData } = useContext(ListTransportContext);
    const [filteredTransportList, setFilteredTransportList] = useState<TransportEntry[]>([]);
    useEffect(() => {
        setFilteredTransportList(transportList.filter((transport) => {
            if (transport.fare < filteringData.minFare || transport.fare > filteringData.maxFare) return false;
            if (transport.number_of_seats < filteringData.minSeats || transport.number_of_seats > filteringData.maxSeats) return false;
            if (filteringData.companies.length > 0 && !filteringData.companies.includes(transport.company_name)) return false;
            if (filteringData.coaches.length > 0 && !filteringData.coaches.includes(transport.coach_type)) return false;
            if (filteringData.wantOffer && !transport.has_offer) return false;
            if (filteringData.wantRefundable && !transport.is_refundable) return false;
            if (filteringData.searchField !== "" && !transport.company_name.toLowerCase().includes(filteringData.searchField.toLowerCase())) return false;
            if (filteringData.maxDepartureTime !== "" && transport.time > filteringData.maxDepartureTime) return false;

            return true;
        }));
    }, [transportList, filteringData]);
    

    return (
        <>
            <Stack spacing={2}>
                {filteredTransportList.map((transport) => (
                    <TransportCard key={transport.unique_id} transport={transport} />
                ))}
            </Stack>
        </>
    );
}
