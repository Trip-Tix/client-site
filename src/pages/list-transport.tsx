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
import { ColorContext } from "@public/context/global";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Head from "next/head";

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

    const [loading, setLoading] = useState(false);
    const [transportList, setTransportList] = useState<TransportEntry[]>([]);
    const [selectedTransportType, setSelectedTransportType] =
        useState<TransportType>(TransportType.Bus);
    useEffect(() => {
        setSelectedTransportType(
            sessionStorage.getItem("transport") as TransportType
        );
    }, []);

    useEffect(() => {
        setLoading(true);
        getTransportList()
            .then((res) => {
                setTransportList(res);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [selectedTransportType]);

    const { mode } = useContext(ColorContext);
    return (
        <>
            <Head>
                <title>Available {selectedTransportType}</title>
                <link rel="icon" href="/TripTixFavicon.ico" />
            </Head>
            <ListTransportContext.Provider
                value={{
                    selectedTransportType,
                    filteringData,
                    setFilteringData,
                    transportList,
                    setTransportList,
                }}
            >
                <div
                    className={
                        mode === "light"
                            ? Style.globalPage_light
                            : Style.globalPage_dark
                    }
                >
                    <Navbar />
                    <TransportationLocked />
                    <InfoBar />
                    <Stack
                        direction="row"
                        spacing={2}
                        padding={2}
                        className={Style.filterListContainer}
                    >
                        <Filter />
                        {loading ? (
                            <Stack
                                spacing={2}
                                sx={{
                                    width: "100%",
                                    height: "44.8rem",
                                }}
                                alignItems={"center"}
                                justifyContent={"center"}
                            >
                                <CircularProgress sx={{ width: "70%" }} />
                                <Typography variant={"h6"}>Loading</Typography>
                            </Stack>
                        ) : (
                            <List />
                        )}
                    </Stack>
                </div>
            </ListTransportContext.Provider>
        </>
    );
}
