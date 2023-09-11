import React from "react";
import { Box, Typography, Divider, Paper, Stack } from "@mui/material";

interface ServiceProps {
    title: string;
    description: string;
}

const ServiceItem: React.FC<ServiceProps> = ({ title, description }) => (
    <Paper elevation={3} style={{ padding: "20px", borderRadius: "10px" }}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
    </Paper>
);

const ServiceDescription: React.FC = () => {
    return (
        <Box padding={3} sx={{width: "100vw"}}>
            <Stack
                direction="column"
                spacing={5}
                alignItems="flex-start"
                justifyContent="flex-start"
            >
                <Typography variant="h4" gutterBottom>
                    Our Services
                </Typography>
                <Divider />
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="flex-start"
                    sx={{width: "100%"}}
                >
                    <ServiceItem
                        title="User-Friendly Interface"
                        description="E-ticket boasts a user-friendly interface that allows users to effortlessly search for available travel options. Whether it's trains, buses, or other modes of transportation, our platform provides a seamless booking experience."
                    />
                </Stack>
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="flex-end"
                    sx={{width: "100%"}}
                >
                    <ServiceItem
                        title="Extensive Database"
                        description="We maintain an extensive database of trains, buses, and other travel options across Bangladesh. This ensures that users have access to accurate and up-to-date information, enabling them to make informed decisions about their travel plans."
                    />
                </Stack>
                <Stack direction="row" spacing={2} justifyContent="flex-start" sx={{width: "100%"}}>
                    <ServiceItem
                        title="Secure Online Booking"
                        description="E-ticket offers a secure online booking system, allowing users to purchase their travel tickets directly from our platform. Our payment gateway ensures the safety of transactions, providing peace of mind to our users."
                    />
                </Stack>
                <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{width: "100%"}}>
                    <ServiceItem
                        title="Ticket Management"
                        description="Once users have booked their tickets, E-ticket provides an intuitive ticket management system. Users can easily view, modify, or cancel their bookings, making it convenient to adjust their travel plans as needed."
                    />
                </Stack>
                <Stack direction="row" spacing={2} justifyContent="flex-start" sx={{width: "100%"}}>
                    <ServiceItem
                        title="Real-Time Updates"
                        description="We understand the importance of timely information when it comes to travel. E-ticket provides real-time updates on ticket availability, departure and arrival times, and any changes or delays that may occur. This ensures that users stay informed throughout their journey."
                    />
                </Stack>
                <Typography variant="h5" gutterBottom>
                    Available for Train, Bus, and Flight Services.
                </Typography>
            </Stack>
        </Box>
    );
};

export default ServiceDescription;
