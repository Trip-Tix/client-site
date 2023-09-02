import Navbar from "@/components/destination/navbar";
import TransportationLocked from "@/components/list-transport/transportation-locked";
import InfoBar from "@/components/list-transport/info-bar";
import Filter from "@/components/list-transport/filter";
import List from "@/components/list-transport/list";
import { Stack } from "@mui/material";

import { useState, useContext } from "react";
import {
    ListTransportContext,
    FilteringData,
    TransportEntry,
} from "@public/context/list-transport";

export default function ListTransport() {
    const [filteringData, setFilteringData] = useState<FilteringData>({
        maxFare: 0,
        minFare: 0,
        maxSeats: 0,
        minSeats: 0,
        company: "",
        coachType: "",
        wantOffer: false,
        wantRefundable: false,
        searchField: "",
        maxDepartureTime: "",
        minDepartureTime: "",
    });

    const [transportList, setTransportList] = useState<TransportEntry[]>([]);

    return (
        <>
            <ListTransportContext.Provider
                value={{
                    filteringData,
                    setFilteringData,
                    transportList,
                    setTransportList,
                }}
            >
                <Navbar />
                <TransportationLocked />
                <InfoBar />
                <Stack direction="row">
                    <Filter />
                    <List />
                </Stack>
            </ListTransportContext.Provider>
        </>
    );
}
