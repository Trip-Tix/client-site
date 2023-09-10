import { useEffect, useState, useContext } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Image from "next/image";

import Navbar from "@/components/destination/navbar";
import AboutMe from "@/components/profile/about-me";
import PaymentInfo from "@/components/profile/payment-info";
import TicketInfo from "@/components/profile/ticket-info";
import List from "@components/profile/list";
import { ColorContext } from "@public/context/global";

export default function Profile() {
    const { mode } = useContext(ColorContext);

    return (
        <Stack
            direction={"column"}
            spacing={0}
            sx={{
                minHeight: "100vh",
                backgroundColor: mode === "light" ? "#f5f5f5" : "#121212",
            }}
        >
            <Navbar />
            <Stack direction={"column"} spacing={2} sx={{ padding: "1rem" }}>
                <Typography variant={"h4"}>Profile</Typography>
                <Box
                    display="grid"
                    gridTemplateColumns="repeat(12, 1fr)"
                    gap={2}
                    sx={{ height: "85vh" }}
                >
                    <Box gridColumn="span 4" gridRow="span 8">
                        <Paper sx={{ height: "100%", width: "100%" }}>
                            <AboutMe />
                        </Paper>
                    </Box>
                    <Box gridColumn="span 8" gridRow="span 4">
                        <Paper sx={{ height: "100%", width: "100%" }}>
                            <PaymentInfo />
                        </Paper>
                    </Box>
                    <Box gridColumn="span 8" gridRow="span 8">
                        <Paper sx={{ height: "100%", width: "100%" }}>
                            <TicketInfo />
                        </Paper>
                    </Box>
                    <Box gridColumn="span 4" gridRow="span 4">
                        <Paper sx={{ height: "100%", width: "100%" }}>
                            <List />
                        </Paper>
                    </Box>
                </Box>
            </Stack>
        </Stack>
    );
}
