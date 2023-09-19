import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import RouteIcon from "@mui/icons-material/Route";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import CircularProgress from "@mui/material/CircularProgress";

import { useState, useContext, useEffect, use } from "react";
import { DestinationContext } from "@public/context/destination";
import { getDistanceKm } from "@public/api-call/destination";

export default function Distance() {
    const [distance, setDistance] = useState(0);
    const {source, destination } = useContext(DestinationContext);
    const [toggleMile, setToggleMile] = useState(false);
    const [distanceData, setDistanceData] = useState(distance);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (source === "" || destination === ""){
            setDistance(0);
            setLoading(true);
            return;
        }
        setLoading(true);
        getDistanceKm(source, destination)
            .then((res) => {
                setDistance(res);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [source, destination]);

    useEffect(() => {
        if (distance === 0) {
            setLoading(true);
            return;
        }
        setLoading(false);
    }, [distance]);

    useEffect(() => {
        if (toggleMile) {
            setDistanceData(distance * 0.621371);
        } else {
            setDistanceData(distance);
        }
    }, [toggleMile, distance]);

    return (
        <Paper
            sx={{
                width: "100%",
                height: "100%",
                padding: "2rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
            }}
            elevation={3}
        >
            <Stack
                direction="column"
                alignItems="flex-start"
                justifyContent={"flex-start"}
            >
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-start"
                    spacing={2}
                >
                    <Icon>
                        <RouteIcon />
                    </Icon>
                    <Typography variant="h5">Distance</Typography>
                </Stack>
                {loading ? (
                    <CircularProgress />
                ) : (
                    <Typography variant="h2">{`${distanceData.toFixed(2)} ${
                        toggleMile ? "Mile" : "Km"
                    }`}</Typography>
                )}
            </Stack>
            <IconButton
                sx={{
                    width: "5rem",
                    height: "5rem",
                    color: "#fff",
                    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.25)",
                }}
                onClick={() => setToggleMile(!toggleMile)}
            >
                <ChangeCircleIcon
                    sx={{
                        width: "4rem",
                        height: "4rem",
                    }}
                />
            </IconButton>
        </Paper>
    );
}
