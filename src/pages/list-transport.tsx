import Navbar from "@/components/destination/navbar";
import TransportationLocked from "@/components/list-transport/transportation-locked";
import InfoBar from "@/components/list-transport/info-bar";
import Filter from "@/components/list-transport/filter";
import List from "@/components/list-transport/list";
import { Stack } from "@mui/material";

import { useState, useContext, useEffect } from "react";
import {
    ListTransportContext,
    FilteringData,
    TransportEntry,
} from "@public/context/list-transport";
import { TransportType } from "@public/interface/transport";
import Style from "@/styles/list-transport/list-transport.module.css";
import { getTransportList } from "@public/api-call/list-transport";

export default function ListTransport() {
    const [filteringData, setFilteringData] = useState<FilteringData>({
        maxFare: 0,
        minFare: 0,
        maxSeats: 0,
        minSeats: 0,
        companies: [],
        coaches: [],
        wantOffer: false,
        wantRefundable: false,
        searchField: "",
        maxDepartureTime: "",
        minDepartureTime: "",
    });

    const [transportList, setTransportList] = useState<TransportEntry[]>([]);
    const [selectedTransportType, setSelectedTransportType] =
        useState<TransportType>(TransportType.Bus);
    useEffect(() => {
        setSelectedTransportType(
            sessionStorage.getItem("transport") as TransportType
        );
    }, []);

    useEffect(() => {
        getTransportList().then((res) => {
            setTransportList(res);
        });
    }, [selectedTransportType]);
    return (
        <>
            <ListTransportContext.Provider
                value={{
                    selectedTransportType,
                    filteringData,
                    setFilteringData,
                    transportList,
                    setTransportList,
                }}
            >
                <div className={Style.globalPage}>
                    <Navbar />
                    <TransportationLocked />
                    <InfoBar />
                    <Stack direction="row" spacing={2} padding={2}>
                        <Filter />
                        <List />
                    </Stack>
                </div>
            </ListTransportContext.Provider>
        </>
    );
}