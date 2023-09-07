import { useEffect, useState, useContext } from "react";
import {
    SeatSelectionContext,
    SeatDetailsFormProps,
    SeatLabel,
    ValidationNumber,
    Gender,
} from "@public/context/seat-selection";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { layout_to_info_map, Seat } from "@public/context/seat-selection";

export default function SeatLayout() {
    const { row, column, layout, setLayout, selectedSeats, setSelectedSeats } =
        useContext(SeatSelectionContext);

    const handleClick = (rowIndex: number, columnIndex: number) => {
        if (layout[rowIndex][columnIndex] === SeatLabel.Free) {
            const newLayout = [...layout];
            newLayout[rowIndex][columnIndex] = SeatLabel.TemporarySelection;
            setLayout(newLayout);

            const tempSelectedSeats = [...selectedSeats];
            tempSelectedSeats.push({
                selectedSeat: {
                    row: rowIndex,
                    column: columnIndex,
                },
                name: "",
                phoneNumber: "01234567890",
                dateOfBirth: "",
                typeOfID: ValidationNumber.NID,
                NIDNumber: 0,
                passportNumber: 0,
                birthCertificateNumber: 0,
                Gender: Gender.Male,
            });
            setSelectedSeats(tempSelectedSeats);
        } else if (
            layout[rowIndex][columnIndex] === SeatLabel.TemporarySelection
        ) {
            const newLayout = [...layout];
            newLayout[rowIndex][columnIndex] = SeatLabel.Free;
            setLayout(newLayout);
            setSelectedSeats(
                selectedSeats.filter(
                    (seat) =>
                        seat.selectedSeat.row !== rowIndex ||
                        seat.selectedSeat.column !== columnIndex
                )
            );
        }
    };

    return (
        <>
            <Stack direction={"column"} spacing={1}>
                {layout.map((row, rowIndex) => (
                    <Stack direction={"row"} spacing={1} key={rowIndex}>
                        {row.map((seat, columnIndex) => (
                            <Box
                                key={columnIndex}
                                sx={{
                                    width: "2.5rem",
                                    height: "2.5rem",
                                    backgroundColor:
                                        layout_to_info_map[seat].color,
                                    borderRadius: "0.5rem",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    cursor:
                                        seat === 1 || seat === 6
                                            ? "pointer"
                                            : "default",
                                }}
                                onClick={() =>
                                    handleClick(rowIndex, columnIndex)
                                }
                            >
                                <Typography
                                    variant={"h5"}
                                >
                                    {layout_to_info_map[seat].label}
                                </Typography>
                            </Box>
                        ))}
                    <Typography variant={"h5"}>
                        {`Row: ${rowIndex + 1}`}
                    </Typography>
                    </Stack>
                ))}
            </Stack>
        </>
    );
}
