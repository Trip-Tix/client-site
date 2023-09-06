import { useSpring, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";
import { useEffect, useState, useContext } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Style from "@styles/destination/location.module.css";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { DestinationContext } from "@public/context/destination";
import { ColorContext } from "@public/context/global";

interface LocationData {
    label: string;
    id: number;
}

const locations: LocationData[] = [
    { label: "Dhaka", id: 1 },
    { label: "Chittagong", id: 2 },
    { label: "Sylhet", id: 3 },
    { label: "Rajshahi", id: 4 },
    { label: "Khulna", id: 5 },
    { label: "Barishal", id: 6 },
    { label: "Rangpur", id: 7 },
    { label: "Mymensingh", id: 8 },
];

export default function Location() {
    const animationStartTime = 500;

    const sourceAnimation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: animationStartTime,
    });

    const { source, setSource, destination, setDestination } =
        useContext(DestinationContext);

    const [ref, { width }] = useMeasure();
    const boxSlide = useSpring({
        width: source === "" ? 0 : width,
        delay: animationStartTime,
    });
    useEffect(() => {
        console.log(source === "");
    }, [source]);

    const destinationAnimation = useSpring({
        opacity: source === "" ? 0 : 1,
        delay: animationStartTime + 100,
    });

    const sourceSelectedAnimation = useSpring({
        opacity: source === "" ? 0 : 1,
        delay: animationStartTime - 300,
    });

    const destinationSelectedAnimation = useSpring({
        opacity: destination === "" || source === "" ? 0 : 1,
        delay: animationStartTime - 300,
    });

    const {mode} = useContext(ColorContext);

    return (
        <Paper
            sx={{
                padding: "2rem",
            }}
        >
            <Stack
                spacing={2}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: "bold",
                        textAlign: "left",
                        marginTop: "5%",
                    }}
                >
                    Select Location
                </Typography>
                <Stack direction="row" justifyContent={"center"} spacing={5}>
                    <animated.div style={sourceAnimation}>
                        <Autocomplete
                            id="combo-box-demo"
                            options={locations}
                            sx={{ width: 300 }}
                            renderInput={(params) => (
                                <TextField {...params} label="Source" />
                            )}
                            inputValue={source}
                            onInputChange={(event, newInputValue) => {
                                setSource(newInputValue);
                            }}
                        />
                    </animated.div>

                    <Box
                        sx={{
                            width: 1,
                        }}
                        ref={ref}
                        className={Style.box}
                    >
                        <animated.div
                            style={boxSlide}
                            className={mode === "dark" ? Style.slide_dark : Style.slide_light}
                        />
                        <animated.div
                            style={sourceSelectedAnimation}
                            className={mode === "dark" ? Style.startDot_dark : Style.startDot_light}
                        />
                        <animated.div
                            style={destinationSelectedAnimation}
                            className={mode === "dark" ? Style.endDot_dark : Style.endDot_light}
                        />
                    </Box>

                    <animated.div style={destinationAnimation}>
                        <Autocomplete
                            id="combo-box-demo"
                            options={locations}
                            sx={{ width: 300 }}
                            renderInput={(params) => (
                                <TextField {...params} label="Destination" />
                            )}
                            inputValue={destination}
                            onInputChange={(event, newInputValue) => {
                                setDestination(newInputValue);
                            }}
                        />
                    </animated.div>
                </Stack>
            </Stack>
        </Paper>
    );
}
