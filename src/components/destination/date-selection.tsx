import { Paper, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useContext, useEffect } from "react";
import { DestinationContext } from "@public/context/destination";

export default function DateSelection() {
    const {
        date,
        setDate,
        returnDate,
        setReturnDate,
        hasReturn,
        setHasReturn,
    } = useContext(DestinationContext);

    useEffect(() => {
        if (returnDate !== "") {
            setHasReturn(true);
        } else {
            setHasReturn(false);
        }
    }, [returnDate, setHasReturn]);

    return (
        <Paper
            elevation={3}
            sx={{
                width: "50%",
                height: "100%",
                padding: "2rem",
            }}
        >
            <Stack
                spacing={2}
                sx={{
                    width: "100%",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
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
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </Stack>

                <Typography
                    variant="h5"
                    sx={{
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
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                    />
                </Stack>
            </Stack>
        </Paper>
    );
}
