import { Typography } from "@mui/material";
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
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
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
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                />
            </Stack>
        </Stack>
    );
}
