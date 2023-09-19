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
                <Grid md={8} xs={12}>
                    <Location />
                </Grid>
                <Grid md={4} xs={12}>
                    <Distance />
                </Grid>

                <Grid md={4} xs={12}>
                    <DateSelection />
                </Grid>

                <Grid md={4} xs={12}>
                    <ForwardStats />
                </Grid>

                <Grid md={4} xs={12}>
                    <ReturnStats />
                </Grid>

                <Grid md={8} xs={12}>
                    <SponserMessage />
                </Grid>
                <Grid md={4} xs={12}>
                    <Submit />
                </Grid>
            </Grid>
        </>
    );
}
