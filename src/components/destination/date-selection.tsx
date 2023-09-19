import { Paper, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useContext, useEffect, useState } from "react";
import { DestinationContext } from "@public/context/destination";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SouthEastIcon from "@mui/icons-material/SouthEast";
import Icon from "@mui/material/Icon";

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

    const [forwardDateError, setForwardDateError] = useState(false);
    const [returnDateError, setReturnDateError] = useState(false);
    const [forwardDateErrorMessage, setForwardDateErrorMessage] = useState("");
    const [returnDateErrorMessage, setReturnDateErrorMessage] = useState("");
    const {hasError, setHasError} = useContext(DestinationContext);

    useEffect(() => {
        if (date === "") return;
        const today = new Date();
        const forwardDate = new Date(date);
        if (forwardDate < today) {
            setHasError(true);
            setForwardDateError(true);
            setForwardDateErrorMessage("Date cannot be in the past");
        } else {
            setHasError(false);
            setForwardDateError(false);
            setForwardDateErrorMessage("");
        }
    }, [date]);

    useEffect(() => {
        if (returnDate === "") {
            return;
        }
        const today = new Date();
        const forwardDate = new Date(date);
        const returnDateObj = new Date(returnDate);
        if (returnDateObj < today) {
            setHasError(true);
            setReturnDateError(true);
            setReturnDateErrorMessage("Date cannot be in the past");
        } else if (returnDateObj < forwardDate) {
            setHasError(true);
            setReturnDateError(true);
            setReturnDateErrorMessage(
                "Return date cannot be before departure date"
            );
        } else {
            setHasError(false);
            setReturnDateError(false);
            setReturnDateErrorMessage("");
        }
    }, [returnDate, date]);

    return (
        <Paper
            elevation={3}
            sx={{
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
                    variant="body1"
                    sx={{
                        fontWeight: "bold",
                        textAlign: "left",
                        marginLeft: "5%",
                        marginTop: "5%",
                    }}
                >
                    Select Date
                </Typography>
                {forwardDateError && (
                    <Typography
                        variant="body1"
                        color="error"
                        sx={{
                            marginLeft: "5%",
                        }}
                    >
                        {forwardDateErrorMessage}
                    </Typography>
                )}
                <Stack
                    direction="row"
                    spacing={5}
                    sx={{
                        marginLeft: "5%",
                        marginTop: "2%",
                    }}
                    alignContent={"center"}
                    alignItems={"center"}
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
                    <Icon>
                        <NorthEastIcon />
                    </Icon>
                </Stack>

                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: "bold",
                        textAlign: "left",
                        marginLeft: "5%",
                        marginTop: "5%",
                    }}
                >
                    Select Return Date
                </Typography>
                {returnDateError && (
                    <Typography
                        variant="body1"
                        color="error"
                        sx={{
                            marginLeft: "5%",
                        }}
                    >
                        {returnDateErrorMessage}
                    </Typography>
                )}
                <Stack
                    direction="row"
                    spacing={5}
                    sx={{
                        marginLeft: "5%",
                        marginTop: "2%",
                    }}
                    alignContent={"center"}
                    alignItems={"center"}
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
                    <Icon>
                        <SouthEastIcon />
                    </Icon>
                    <Typography
                        variant="body1"
                        display={hasReturn ? "none" : "block"}
                    >
                        *Optional
                    </Typography>
                </Stack>
            </Stack>
        </Paper>
    );
}
