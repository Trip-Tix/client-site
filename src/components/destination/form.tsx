import Submit from "@components/destination/submit";
import Stack from "@mui/material/Stack";
import Transportation from "@components/destination/transportation";
import Location from "@components/destination/location";
import DateSelection from "@components/destination/date-selection";

export default function Form() {
    return (
        <>
            <Stack
                spacing={2}
                sx={{
                    width: "100%",
                    backgroundColor: "#E4E4E4",
                }}
            >
                <Transportation />
                <Stack
                    sx={{
                        padding: "2rem",
                    }}
                    spacing={2}
                >
                    <Location />
                    <DateSelection />
                    <Submit />
                </Stack>
            </Stack>
        </>
    );
}
