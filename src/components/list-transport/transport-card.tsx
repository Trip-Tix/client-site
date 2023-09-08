import { Button, Icon, Paper, Typography } from "@mui/material";
import { TransportEntry } from "@public/context/list-transport";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import { useSpring, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";
import { ColorContext } from "@public/context/global";
import { useContext, useState, useEffect, use } from "react";
import { useRouter } from "next/router";
import { select_seat_url } from "@public/pagelinks";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PaymentsIcon from "@mui/icons-material/Payments";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import BookIcon from "@mui/icons-material/Book";
import ReplayIcon from "@mui/icons-material/Replay";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import {
    getPriceDetails,
    getRefundPolicy,
    getTransportDetails,
} from "@public/api-call/list-transport";

interface TransportCardProps {
    transport: TransportEntry;
}

export default function TransportCard({ transport }: TransportCardProps) {
    const [showDetails, setShowDetails] = useState(false);

    const { mode } = useContext(ColorContext);
    const coachToColor = new Map([
        ["AC", "#0000FF"],
        ["Non AC", "#FF0000"],
        ["Sleeper", "#00FF00"],
        ["Seater", "#FFFF00"],
        ["Semi-Sleeper", "#FF00FF"],
        ["Non AC Seater", "#00FFFF"],
        ["Non AC Sleeper", "#FFA500"],
        ["AC Seater", "#A52A2A"],
        ["AC Sleeper", "#808080"],
        ["Non AC Seater Cum Sleeper", "#008000"],
        ["AC Seater Cum Sleeper", "#800080"],
        ["Type 5", "#008080"],
        ["Type 6", "#800000"],
        ["Type 7", "#000080"],
        ["Type 8", "#808000"],
        ["Type 1A", "#C0C0C0"],
    ]);

    // const extraOptions = [
    //     "Transport Details",
    //     "Price Details",
    //     "Refund Policy",
    // ];

    const extraOptions = [
        {
            name: "Transport Details",
            apiCall: getTransportDetails,
        },
        {
            name: "Price Details",
            apiCall: getPriceDetails,
        },
        {
            name: "Refund Policy",
            apiCall: getRefundPolicy,
        },
    ];
    const [selectExtraOption, setSelectExtraOption] = useState(0);
    const [detailsMessage, setDetailsMessage] = useState("");
    useEffect(() => {
        if (showDetails) {
            extraOptions[selectExtraOption]
                .apiCall(transport.unique_id)
                .then((res) => {
                    setDetailsMessage(res);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [selectExtraOption, showDetails]);

    const router = useRouter();
    const handleBookNow = (id: string, price: number) => {
        sessionStorage.setItem("transportId", id);
        sessionStorage.setItem("transportPrice", price.toString());
        console.log("Transport ID: ", id);
        router.push(select_seat_url);
    };

    return (
        <Paper
            elevation={3}
            sx={{
                borderRadius: 5,
                flexGrow: 1,
                overflow: "hidden",
            }}
        >
            <Stack direction={"column"} spacing={1}>
                <Grid
                    container
                    spacing={2}
                    sx={{
                        padding: 2,
                        width: "100%",
                        borderBottom: "2px solid #00000020",
                    }}
                >
                    <Grid item xs={3}>
                        <Stack
                            direction={"row"}
                            spacing={1}
                            alignContent={"center"}
                            alignItems={"center"}
                            sx={{}}
                        >
                            <Icon
                                sx={{
                                    width: 100,
                                    height: 100,
                                }}
                            >
                                <EmojiTransportationIcon
                                    sx={{
                                        width: 100,
                                        height: 100,
                                    }}
                                />
                            </Icon>
                            <Stack
                                direction={"column"}
                                spacing={1}
                                alignContent={"flex-start"}
                                alignItems={"flex-start"}
                            >
                                <Typography variant="h4">
                                    {transport.company_name}
                                </Typography>
                                <Stack
                                    direction={"row"}
                                    spacing={1}
                                    justifyContent={"center"}
                                    alignContent={"center"}
                                    alignItems={"center"}
                                >
                                    <Typography variant="body1">
                                        {transport.brand_name}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            background: coachToColor.has(
                                                transport.coach_type
                                            )
                                                ? coachToColor.get(
                                                      transport.coach_type
                                                  )
                                                : "#00000080",
                                            padding: 1,
                                            borderRadius: 2,
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {transport.coach_type}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={3}>
                        <Stack
                            direction={"column"}
                            spacing={1}
                            alignContent={"center"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            sx={{ height: "100%" }}
                        >
                            <Stack
                                direction={"row"}
                                spacing={1}
                                alignContent={"center"}
                                alignItems={"center"}
                                justifyContent={"center"}
                            >
                                {transport.has_offer && (
                                    <Icon
                                        sx={{
                                            height: 50,
                                            width: 50,
                                        }}
                                    >
                                        <LocalOfferIcon
                                            sx={{
                                                height: 50,
                                                width: 50,
                                            }}
                                        />
                                    </Icon>
                                )}

                                {transport.is_refundable && (
                                    <Icon
                                        sx={{
                                            height: 50,
                                            width: 50,
                                        }}
                                    >
                                        <ReplayIcon
                                            sx={{
                                                height: 50,
                                                width: 50,
                                            }}
                                        />
                                    </Icon>
                                )}
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={3}>
                        <Stack
                            direction={"column"}
                            spacing={1}
                            justifyContent={"center"}
                            alignItems={"flex-start"}
                            sx={{ height: "100%" }}
                        >
                            <Stack
                                direction={"row"}
                                spacing={1}
                                alignContent={"center"}
                                alignItems={"center"}
                            >
                                <Icon>
                                    <AccessTimeIcon />
                                </Icon>
                                <Typography variant="h5">
                                    {`${transport.time}`}
                                </Typography>
                            </Stack>
                            <Stack
                                direction={"row"}
                                spacing={2}
                                alignItems={"center"}
                            >
                                <Icon>
                                    <PaymentsIcon />
                                </Icon>
                                <Typography
                                    variant="h5"
                                    sx={{ fontWeight: "light" }}
                                >
                                    {`${transport.fare} Tk`}
                                </Typography>
                                <Icon>
                                    <EventSeatIcon />
                                </Icon>
                                <Typography
                                    variant="h5"
                                    sx={{ fontWeight: "light" }}
                                >
                                    {`${transport.number_of_seats}`}
                                </Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item xs={3}>
                        <Stack
                            direction={"column"}
                            spacing={1}
                            justifyContent={"center"}
                            alignItems={"center"}
                            sx={{ height: "100%" }}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    width: "50%",
                                    padding: 2,
                                    backgroundColor: "#008080",
                                    borderRadius: 1,
                                    fontSize: "1.2rem",
                                }}
                                onClick={() =>
                                    handleBookNow(
                                        transport.unique_id,
                                        transport.fare
                                    )
                                }
                                startIcon={<BookIcon />}
                            >
                                Book Now
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
                <Stack
                    direction={"row"}
                    spacing={1}
                    sx={{
                        padding: 1,
                        paddingLeft: 5,
                        width: "100%",
                        borderBottom: "2px solid #00000020",
                    }}
                    alignContent={"center"}
                    alignItems={"center"}
                >
                    <Typography
                        variant="h5"
                        sx={{
                            color: mode === "light" ? "#000000" : "#ffffff",
                            opacity: 0.8,
                            fontWeight: "light",
                        }}
                    >
                        Facilities:
                    </Typography>
                    {transport.fasilites.map((facility) => (
                        <Typography
                            variant="body1"
                            key={facility}
                            sx={{
                                fontWeight: "bold",
                            }}
                        >
                            {facility}
                        </Typography>
                    ))}
                </Stack>
                <Stack direction={"column"} spacing={1}>
                    <Stack
                        direction={"row"}
                        justifyContent={"flex-end"}
                        spacing={1}
                        sx={{
                            padding: "5px 5px 5px 5px",
                        }}
                    >
                        {extraOptions.map((option) => (
                            <Button
                                variant="text"
                                key={option.name}
                                sx={{
                                    color: "#008080",
                                    fontWeight: "bold",
                                    padding: 1,
                                }}
                                onClick={() => {
                                    setShowDetails(!showDetails);
                                    setSelectExtraOption(
                                        extraOptions.indexOf(option)
                                    );
                                }}
                            >
                                {option.name}
                            </Button>
                        ))}
                    </Stack>

                    <Stack
                        direction={"column"}
                        spacing={1}
                        sx={{
                            background: "#00000010",
                            padding: 2,
                            display: showDetails ? "flex" : "none",
                        }}
                    >
                        <Typography>{detailsMessage}</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Paper>
    );
}
