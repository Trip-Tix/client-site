import { useState, useEffect, useContext } from "react";
import { TicketHistoryContext } from "@public/context/profile";
import { TransportType } from "@public/interface/transport";
import { ColorContext } from "@public/context/global";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";

import SubwayIcon from "@mui/icons-material/Subway";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

import BusTicketCard from "@/components/profile/bus-ticket-card";

export default function TicketInfo() {
    const [selectedTransport, setSelectedTransport] = useState<TransportType>(
        TransportType.Bus
    );
    const { mode } = useContext(ColorContext);
    const { ticketHistory } = useContext(TicketHistoryContext);

    return (
        <Stack direction={"column"} spacing={1} sx={{ padding: "2rem" }}>
            <Stack
                direction={"row"}
                spacing={2}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <IconButton
                    onClick={() => setSelectedTransport(TransportType.Bus)}
                    sx={{
                        backgroundColor:
                            selectedTransport === TransportType.Bus
                                ? "#ff593f"
                                : mode === "dark"
                                ? "#121212"
                                : "#dfdfdf",
                    }}
                >
                    <DirectionsBusIcon />
                </IconButton>
                <IconButton
                    onClick={() => setSelectedTransport(TransportType.Train)}
                    sx={{
                        backgroundColor:
                            selectedTransport === TransportType.Train
                                ? "#3f95ff"
                                : mode === "dark"
                                ? "#121212"
                                : "#dfdfdf",
                    }}
                >
                    <SubwayIcon />
                </IconButton>
                <IconButton
                    onClick={() => setSelectedTransport(TransportType.Flight)}
                    sx={{
                        backgroundColor:
                            selectedTransport === TransportType.Flight
                                ? "#6cff3f"
                                : mode === "dark"
                                ? "#121212"
                                : "#dfdfdf",
                    }}
                >
                    <AirplanemodeActiveIcon />
                </IconButton>
            </Stack>
            <Typography variant={"h5"}>Ticket Info</Typography>
            <Stack
                direction={"column"}
                sx={{
                    maxHeight: "28vh",
                    overflowY: "auto",
                    width: "100%",
                }}
                spacing={2}
            >
                {ticketHistory.busTicketInfo.map((ticket, index) => {
                    return <BusTicketCard key={index} ticket={ticket} />;
                })}
            </Stack>
        </Stack>
    );
}
