import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Legend from "@components/seat-selection/legends";
import SeatLayout from "@components/seat-selection/seat-layout";

export default function SeatAlignment() {
    return (
        <Paper
            sx={{
                flexGrow: 1,
                maxHeight: "80vh",
                overflow: "scroll",
            }}
        >
            <Stack
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ padding: "1rem" }}
            >
                <SeatLayout />
            </Stack>
        </Paper>
    );
}
