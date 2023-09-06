import { Icon, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Styles from "@styles/list-transport/info-bar.module.css";
import { use, useEffect, useState, useContext } from "react";
import Paper from "@mui/material/Paper";
import { ColorContext } from "@public/context/global";


export default function InfoBar() {
    const [destination, setDestination] = useState<string>("");
    const [source, setSource] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [returnDate, setReturnDate] = useState<string>("");
    const [hasReturn, setHasReturn] = useState<boolean>(false);

    useEffect(() => {
        setDestination(sessionStorage.getItem("destination") as string);
        setSource(sessionStorage.getItem("source") as string);
        setDate(sessionStorage.getItem("date") as string);
        setReturnDate(sessionStorage.getItem("returnDate") as string);
        setHasReturn(sessionStorage.getItem("hasReturn") === "true");
    }, []);

    const { mode } = useContext(ColorContext);

    return (
        <Paper elevation={3}>
        <Grid
            container
            spacing={0}
        >
            <Grid xs={4.8} className={Styles.main}>
                <Stack
                    direction="row"
                    sx={{
                        border: "1px solid rgba(0,0,0,0.1)",
                    }}
                >
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            padding: "0.5rem",
                            width: "50%",
                        }}
                    >
                        <Stack direction="column" alignItems="center">
                            <Typography
                                variant="body2"
                            >
                                From
                            </Typography>
                            <Icon sx={{ width: "auto", height: "auto" }}>
                                <ArrowCircleUpIcon
                                    sx={{
                                        height: "3rem",
                                        width: "3rem",
                                    }}
                                />
                            </Icon>
                        </Stack>
                        <Typography variant="h4" sx={{ fontWeight: "light" }}>
                            {source}
                        </Typography>
                    </Stack>
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            padding: "0.5rem",
                            width: "50%",
                            borderLeft: "1px solid rgba(0,0,0,0.1)",
                        }}
                    >
                        <Stack direction="column" alignItems="center">
                            <Typography
                                variant="body2"
                            >
                                To
                            </Typography>
                            <Icon sx={{ width: "auto", height: "auto" }}>
                                <ArrowCircleDownIcon
                                    sx={{
                                        height: "3rem",
                                        width: "3rem",
                                    }}
                                />
                            </Icon>
                        </Stack>
                        <Typography variant="h4" sx={{ fontWeight: "light" }}>
                            {destination}
                        </Typography>
                    </Stack>
                </Stack>
                <div className={mode === "dark" ? Styles.circle_dark : Styles.circle_dark}></div>
                <Icon
                    sx={{ width: "auto", height: "auto" }}
                    className={Styles.icon}
                >
                    <CompareArrowsIcon
                        sx={{
                            height: "2.5rem",
                            width: "2.5rem",
                        }}
                    />
                </Icon>
            </Grid>
            <Grid xs={4.8}>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        height: "100%",
                    }}
                >
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            width: "50%",
                            height: "100%",
                            border: "1px solid rgba(0,0,0,0.1)",
                        }}
                    >
                        <Icon sx={{ width: "auto", height: "auto" }}>
                            <CalendarMonthIcon
                                sx={{
                                    height: "3rem",
                                    width: "3rem",
                                }}
                            />
                        </Icon>
                        <Stack direction="column">
                            <Typography
                                variant="body2"
                            >
                                Departure Date
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{ fontWeight: "light" }}
                            >
                                {date}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        justifyContent="center"
                        sx={{
                            width: "50%",
                            height: "100%",
                            border: "1px solid rgba(0,0,0,0.1)",
                        }}
                    >
                        <Icon sx={{ width: "auto", height: "auto" }}>
                            <CalendarMonthIcon
                                sx={{
                                    height: "3rem",
                                    width: "3rem",
                                }}
                            />
                        </Icon>
                        <Stack direction="column">
                            <Typography
                                variant="body2"
                            >
                                Return Date
                            </Typography>
                            <Typography
                                variant="h4"
                                sx={{ fontWeight: "light" }}
                            >
                                {hasReturn ? returnDate : "N/A"}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Grid>
            <Grid xs={2.4}>
                <Stack direction="column" alignItems="center" justifyContent="center"
                sx={{
                    height: "100%",
                    width: "100%",
                    border: "1px solid rgba(0,0,0,0.1)",
                }}
                >
                    <Typography
                        variant="body2"
                    >
                        Duration
                    </Typography>
                    <Typography
                        variant="h4"
                        sx={{ fontWeight: "light" }}
                    >
                        --h --m
                    </Typography>
                </Stack>
            </Grid>
        </Grid>
        </Paper>
    );
}
