import { useEffect, useState, useContext } from "react";
import { SeatSelectionContext } from "@public/context/seat-selection";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { layout_to_info_map, Seat } from "@public/context/seat-selection";

export default function SeatLayout() {
    const { row, column, layout, setLayout, selectedSeats, setSelectedSeats } =
        useContext(SeatSelectionContext);

    const handleClick = (row: number, column: number) => {
        if (layout[row][column] === 1) {
            const tempLayout = [...layout];
            tempLayout[row][column] = 6;
            setLayout(tempLayout);
            const tempSelectedSeats = [...selectedSeats];
            tempSelectedSeats.push({ row, column });
            setSelectedSeats(tempSelectedSeats);
        } else if (layout[row][column] === 6) {
            const tempLayout = [...layout];
            tempLayout[row][column] = 1;
            setLayout(tempLayout);
            const tempSelectedSeats = [...selectedSeats];
            const index = tempSelectedSeats.findIndex(
                (seat) => seat.row === row && seat.column === column
            );
            tempSelectedSeats.splice(index, 1);
            setSelectedSeats(tempSelectedSeats);
        }
    }

    return (
        <>
            <Stack direction={"column"} spacing={1}>
                {layout.map((row, rowIndex) => (
                    <Stack direction={"row"} spacing={1} key={rowIndex}>
                        {row.map((seat, columnIndex) => (
                            <Box
                                key={columnIndex}
                                sx={{
                                    width: "5rem",
                                    height: "5rem",
                                    backgroundColor:
                                        layout_to_info_map[seat].color,
                                    borderRadius: "0.5rem",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    cursor: seat === 1 || seat === 6 ? "pointer" : "default",
                                }}
                                onClick={() => handleClick(rowIndex, columnIndex)}
                            >
                                <Typography
                                    variant={"h3"}
                                    sx={{ color: "green" }}
                                >
                                    {layout_to_info_map[seat].label}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>
                ))}
            </Stack>
        </>
    );
}
