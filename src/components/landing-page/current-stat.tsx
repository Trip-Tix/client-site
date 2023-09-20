import { useState, useEffect, use } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";

import {
    motion,
    useAnimation,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";

import totbus from "@public/image/stats/totbus.svg";
import tottrain from "@public/image/stats/tottrain.svg";
import totplane from "@public/image/stats/totplane.svg";
import totuse from "@public/image/stats/totuse.svg";
import tottick from "@public/image/stats/tottick.svg";
import totloc from "@public/image/stats/totloc.svg";

function getRandomNumber(min: number, max: number): number {
    if (min >= max) {
        throw new Error("Minimum value must be less than maximum value");
    }

    // Generate a random number between 0 (inclusive) and 1 (exclusive)
    const random = Math.random();

    // Scale the random number to fit within the desired range
    const scaledRandom = random * (max - min + 1);

    // Offset the scaled random number to start from the minimum value
    const result = Math.floor(scaledRandom) + min;

    return result;
}

interface CardProps {
    title: string;
    total: number;
    image: any;
    setHoveringCard: React.Dispatch<
        React.SetStateAction<"bus" | "train" | "flight" | "user">
    >;
}

const Card: React.FC<CardProps> = ({
    title,
    total,
    image,
    setHoveringCard,
}) => {
    return (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Grid xs={4}>
                <Paper
                    sx={{
                        padding: "2rem",
                        textAlign: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        height: "20rem",
                        width: "40rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                    onMouseEnter={() => {
                        setHoveringCard(
                            title === "Bus"
                                ? "bus"
                                : title === "Train"
                                ? "train"
                                : title === "Flight"
                                ? "flight"
                                : "user"
                        );
                    }}
                >
                    <Stack
                        direction={"row-reverse"}
                        spacing={6}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Box
                            sx={{
                                fontSize: "1rem",
                                fontWeight: "bold",
                                background: "white",
                                borderRadius: "50%",
                                padding: "1rem",
                            }}
                        >
                            <Image
                                src={image}
                                alt={title}
                                width={100}
                                height={100}
                            />
                        </Box>
                        <Stack
                            direction={"column"}
                            spacing={0}
                            alignItems={"flex-start"}
                        >
                            <Typography
                                variant={"h4"}
                            >{`Total ${title}`}</Typography>
                            <Typography variant={"h2"}>{total}</Typography>
                        </Stack>
                    </Stack>
                </Paper>
            </Grid>
        </motion.div>
    );
};

import {
    getBusCountUser,
    getTrainCountUser,
    getFlightCountUser,
    getUserCountUser,
} from "@public/api-call/home-page";

export default function CurrentStat() {
    const [busCount, setBusCount] = useState(0);
    const [trainCount, setTrainCount] = useState(0);
    const [flightCount, setFlightCount] = useState(0);
    const [userCount, setUserCount] = useState(0);
    const [ticketCount, setTicketCount] = useState(0);
    const [locationCount, setLocationCount] = useState(0);
    const [hoveringCard, setHoveringCard] = useState<
        "bus" | "train" | "flight" | "user"
    >("bus");

    useEffect(() => {
        console.log(hoveringCard);
    }, [hoveringCard]);

    useEffect(() => {
        getBusCountUser().then((res) => {
            console.log(res);
            setBusCount(res);
        });
        getTrainCountUser().then((res) => {
            console.log(res);
            setTrainCount(res);
        });
        getFlightCountUser().then((res) => {
            console.log(res);
            setFlightCount(res);
        });
        getUserCountUser().then((res) => {
            console.log(res);
            setUserCount(res);
        });
    }, []);

    return (
        <Stack direction={"column"} spacing={5} sx={{ padding: "2rem" }}>
            <Stack
                direction={"row"}
                spacing={5}
                justifyContent={"space-between"}
                alignContent={"center"}
                alignItems={"center"}
            >
                <Stack direction={"column"} spacing={2}>
                    <Typography variant={"h2"}>One Service</Typography>
                    <Typography variant={"h4"}>
                        for All your Ticketing Needs
                    </Typography>
                </Stack>
                <Stack direction={"column"} spacing={2} alignItems={"flex-end"}>
                    <Typography variant={"h6"}>
                        Personalize your ticketing experience
                    </Typography>
                    <Typography variant={"h6"}>
                        with our customizable ticketing platform
                    </Typography>
                </Stack>
            </Stack>
            <motion.div
                initial={{ x: -400 }}
                whileInView={{ x: 0 }}
                whileHover={{
                    x:
                        hoveringCard === "bus"
                            ? 50
                            : hoveringCard === "train"
                            ? -400
                            : hoveringCard === "flight"
                            ? -800
                            : -1200,
                }}
                transition={{ duration: 0.9 }}
            >
                <Stack
                    spacing={5}
                    direction={"row"}
                    sx={{
                        width: "250rem",
                    }}
                >
                    <Card
                        title={"Bus"}
                        total={busCount}
                        image={totbus}
                        setHoveringCard={setHoveringCard}
                    />
                    <Card
                        title={"Train"}
                        total={trainCount}
                        image={tottrain}
                        setHoveringCard={setHoveringCard}
                    />
                    <Card
                        title={"Flight"}
                        total={flightCount}
                        image={totplane}
                        setHoveringCard={setHoveringCard}
                    />
                    <Card
                        title={"User"}
                        total={userCount}
                        image={totuse}
                        setHoveringCard={setHoveringCard}
                    />
                </Stack>
            </motion.div>
        </Stack>
    );
}
