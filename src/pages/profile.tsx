import { getTicketHistory } from "@public/api-call/profile";
import {
    TicketHistoryData,
    TicketHistoryContext,
} from "@public/context/profile";

import { TransportType } from "@public/interface/transport";

import { useEffect, useState, useContext } from "react";

import Head from "next/head";
import Navbar from "@/components/destination/navbar";

import { ColorContext } from "@public/context/global";

import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import SubwayIcon from "@mui/icons-material/Subway";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";

import IconButton from "@mui/material/IconButton";

import BusTicketCard from "@/components/profile/bus-ticket-card";
import TrainTicketCard from "@components/profile/train-ticket-card";
import PlaneTicketCard from "@components/profile/plane-ticket-card";

import BusQueueTicketCard from "@/components/profile/queue-bus-ticket-card";
import TrainQueueTicketCard from "@components/profile/queue-train-ticket-card";
import PlaneQueueTicketCard from "@components/profile/queue-plane-ticket-card";

import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import HistoryIcon from "@mui/icons-material/History";

import { AnimatePresence, motion } from "framer-motion";

export default function Dashboard() {
    const { mode } = useContext(ColorContext);
    const [ticketHistory, setTicketHistory] = useState<TicketHistoryData>({
        busTicketInfo: [],
        busQueueTicketInfo: [],
        trainTicketInfo: [],
        trainQueueTicketInfo: [],
        airTicketInfo: [],
        airQueueTicketInfo: [],
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getTicketHistory()
            .then((res) => {
                setTicketHistory(res);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        console.log("Client: \n" + JSON.stringify(ticketHistory, null, 2));
    }, [ticketHistory]);

    const [username, setUserName] = useState("");

    useEffect(() => {
        setUserName(sessionStorage.getItem("username")! as string);
    }, []);

    const [selectedTransport, setSelectedTransport] = useState<TransportType>(
        TransportType.Bus
    );

    const [selectedOption, setSelectedOption] = useState<
        "queue" | "active" | "history"
    >("active");

    return (
        <>
            <Head>
                <title>Profile</title>
                <link rel="icon" href="/TripTixFavicon.ico" />
            </Head>
            <TicketHistoryContext.Provider
                value={{ ticketHistory, setTicketHistory }}
            >
                <Stack
                    direction={"column"}
                    spacing={0}
                    sx={{
                        minHeight: "100vh",
                        backgroundColor:
                            mode === "light" ? "#f5f5f5" : "#121212",
                    }}
                >
                    <Navbar />
                    {loading ? (
                        <CircularProgress
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                            }}
                        />
                    ) : (
                        <>
                            <Grid container spacing={2}>
                                <Grid item md={2} xs={12}>
                                    {/* Menu */}
                                    <Paper
                                        sx={{
                                            padding: "1rem",
                                            minHeight: {xs: "5vh", md: "95vh"},
                                            display: "flex",
                                            flexDirection: {xs : "row", md : "column"},
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Button
                                            variant={
                                                selectedOption === "queue"
                                                    ? "contained"
                                                    : "text"
                                            }
                                            sx={{
                                                marginBottom: {xs: "0rem", md: "1rem"},
                                            }}
                                            onClick={() =>
                                                setSelectedOption("queue")
                                            }
                                            disabled={
                                                selectedOption === "queue"
                                            }
                                            endIcon={<HourglassBottomIcon />}
                                        >
                                            Queue Ticket
                                        </Button>
                                        <Button
                                            variant={
                                                selectedOption === "active"
                                                    ? "contained"
                                                    : "text"
                                            }
                                            sx={{
                                                marginBottom: {xs: "0rem", md: "1rem"},
                                            }}
                                            onClick={() =>
                                                setSelectedOption("active")
                                            }
                                            disabled={
                                                selectedOption === "active"
                                            }
                                            endIcon={<LocalActivityIcon />}
                                        >
                                            Active Ticket
                                        </Button>
                                        <Button
                                            variant={
                                                selectedOption === "history"
                                                    ? "contained"
                                                    : "text"
                                            }
                                            sx={{
                                                marginBottom: {xs: "0rem", md: "1rem"},
                                            }}
                                            onClick={() =>
                                                setSelectedOption("history")
                                            }
                                            disabled={
                                                selectedOption === "history"
                                            }
                                            endIcon={<HistoryIcon />}
                                        >
                                            History
                                        </Button>
                                    </Paper>
                                </Grid>

                                <Grid item md={10} xs={12}>
                                    <AnimatePresence>
                                        <Stack
                                            direction={"column"}
                                            spacing={2}
                                            sx={{ padding: "1rem" }}
                                        >
                                            <Stack
                                                direction={"row"}
                                                spacing={2}
                                                sx={{
                                                    justifyContent:
                                                        "space-between",
                                                    color:
                                                        mode === "dark"
                                                            ? "#dfdfdf"
                                                            : "#121212",
                                                }}
                                            >
                                                <Typography variant={"h4"}>
                                                    Profile
                                                </Typography>
                                                <Typography variant={"h6"}>
                                                    {username}
                                                </Typography>
                                            </Stack>
                                            <Stack
                                                direction={"row"}
                                                spacing={2}
                                                alignItems={"center"}
                                                justifyContent={"center"}
                                            >
                                                <IconButton
                                                    onClick={() =>
                                                        setSelectedTransport(
                                                            TransportType.Bus
                                                        )
                                                    }
                                                    sx={{
                                                        backgroundColor:
                                                            selectedTransport ===
                                                            TransportType.Bus
                                                                ? "#ff593f"
                                                                : mode ===
                                                                  "dark"
                                                                ? "#121212"
                                                                : "#dfdfdf",
                                                    }}
                                                >
                                                    <DirectionsBusIcon />
                                                </IconButton>
                                                <IconButton
                                                    onClick={() =>
                                                        setSelectedTransport(
                                                            TransportType.Train
                                                        )
                                                    }
                                                    sx={{
                                                        backgroundColor:
                                                            selectedTransport ===
                                                            TransportType.Train
                                                                ? "#3f95ff"
                                                                : mode ===
                                                                  "dark"
                                                                ? "#121212"
                                                                : "#dfdfdf",
                                                    }}
                                                >
                                                    <SubwayIcon />
                                                </IconButton>
                                                <IconButton
                                                    onClick={() =>
                                                        setSelectedTransport(
                                                            TransportType.Flight
                                                        )
                                                    }
                                                    sx={{
                                                        backgroundColor:
                                                            selectedTransport ===
                                                            TransportType.Flight
                                                                ? "#6cff3f"
                                                                : mode ===
                                                                  "dark"
                                                                ? "#121212"
                                                                : "#dfdfdf",
                                                    }}
                                                >
                                                    <AirplanemodeActiveIcon />
                                                </IconButton>
                                            </Stack>
                                            
                                                {selectedOption ===
                                                    "active" && (
                                                        <motion.div
                                                        initial={{ opacity: 0, x: 100 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: 100 }}
                                                        transition={{
                                                            duration: 0.2,
                                                        }}
                                                    >
                                                        {selectedTransport ===
                                                            TransportType.Bus && (
                                                            <Stack
                                                                direction={
                                                                    "column"
                                                                }
                                                                spacing={2}
                                                                sx={{
                                                                    maxHeight:
                                                                        "80vh",
                                                                    overflowY:
                                                                        "auto",
                                                                }}
                                                            >
                                                                {ticketHistory.busTicketInfo.map(
                                                                    (
                                                                        ticket,
                                                                        index
                                                                    ) => {
                                                                        return (
                                                                            <BusTicketCard
                                                                                key={
                                                                                    index
                                                                                }
                                                                                ticket={
                                                                                    ticket
                                                                                }
                                                                                showPast={
                                                                                    false
                                                                                }
                                                                            />
                                                                        );
                                                                    }
                                                                )}
                                                            </Stack>
                                                        )}
                                                        {selectedTransport ===
                                                            TransportType.Train && (
                                                            <Stack
                                                                direction={
                                                                    "column"
                                                                }
                                                                spacing={2}
                                                                sx={{
                                                                    maxHeight:
                                                                        "80vh",
                                                                    overflowY:
                                                                        "auto",
                                                                }}
                                                            >
                                                                {ticketHistory.trainTicketInfo.map(
                                                                    (
                                                                        ticket,
                                                                        index
                                                                    ) => {
                                                                        return (
                                                                            <TrainTicketCard
                                                                                key={
                                                                                    index
                                                                                }
                                                                                ticket={
                                                                                    ticket
                                                                                }
                                                                                showPast={
                                                                                    false
                                                                                }
                                                                            />
                                                                        );
                                                                    }
                                                                )}
                                                            </Stack>
                                                        )}
                                                        {selectedTransport ===
                                                            TransportType.Flight && (
                                                            <Stack
                                                                direction={
                                                                    "column"
                                                                }
                                                                spacing={2}
                                                                sx={{
                                                                    maxHeight:
                                                                        "80vh",
                                                                    overflowY:
                                                                        "auto",
                                                                }}
                                                            >
                                                                {ticketHistory.airTicketInfo.map(
                                                                    (
                                                                        ticket,
                                                                        index
                                                                    ) => {
                                                                        return (
                                                                            <PlaneTicketCard
                                                                                key={
                                                                                    index
                                                                                }
                                                                                ticket={
                                                                                    ticket
                                                                                }
                                                                                showPast={
                                                                                    false
                                                                                }
                                                                            />
                                                                        );
                                                                    }
                                                                )}
                                                            </Stack>
                                                        )}
                                                    </motion.div>
                                                )}
                                            
                                            
                                                {selectedOption === "queue" && (
                                                    <motion.div
                                                    initial={{ opacity: 0, x: 100 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: 100 }}
                                                    transition={{
                                                        duration: 0.2,
                                                    }}
                                                >
                                                        {selectedTransport ===
                                                            TransportType.Bus && (
                                                            <Stack
                                                                direction={
                                                                    "column"
                                                                }
                                                                spacing={2}
                                                                sx={{
                                                                    maxHeight:
                                                                        "80vh",
                                                                    overflowY:
                                                                        "auto",
                                                                }}
                                                            >
                                                                {ticketHistory.busQueueTicketInfo.map(
                                                                    (
                                                                        ticket,
                                                                        index
                                                                    ) => {
                                                                        return (
                                                                            <BusQueueTicketCard
                                                                                key={
                                                                                    index
                                                                                }
                                                                                ticket={
                                                                                    ticket
                                                                                }
                                                                            />
                                                                        );
                                                                    }
                                                                )}
                                                            </Stack>
                                                        )}
                                                        {selectedTransport ===
                                                            TransportType.Train && (
                                                            <Stack
                                                                direction={
                                                                    "column"
                                                                }
                                                                spacing={2}
                                                                sx={{
                                                                    maxHeight:
                                                                        "80vh",
                                                                    overflowY:
                                                                        "auto",
                                                                }}
                                                            >
                                                                {ticketHistory.trainQueueTicketInfo.map(
                                                                    (
                                                                        ticket,
                                                                        index
                                                                    ) => {
                                                                        return (
                                                                            <TrainQueueTicketCard
                                                                                key={
                                                                                    index
                                                                                }
                                                                                ticket={
                                                                                    ticket
                                                                                }
                                                                            />
                                                                        );
                                                                    }
                                                                )}
                                                            </Stack>
                                                        )}
                                                        {selectedTransport ===
                                                            TransportType.Flight && (
                                                            <Stack
                                                                direction={
                                                                    "column"
                                                                }
                                                                spacing={2}
                                                                sx={{
                                                                    maxHeight:
                                                                        "80vh",
                                                                    overflowY:
                                                                        "auto",
                                                                }}
                                                            >
                                                                {ticketHistory.airQueueTicketInfo.map(
                                                                    (
                                                                        ticket,
                                                                        index
                                                                    ) => {
                                                                        return (
                                                                            <PlaneQueueTicketCard
                                                                                key={
                                                                                    index
                                                                                }
                                                                                ticket={
                                                                                    ticket
                                                                                }
                                                                            />
                                                                        );
                                                                    }
                                                                )}
                                                            </Stack>
                                                        )}
                                                    </motion.div>
                                                )}
                                            

                                            
                                                {selectedOption ===
                                                    "history" && (
                                                        <motion.div
                                                        initial={{ opacity: 0, x: 100 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: 100 }}
                                                        transition={{
                                                            duration: 0.2,
                                                        }}
                                                    >
                                                        {selectedTransport ===
                                                            TransportType.Bus && (
                                                            <Stack
                                                                direction={
                                                                    "column"
                                                                }
                                                                spacing={2}
                                                                sx={{
                                                                    maxHeight:
                                                                        "80vh",
                                                                    overflowY:
                                                                        "auto",
                                                                }}
                                                            >
                                                                {ticketHistory.busTicketInfo.map(
                                                                    (
                                                                        ticket,
                                                                        index
                                                                    ) => {
                                                                        return (
                                                                            <BusTicketCard
                                                                                key={
                                                                                    index
                                                                                }
                                                                                ticket={
                                                                                    ticket
                                                                                }
                                                                                showPast={
                                                                                    true
                                                                                }
                                                                            />
                                                                        );
                                                                    }
                                                                )}
                                                            </Stack>
                                                        )}
                                                        {selectedTransport ===
                                                            TransportType.Train && (
                                                            <Stack
                                                                direction={
                                                                    "column"
                                                                }
                                                                spacing={2}
                                                                sx={{
                                                                    maxHeight:
                                                                        "80vh",
                                                                    overflowY:
                                                                        "auto",
                                                                }}
                                                            >
                                                                {ticketHistory.trainTicketInfo.map(
                                                                    (
                                                                        ticket,
                                                                        index
                                                                    ) => {
                                                                        return (
                                                                            <TrainTicketCard
                                                                                key={
                                                                                    index
                                                                                }
                                                                                ticket={
                                                                                    ticket
                                                                                }
                                                                                showPast={
                                                                                    true
                                                                                }
                                                                            />
                                                                        );
                                                                    }
                                                                )}
                                                            </Stack>
                                                        )}
                                                        {selectedTransport ===
                                                            TransportType.Flight && (
                                                            <Stack
                                                                direction={
                                                                    "column"
                                                                }
                                                                spacing={2}
                                                                sx={{
                                                                    maxHeight:
                                                                        "80vh",
                                                                    overflowY:
                                                                        "auto",
                                                                }}
                                                            >
                                                                {ticketHistory.airTicketInfo.map(
                                                                    (
                                                                        ticket,
                                                                        index
                                                                    ) => {
                                                                        return (
                                                                            <PlaneTicketCard
                                                                                key={
                                                                                    index
                                                                                }
                                                                                ticket={
                                                                                    ticket
                                                                                }
                                                                                showPast={
                                                                                    true
                                                                                }
                                                                            />
                                                                        );
                                                                    }
                                                                )}
                                                            </Stack>
                                                        )}
                                                    </motion.div>
                                                )}
                                            
                                        </Stack>
                                    </AnimatePresence>
                                </Grid>
                            </Grid>
                        </>
                    )}
                </Stack>
            </TicketHistoryContext.Provider>
        </>
    );
}
