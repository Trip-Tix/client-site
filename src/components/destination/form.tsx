import Submit from "@/components/destination/submit";
import Stack from "@mui/material/Stack";
import Transportation from "@components/destination/transportation";
import Location from "@components/destination/location";
import DateSelection from "@components/destination/date-selection";
import ForwardStats from "@components/destination/forward-stats";
import ReturnStats from "@components/destination/return-stats";
import { DestinationContext } from "@public/context/destination";
import { useContext } from "react";
import { useSpring, animated } from "@react-spring/web";
import { ColorContext } from "@public/context/global";
import Grid from "@mui/material/Unstable_Grid2";
import Distance from "@components/destination/distance";
import { Paper } from "@mui/material";
import SponserMessage from "@components/destination/sponser-message";

export default function Form() {
    const { mode } = useContext(ColorContext);
    const { destination, source } = useContext(DestinationContext);

    const dateAnimation = useSpring({
        opacity: destination === "" || source === "" ? 0 : 1,
        delay: 500,
    });

    return (
        <>
            <Grid
                container
                spacing={2}
                sx={{
                    width: "100vw",
                    padding: "1rem",
                }}
            >
                <Grid xs={8}>
                    <Location />
                </Grid>
                <Grid xs={4}>
                    <Distance />
                </Grid>

                <Grid xs={4}>
                    <DateSelection />
                </Grid>

                <Grid xs={4}>
                    <ForwardStats />
                </Grid>

                <Grid xs={4}>
                    <ReturnStats />
                </Grid>

                <Grid xs={8}>
                    <SponserMessage />
                </Grid>
                <Grid xs={4}>
                    <Submit />
                </Grid>
            </Grid>
        </>
    );
}
