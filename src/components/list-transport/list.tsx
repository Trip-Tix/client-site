import { useContext, useState, useEffect } from "react";
import {
    ListTransportContext,
    TransportEntry,
    SortingOption,
} from "@public/context/list-transport";
import Stack from "@mui/material/Stack";
import TransportCard from "@components/list-transport/transport-card";
import Style from "@/styles/list-transport/list-transport.module.css";
import { Container } from "@mui/material";

export default function ListTransport() {
    const { transportList, filteringData } = useContext(ListTransportContext);
    const [filteredTransportList, setFilteredTransportList] = useState<
        TransportEntry[]
    >([]);
    useEffect(() => {
        const temp = transportList.filter((transport) => {
            if (
                transport.fare < filteringData.minFare ||
                transport.fare > filteringData.maxFare
            )
                return false;
            if (
                transport.number_of_seats < filteringData.minSeats ||
                transport.number_of_seats > filteringData.maxSeats
            )
                return false;
            if (
                filteringData.companies.length > 0 &&
                !filteringData.companies.includes(transport.company_name)
            )
                return false;
            if (
                filteringData.coaches.length > 0 &&
                !filteringData.coaches.includes(transport.coach_type)
            )
                return false;
            if (filteringData.wantOffer && !transport.has_offer) return false;
            if (filteringData.wantRefundable && !transport.is_refundable)
                return false;
            if (
                filteringData.searchField !== "" &&
                !transport.company_name
                    .toLowerCase()
                    .includes(filteringData.searchField.toLowerCase())
            )
                return false;
            if (
                filteringData.maxDepartureTime !== "" &&
                transport.time > filteringData.maxDepartureTime
            )
                return false;

            return true;
        });

        if (filteringData.selectSortingOption === SortingOption.Fare) {
            temp.sort((a, b) => a.fare - b.fare);
        } else if (
            filteringData.selectSortingOption === SortingOption.DepartureTime
        ) {
            temp.sort((a, b) => {
                const aTime = new Date(a.time);
                const bTime = new Date(b.time);
                return aTime.getTime() - bTime.getTime();
            });
        } else if (filteringData.selectSortingOption === SortingOption.Seats) {
            temp.sort((a, b) => b.number_of_seats - a.number_of_seats);
        }

        setFilteredTransportList(temp);
    }, [transportList, filteringData]);

    return (
        <>
            <Stack
                spacing={2}
                sx={{ width: "100%", height: "44.8rem", overflowY: "scroll" }}
            >
                {filteredTransportList.map((transport, index) => (
                    <TransportCard
                        key={index}
                        transport={transport}   
                    />
                ))}
            </Stack>
        </>
    );
}
