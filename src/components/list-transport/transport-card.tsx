import { Button, Icon, Paper, Typography } from "@mui/material";
import { TransportEntry } from "@public/context/list-transport";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import { useSpring, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";
import { ColorContext } from "@public/context/global";
import { useContext, useState, useEffect } from "react";

interface TransportCardProps {
    transport: TransportEntry;
}

export default function TransportCard({ transport }: TransportCardProps) {
    const [ref, { height }] = useMeasure();
    const [showDetails, setShowDetails] = useState(false);
    const props = useSpring({
        height: showDetails ? "auto" : 0,
        duration: 500,
    });

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

    const extraOptions = [
        "Transport Details",
        "Price Details",
        "Refund Policy",
    ];

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
                        {/*Nothing here */}
                    </Grid>
                    <Grid item xs={3}>
                        <Stack
                            direction={"column"}
                            spacing={1}
                            justifyContent={"center"}
                            alignItems={"flex-start"}
                            sx={{ height: "100%" }}
                        >
                            <Typography variant="h5">
                                {`${transport.time}`}
                            </Typography>
                            <Stack direction={"row"} spacing={2} alignItems={"center"}>
                                <Typography
                                    variant="h5"
                                    sx={{ fontWeight: "light" }}
                                >
                                    {`${transport.fare} Tk`}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ fontWeight: "light" }}
                                >
                                    {`Seat Available: ${transport.number_of_seats}`}
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
                                key={option}
                                sx={{
                                    color: "#008080",
                                    fontWeight: "bold",
                                    padding: 1,
                                }}
                                onClick={() => setShowDetails(!showDetails)}
                            >
                                {option}
                            </Button>
                        ))}
                    </Stack>

                    <animated.div style={props}>
                        <Stack
                            direction={"column"}
                            spacing={1}
                            sx={{
                                background: "#00000010",
                                padding: 2,
                            }}
                        >
                            <Typography variant="h6">Hello</Typography>
                            <Typography variant="body1">
                                I am details
                            </Typography>
                            <Typography variant="body1">
                                I will show you the way
                            </Typography>
                        </Stack>
                    </animated.div>
                </Stack>
            </Stack>
        </Paper>
    );
}
