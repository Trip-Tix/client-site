import { useEffect, useState, useContext } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Image from "next/image";

import Navbar from "@/components/destination/navbar";
import AboutMe from "@/components/profile/about-me";
import QueueTicket from "@/components/profile/payment-info";
import TicketInfo from "@/components/profile/ticket-info";
import List from "@components/profile/list";
import { ColorContext } from "@public/context/global";

import { getTicketHistory } from "@public/api-call/profile";
import {
    TicketHistoryData,
    TicketHistoryContext,
} from "@public/context/profile";

export default function Profile() {
    const { mode } = useContext(ColorContext);
    const [ticketHistory, setTicketHistory] = useState<TicketHistoryData>({
        busTicketInfo: [],
        busQueueTicketInfo: [],
        trainTicketInfo: [],
        trainQueueTicketInfo: [],
        airTicketInfo: [],
        airQueueTicketInfo: [],
    });

    useEffect(() => {
        getTicketHistory().then((res) => {
            setTicketHistory(res);
        });
    }, []);

    useEffect(() => {
        console.log("Client: \n" + JSON.stringify(ticketHistory, null, 2));
    }, [ticketHistory]);

    return (
        <TicketHistoryContext.Provider
            value={{ ticketHistory, setTicketHistory }}
        >
            <Stack
                direction={"column"}
                spacing={0}
                sx={{
                    minHeight: "100vh",
                    backgroundColor: mode === "light" ? "#f5f5f5" : "#121212",
                }}
            >
                <Navbar />
                <Stack
                    direction={"column"}
                    spacing={2}
                    sx={{ padding: "1rem" }}
                >
                    <Typography variant={"h4"}>Profile</Typography>
                    <Box
                        display="grid"
                        gridTemplateColumns="repeat(12, 1fr)"
                        gap={2}
                        sx={{ height: "85vh" }}
                    >
                        <Box gridColumn="span 3" gridRow="span 8">
                            <Paper>
                                <AboutMe />
                            </Paper>
                        </Box>
                        <Box gridColumn="span 9" gridRow="span 6">
                            <Paper>
                                <QueueTicket />
                            </Paper>
                        </Box>
                        <Box gridColumn="span 9" gridRow="span 6">
                            <Paper>
                                <TicketInfo />
                            </Paper>
                        </Box>
                        <Box gridColumn="span 3" gridRow="span 4">
                            <Paper>
                                <List />
                            </Paper>
                        </Box>
                    </Box>
                </Stack>
            </Stack>
        </TicketHistoryContext.Provider>
    );
}
