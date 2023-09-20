import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { SeatSelectionContext } from "@public/context/seat-selection";
import { useContext, useEffect, useState } from "react";
import { SeatDetailsFormProps } from "@public/context/seat-selection";
import SeatFormEntry from "@components/seat-selection/seat-form-entry";

import { motion, AnimatePresence } from "framer-motion";

export default function SeatDetailsFrom() {
    const { selectedSeats } = useContext(SeatSelectionContext);

    return (
        <Paper
            sx={{
                flexGrow: 1,
                padding: "1rem",
                overflowY: "auto",
                maxHeight: "45rem",
            }}
        >
            <Stack direction={"column"} spacing={2}>
            <AnimatePresence>
                {selectedSeats.map((seat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -100 }} // Initial state for the entering element
                        animate={{ opacity: 1, x: 0 }} // Animate to this state
                        exit={{ opacity: 0, x: -100 }} // Animate to this state when exiting
                        transition={{ duration: 0.5 }} // Animation duration
                    >
                        <SeatFormEntry
                            row={seat.selectedSeat.row}
                            column={seat.selectedSeat.column}
                            key={index}
                        />
                    </motion.div>
                ))}
            </AnimatePresence>
            </Stack>
        </Paper>
    );
}
