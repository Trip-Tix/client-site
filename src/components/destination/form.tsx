import Submit from "@components/destination/submit";
import Stack from "@mui/material/Stack";
import Transportation from "@components/destination/transportation";
import Location from "@components/destination/location";
import DateSelection from "@components/destination/date-selection";
import Stats from "@components/destination/stats";
import { DestinationContext } from "@public/context/destination";
import { useContext } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function Form() {
    const { destination, source } = useContext(DestinationContext);

    const dateAnimation = useSpring({
        opacity: destination === "" || source === "" ? 0 : 1,
        delay: 500,
    });

    return (
        <>
            <Stack
                sx={{
                    padding: "2rem",
                }}
                spacing={2}
                justifyContent={"center"}
                justifyItems={"center"}
            >
                <Location />
                <animated.div style={dateAnimation}>
                    <Stack spacing={2} direction={"row"} alignItems={"flex-start"}>
                        <DateSelection />
                        <Stats />
                    </Stack>
                </animated.div>
                <Submit />
            </Stack>
        </>
    );
}
