import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { SeatSelectionContext } from "@public/context/seat-selection";
import { useContext, useEffect, useState } from "react";
import { SeatDetailsFormProps } from "@public/interface/seat-select"


export default function SeatDetailsFrom() {
    const { selectedSeats } = useContext(SeatSelectionContext);
    const [ seatDetails, setSeatDetails ] = useState<SeatDetailsFormProps[]>([]);

    return (
        <Paper sx={{ flexGrow: 1, padding: "1rem" }}>
            {selectedSeats.map((seat) => (
                <Stack key={`row${seat.row}col${seat.column}`} spacing={2} direction="row">
                    <div>{seat.row}</div>
                    <div>{seat.column}</div>
                </Stack>
            ))}
        </Paper>
    );
}
