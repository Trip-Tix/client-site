import { useState, useEffect, use } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Image from "next/image";

import { motion, useAnimation } from "framer-motion";

import totbus from "@public/image/stats/totbus.svg";
import tottrain from "@public/image/stats/tottrain.svg";
import totplane from "@public/image/stats/totplane.svg";
import totuse from "@public/image/stats/totuse.svg";
import tottick from "@public/image/stats/tottick.svg";
import totloc from "@public/image/stats/totloc.svg";

interface CardProps {
    title: string;
    number: number;
    image: any;
}

const Card: React.FC<CardProps> = ({ title, number, image }) => {
    const [isHover, setIsHover] = useState(false);
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
        if (!isHover) {
            setCurrentNumber(number);
            return;
        }
        setCurrentNumber(0);
        const interval = setInterval(() => {
            setCurrentNumber((prev) => (prev + 1 > number ? number : prev + 1));
        }, 10);
        return () => clearInterval(interval);
    }, [isHover]);

    return (
        <Grid xs={4}>
            <Paper
                sx={{
                    padding: "2rem",
                    textAlign: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    height: "20rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
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
                        <Typography variant={"h2"}>{currentNumber}</Typography>
                    </Stack>
                </Stack>
            </Paper>
        </Grid>
    );
};

export default function CurrentStat() {
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
            <Grid container spacing={10}>
                <Card title={"Bus"} number={100} image={totbus} />
                <Card title={"Train"} number={100} image={tottrain} />
                <Card title={"Flight"} number={100} image={totplane} />
                <Card title={"User"} number={100} image={totuse} />
                <Card title={"Booked Ticket"} number={100} image={tottick} />
                <Card title={"Location"} number={100} image={totloc} />
            </Grid>
        </Stack>
    );
}
