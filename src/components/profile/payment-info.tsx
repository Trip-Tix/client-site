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

import BusQueueTicketCard from "@/components/profile/queue-bus-ticket-card";
import TrainQueueTicketCard from "@components/profile/queue-train-ticket-card";
import PlaneQueueTicketCard from "@components/profile/queue-plane-ticket-card";

export default function QueueTicket() {
    const [selectedTransport, setSelectedTransport] = useState<TransportType>(
        TransportType.Bus
    );
    const { ticketHistory } = useContext(TicketHistoryContext);
    const { mode } = useContext(ColorContext);

    return (
        <Stack direction={"column"} spacing={1} sx={{ padding: "2rem", height: "25rem"  }}>
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
            <Typography variant={"h5"}>Queue Ticket Info</Typography>
            {selectedTransport === TransportType.Bus && (
                <Stack
                    direction={"column"}
                    sx={{
                        maxHeight: "25vh",
                        overflowY: "auto",
                        width: "100%",
                    }}
                    spacing={2}
                >
                    {ticketHistory.busQueueTicketInfo.map((ticket, index) => {
                        return (
                            <BusQueueTicketCard key={index} ticket={ticket} />
                        );
                    })}
                </Stack>
            )}
            {selectedTransport === TransportType.Train && (
                <Stack
                    direction={"column"}
                    sx={{
                        maxHeight: "25vh",
                        overflowY: "auto",
                        width: "100%",
                    }}
                    spacing={2}
                >
                    {ticketHistory.trainQueueTicketInfo.map((ticket, index) => {
                        return (
                            <TrainQueueTicketCard key={index} ticket={ticket} />
                        );
                    })}
                </Stack>
            )}
            {selectedTransport === TransportType.Flight && (
                <Stack
                    direction={"column"}
                    sx={{
                        maxHeight: "25vh",
                        overflowY: "auto",
                        width: "100%",
                    }}
                    spacing={2}
                >
                    {ticketHistory.airQueueTicketInfo.map((ticket, index) => {
                        return (
                            <PlaneQueueTicketCard key={index} ticket={ticket} />
                        );
                    })}
                </Stack>
            )}
        </Stack>
    );
}
