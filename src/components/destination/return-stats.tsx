import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";
import MovingIcon from "@mui/icons-material/Moving";
import BookIcon from "@mui/icons-material/Book";
import PaymentsIcon from "@mui/icons-material/Payments";
import { useState, useContext, useEffect } from "react";
import { getTicketStats } from "@public/api-call/destination";
import { DestinationContext } from "@public/context/destination";
export default function Stats() {

    const [totalSeats, setTotalSeats] = useState(0);
    const [totalBooked, setTotalBooked] = useState(0);
    const [avgPrice, setAvgPrice] = useState(0);

    const { source, destination, returnDate, transport } =
        useContext(DestinationContext);

    useEffect(() => {
        if (source === "" || destination === "" || returnDate === "") return;
        getTicketStats(transport, destination, source, returnDate).then((res) => {
            setTotalSeats(res.total);
            setTotalBooked(res.sold);
            setAvgPrice(res.avgPrice);
        });
    }, [source, destination, returnDate, transport]);


    return (
        <Paper
            elevation={3}
            sx={{
                width: "100%",
                height: "100%",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography variant="h4" sx={{marginBottom: "1.5rem"}}>Return Ticket Stats</Typography>
            <Stack
                direction={"row"}
                spacing={5}
                justifyContent={"center"}
                alignContent={"center"}
            >
                <Stack direction={"column"} spacing={1} alignItems="center">
                    <Icon
                        sx={{
                            width: "4rem",
                            height: "4rem",
                        }}
                    >
                        <MovingIcon
                            sx={{
                                width: "4rem",
                                height: "4rem",
                            }}
                        />
                    </Icon>
                    <Typography variant="body1">Total Seats</Typography>
                    <Typography variant="h4">{totalSeats}</Typography>
                </Stack>
                <Stack direction={"column"} spacing={1} alignItems="center">
                    <Icon
                        sx={{
                            width: "4rem",
                            height: "4rem",
                        }}
                    >
                        <BookIcon
                            sx={{
                                width: "4rem",
                                height: "4rem",
                            }}
                        />
                    </Icon>
                    <Typography variant="body1">Total Booked</Typography>
                    <Typography variant="h4">{totalBooked}</Typography>
                </Stack>
                <Stack direction={"column"} spacing={1} alignItems="center">
                    <Icon
                        sx={{
                            width: "4rem",
                            height: "4rem",
                        }}
                    >
                        <PaymentsIcon
                            sx={{
                                width: "4rem",
                                height: "4rem",
                            }}
                        />
                    </Icon>
                    <Typography variant="body1">Average Cost</Typography>
                    <Typography variant="h4">{avgPrice}</Typography>
                </Stack>
            </Stack>
        </Paper>
    );
}
