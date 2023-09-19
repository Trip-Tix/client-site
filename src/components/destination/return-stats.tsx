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
import LinearProgress from "@mui/material/LinearProgress";
export default function Stats() {

    const [totalSeats, setTotalSeats] = useState(0);
    const [totalBooked, setTotalBooked] = useState(0);
    const [avgPrice, setAvgPrice] = useState(0);

    const { source, destination, returnDate, transport, sourceId, destinationId } =
        useContext(DestinationContext);

    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (source === "" || destination === "" || returnDate === "") return;
        setLoading(true);
        getTicketStats(transport, destination, destinationId, source, sourceId, returnDate).then((res) => {
            setTotalSeats(res.total);
            setTotalBooked(res.sold);
            setAvgPrice(res.avgPrice);
        }).finally(() => {
            setLoading(false);
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
            <Typography variant="body1" sx={{marginBottom: "1.5rem"}}>Return Ticket Stats</Typography>
            {loading && <LinearProgress sx={{width: "100%", marginBottom: "1.5rem"}}/>}
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
                    <Typography variant="body1">{totalSeats}</Typography>
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
                    <Typography variant="body1">{totalBooked}</Typography>
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
                    <Typography variant="body1">{avgPrice.toFixed(2)}</Typography>
                </Stack>
            </Stack>
        </Paper>
    );
}
