import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { SeatSelectionContext } from "@public/context/seat-selection";
import { useContext, useEffect, useState } from "react";
import { SeatDetailsFormProps } from "@public/context/seat-selection";
import SeatFormEntry from "@components/seat-selection/seat-form-entry";

export default function SeatDetailsFrom() {
    const { selectedSeats } = useContext(SeatSelectionContext);

    return (
        <Paper sx={{ flexGrow: 1, padding: "1rem", overflowY: "auto", maxHeight: "45rem" }}>
            <Stack direction={"column"} spacing={2}>
                {selectedSeats.map((seat, index) => (
                    <SeatFormEntry
                        row={seat.selectedSeat.row}
                        column={seat.selectedSeat.column}
                        key={index}
                    />
                ))}
            </Stack>
        </Paper>
    );
}
