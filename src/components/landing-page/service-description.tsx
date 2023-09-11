import React from "react";
import { Box, Typography, Divider, Paper, Stack } from "@mui/material";
import ui_image from "@public/image/UI.svg";
import DATA from "@public/image/DATA.svg";
import SECU from "@public/image/SECU.svg";
import REAL from "@public/image/REAL.svg";
import TICKET from "@public/image/TICKET.svg";
import Image from "next/image";

interface ServiceProps {
    title: string;
    description: string;
    image: any;
}

const ServiceItem: React.FC<ServiceProps> = ({ title, description, image }) => (
    <Paper elevation={3} style={{ padding: "20px", borderRadius: "10px" }}>
        <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ margin: "1rem", padding: "1rem" }}
        >
            <Image src={image} alt="UI" width={100} height={100} />
            <Stack
                direction="column"
                spacing={1}
                justifyContent="center"
                alignItems="flex-start"
            >
                <Typography variant="h4" sx={{ fontWeight: "light" }}>
                    {title}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ maxWidth: "50rem", fontWeight: "light" }}
                >
                    {description}
                </Typography>
            </Stack>
        </Stack>
    </Paper>
);

const ServiceDescription: React.FC = () => {
    return (
        <Box
            padding={3}
            sx={{
                width: "100vw",
            }}
        >
            <Stack
                direction="column"
                spacing={2}
                alignItems="flex-start"
                justifyContent="flex-start"
            >
                <Typography variant="h3" gutterBottom>
                    Our Services
                </Typography>
                <Divider />
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="flex-start"
                    sx={{ width: "100%" }}
                >
                    <ServiceItem
                        title="User-Friendly Interface"
                        description="E-ticket boasts a user-friendly interface that allows users to effortlessly search for available travel options. Whether it's trains, buses, or other modes of transportation, our platform provides a seamless booking experience."
                        image={ui_image}
                    />
                </Stack>
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="flex-end"
                    sx={{ width: "100%" }}
                >
                    <ServiceItem
                        title="Extensive Database"
                        description="We maintain an extensive database of trains, buses, and other travel options across Bangladesh. This ensures that users have access to accurate and up-to-date information, enabling them to make informed decisions about their travel plans."
                        image={DATA}
                    />
                </Stack>
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="flex-start"
                    sx={{ width: "100%" }}
                >
                    <ServiceItem
                        title="Secure Online Booking"
                        description="E-ticket offers a secure online booking system, allowing users to purchase their travel tickets directly from our platform. Our payment gateway ensures the safety of transactions, providing peace of mind to our users."
                        image={SECU}
                    />
                </Stack>
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="flex-end"
                    sx={{ width: "100%" }}
                >
                    <ServiceItem
                        title="Ticket Management"
                        description="Once users have booked their tickets, E-ticket provides an intuitive ticket management system. Users can easily view, modify, or cancel their bookings, making it convenient to adjust their travel plans as needed."
                        image={TICKET}
                    />
                </Stack>
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="flex-start"
                    sx={{ width: "100%" }}
                >
                    <ServiceItem
                        title="Real-Time Updates"
                        description="We understand the importance of timely information when it comes to travel. E-ticket provides real-time updates on ticket availability, departure and arrival times, and any changes or delays that may occur. This ensures that users stay informed throughout their journey."
                        image={REAL}
                    />
                </Stack>
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="flex-end"
                    sx={{ width: "100%" }}
                >
                    <Typography variant="h5" gutterBottom>
                        Available for Train, Bus, and Flight Services.
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    );
};

export default ServiceDescription;
