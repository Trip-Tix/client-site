import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

export default function Legends() {
    return (
        <Stack
            direction={"column"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            sx={{ padding: "1rem" }}    
        >
            <Typography variant={"h4"}
            sx={{
                fontWeight: "light",
            }}>Legends</Typography>
        </Stack>
    );
}
