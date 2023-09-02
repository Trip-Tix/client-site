import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

export default function DateSelection() {
    return (
        <Stack
            spacing={2}
            sx={{
                width: "100%",
                backgroundColor: "#E4E4E4",
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    color: "#000000",
                    fontWeight: "bold",
                    textAlign: "left",
                    marginLeft: "5%",
                    marginTop: "5%",
                }}
            >
                Select Date
            </Typography>
            <Stack
                direction="row"
                spacing={2}
                sx={{
                    marginLeft: "5%",
                    marginTop: "2%",
                }}
            >
                <TextField
                    id="date"
                    label="Departure"
                    type="date"
                    defaultValue="2021-10-24"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Stack>

            <Typography
                variant="h5"
                sx={{
                    color: "#000000",
                    fontWeight: "bold",
                    textAlign: "left",
                    marginLeft: "5%",
                    marginTop: "5%",
                }}
            >
                Select Return Date (Optional)
            </Typography>
            <Stack
                direction="row"
                spacing={2}
                sx={{
                    marginLeft: "5%",
                    marginTop: "2%",
                }}
            >
                <TextField
                    id="date"
                    label="Return"
                    type="date"
                    defaultValue="2021-10-24"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Stack>
        </Stack>
    );
}
