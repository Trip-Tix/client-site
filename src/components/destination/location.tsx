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
import { getLocations, LocationData } from "@public/api-call/destination";
import CircularProgress from "@mui/material/CircularProgress";

export default function Location() {
    const animationStartTime = 500;

    const sourceAnimation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: animationStartTime,
    });

    const {
        source,
        setSource,
        destination,
        setDestination,
        sourceId,
        setSourceId,
        destinationId,
        setDestinationId,
    } = useContext(DestinationContext);

    const [ref, { width }] = useMeasure();
    const boxSlide = useSpring({
        width: source === "" ? 0 : width,
        delay: animationStartTime,
    });

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

    const [locations, setLocations] = useState<LocationData[]>([]);

    const [loading, setLoading] = useState(false);
    const { transport } = useContext(DestinationContext);
    useEffect(() => {
        setLoading(true);
        getLocations(transport).then((res) => {
            setLocations(res);
            setLoading(false);
        });
    }, [transport]);

    const { mode } = useContext(ColorContext);
    const [filteredDestination, setFilteredDestination] = useState<
        LocationData[]
    >([]);
    useEffect(() => {
        if (source === "") setFilteredDestination(locations);
        setFilteredDestination(
            locations.filter((location) => location.label !== source)
        );
    }, [locations, source]);

    const [filteredSource, setFilteredSource] = useState<LocationData[]>([]);
    useEffect(() => {
        if (destination === "") setFilteredSource(locations);
        setFilteredSource(
            locations.filter((location) => location.label !== destination)
        );
    }, [locations, destination]);

    return (
        <Paper
            elevation={3}
            sx={{
                padding: "2rem",
            }}
        >
            <Stack spacing={2}>
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
                {loading && (
                    <Stack
                        direction="row"
                        justifyContent={"center"}
                        spacing={5}
                    >
                        <CircularProgress />
                    </Stack>
                )}

                {!loading && (
                    <Stack
                        direction="row"
                        justifyContent={"center"}
                        spacing={5}
                    >
                        <animated.div style={sourceAnimation}>
                            <Autocomplete
                                id="combo-box-demo"
                                options={filteredSource}
                                sx={{ width: 300 }}
                                renderInput={(params) => (
                                    <TextField {...params} label="Source" />
                                )}
                                inputValue={source}
                                onInputChange={(event, newInputValue) => {
                                    setSource(newInputValue);
                                    newInputValue === "" ||
                                    !locations.some(
                                        (location) =>
                                            location.label === newInputValue
                                    )
                                        ? setSourceId(0)
                                        : setSourceId(
                                              locations.filter(
                                                  (location) =>
                                                      location.label ===
                                                      newInputValue
                                              )[0].id
                                          );
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
                                className={
                                    mode === "dark"
                                        ? Style.slide_dark
                                        : Style.slide_light
                                }
                            />
                            <animated.div
                                style={sourceSelectedAnimation}
                                className={
                                    mode === "dark"
                                        ? Style.startDot_dark
                                        : Style.startDot_light
                                }
                            />
                            <animated.div
                                style={destinationSelectedAnimation}
                                className={
                                    mode === "dark"
                                        ? Style.endDot_dark
                                        : Style.endDot_light
                                }
                            />
                        </Box>

                        <animated.div style={destinationAnimation}>
                            <Autocomplete
                                id="combo-box-demo"
                                options={filteredDestination}
                                sx={{ width: 300 }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Destination"
                                    />
                                )}
                                inputValue={destination}
                                onInputChange={(event, newInputValue) => {
                                    setDestination(newInputValue);
                                    newInputValue === "" ||
                                    !locations.some(
                                        (location) =>
                                            location.label === newInputValue
                                    )
                                        ? setDestinationId(0)
                                        : setDestinationId(
                                              locations.filter(
                                                  (location) =>
                                                      location.label ===
                                                      newInputValue
                                              )[0].id
                                          );
                                }}
                            />
                        </animated.div>
                    </Stack>
                )}
            </Stack>
        </Paper>
    );
}
