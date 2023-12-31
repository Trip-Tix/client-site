import { TrainInfo, TrainQueueTicket } from "@public/context/profile";
import { useContext, useEffect, useState } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Image from "next/image";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import IconButton from "@mui/material/IconButton";

import { ColorContext } from "@public/context/global";

import axios from "axios";

interface TrainQueueTicketCardProps {
    ticket: TrainQueueTicket;
}

const cancleApi = "https://triptix-backend.onrender.com/cancelTicketTrain";
export default function TrainQueueTicketCard({
    ticket,
}: TrainQueueTicketCardProps) {
    const [isJourneyDatePassed, setIsJourneyDatePassed] = useState(false);
    const [isReturnDatePassed, setIsReturnDatePassed] = useState(false);
    const [formattedDate, setFormattedDate] = useState("");
    const [showin24, setShowin24] = useState(true);
    const [formattedTime, setFormattedTime] = useState("");
    const [cancelTicket, setCancelTicket] = useState(false);

    const { mode } = useContext(ColorContext);

    useEffect(() => {
        const today = new Date();
        const journeyDate = new Date(ticket.trainInfo.schedule_date);
        const returnDate = new Date(ticket.trainInfo.schedule_date);

        if (today > journeyDate) {
            setIsJourneyDatePassed(true);
        }

        if (today > returnDate) {
            setIsReturnDatePassed(true);
        }
    }, []);

    useEffect(() => {
        const inputDateString = ticket.trainInfo.schedule_date;
        const inputDate = new Date(inputDateString);

        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
        };

        const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
            inputDate
        );

        setFormattedDate(formattedDate);
    }, []);

    useEffect(() => {
        const inputTimeString = ticket.trainInfo.departure_time;
        const inputTimeParts = inputTimeString.split(":"); // Split time string into parts
        const inputHour = parseInt(inputTimeParts[0]);
        const inputMinute = parseInt(inputTimeParts[1]);

        if (!isNaN(inputHour) && !isNaN(inputMinute)) {
            // Check if parsing was successful
            const options: Intl.DateTimeFormatOptions = {
                hour: "numeric",
                minute: "numeric",
                hour12: !showin24, // Use 12-hour format when showin24 is false
            };

            // Create a new Date object with a fixed date (e.g., 1970-01-01) and the parsed hour and minute
            const inputTime = new Date(1970, 0, 1, inputHour, inputMinute);

            const formattedTime = new Intl.DateTimeFormat(
                "en-US",
                options
            ).format(inputTime);

            setFormattedTime(formattedTime);
        } else {
            // Handle invalid inputTimeString
            console.error("Invalid time format:", inputTimeString);
        }
    }, [showin24, ticket.trainInfo.departure_time]);

    useEffect(() => {
        if (cancelTicket) {
            axios
                .post(cancleApi, {
                    ticketId: ticket.queue_ticket_id,
                })
                .then((res) => {
                    console.log(res);
                    setCancelTicket(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [cancelTicket]);

    return (
        <Paper
            sx={{
                width: "100%",
                padding: "1rem",
                backgroundColor: mode === "dark" ? "#121212" : "#dfdfdf",
            }}
            elevation={3}
        >
            <Stack direction={"column"} spacing={1}>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography
                        variant={"h6"}
                    >{`${ticket.source}-${ticket.destination}`}</Typography>

                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                        <Button
                            variant={"contained"}
                            sx={{
                                background:
                                    mode === "dark" ? "#6cff3f" : "#47c72a",
                            }}
                            disabled={ticket.status !== 0}
                        >
                            {ticket.status === 0
                                ? "Proceed to Pay"
                                : "Still in queue"}
                        </Button>
                        <Button
                            variant={"contained"}
                            sx={{
                                background:
                                    mode === "dark" ? "#b53535" : "#8c1d1d",
                            }}
                            onClick={() => setCancelTicket(true)}
                        >
                            Cancel
                        </Button>
                    </Stack>
                </Stack>
                <Divider />
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Stack direction={"column"} spacing={1}>
                        <Typography variant={"body1"}>
                            {ticket.trainInfo.train_company_name}
                        </Typography>
                        <Stack direction={"row"} spacing={1}>
                            <Typography variant={"body1"}>
                                {ticket.trainInfo.coach_name}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack direction={"column"} spacing={1}>
                        <Stack direction={"row"} spacing={1}>
                            <Typography variant={"body1"}>
                                Departure Time:{" "}
                            </Typography>
                            <Stack
                                direction={"row"}
                                spacing={1}
                                justifyContent={"space-between"}
                            >
                                <Typography variant={"body1"}>
                                    {formattedTime}
                                </Typography>
                                <IconButton
                                    onClick={() => setShowin24(!showin24)}
                                    sx={{
                                        height: "1.5rem",
                                        width: "1.5rem",
                                    }}
                                >
                                    <AccessTimeIcon />
                                </IconButton>
                            </Stack>
                        </Stack>
                        <Stack direction={"row"} spacing={1}>
                            <Typography variant={"body1"}>
                                Departure Date:{" "}
                            </Typography>
                            <Typography variant={"body1"}>
                                {formattedDate}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Paper>
    );
}
