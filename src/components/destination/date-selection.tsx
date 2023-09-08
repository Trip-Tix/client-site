import { Paper, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useContext, useEffect } from "react";
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
                    variant="h5"
                    sx={{
                        fontWeight: "bold",
                        textAlign: "left",
                        marginLeft: "5%",
                        marginTop: "5%",
                    }}
                >
                    Select Return Date
                </Typography>
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
                        variant="h5"
                        display={hasReturn ? "none" : "block"}
                    >
                        *Optional
                    </Typography>
                </Stack>
            </Stack>
        </Paper>
    );
}
