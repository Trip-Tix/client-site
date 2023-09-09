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
import SeatBox from "@components/seat-selection/seat-box";
import CircularProgress from "@mui/material/CircularProgress";

export default function SeatLayout() {
    const {
        layout,
        setLayout,
        selectedSeats,
        setSelectedSeats,
        hasTempBooked,
        setHasTempBooked,
        seatId,
        seatName,
        layoutLoading,
    } = useContext(SeatSelectionContext);

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
                seatID: seatId[rowIndex][columnIndex],
                seatName: seatName[rowIndex][columnIndex],
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
        } else if (
            layout[rowIndex][columnIndex] === SeatLabel.MaleTemporaryBooked ||
            layout[rowIndex][columnIndex] === SeatLabel.FemaleTemporaryBooked
        ) {
            const newLayout = [...layout];
            newLayout[rowIndex][columnIndex] =
                newLayout[rowIndex][columnIndex] ===
                SeatLabel.MaleTemporaryBooked
                    ? SeatLabel.BookingTemporaryMaleBooked
                    : SeatLabel.BookingTemporaryFemaleBooked;
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
                seatID: seatId[rowIndex][columnIndex],
                seatName: seatName[rowIndex][columnIndex],
            });
            setSelectedSeats(tempSelectedSeats);
        } else if (
            layout[rowIndex][columnIndex] ===
                SeatLabel.BookingTemporaryMaleBooked ||
            layout[rowIndex][columnIndex] ===
                SeatLabel.BookingTemporaryFemaleBooked
        ) {
            const newLayout = [...layout];
            newLayout[rowIndex][columnIndex] =
                newLayout[rowIndex][columnIndex] ===
                SeatLabel.BookingTemporaryMaleBooked
                    ? SeatLabel.MaleTemporaryBooked
                    : SeatLabel.FemaleTemporaryBooked;
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

    useEffect(() => {
        let tempHasTempBooked = false;
        layout.forEach((row) => {
            row.forEach((seat) => {
                if (
                    seat === SeatLabel.MaleTemporaryBooked ||
                    seat === SeatLabel.FemaleTemporaryBooked
                ) {
                    tempHasTempBooked = true;
                }
            });
        });
        setHasTempBooked(tempHasTempBooked);
    }, [layout]);

    return (
        <>
            {layoutLoading ? (
                <Stack direction={"column"} spacing={2} alignItems={"center"}>
                    <Typography variant={"h6"}>Loading</Typography>
                    <CircularProgress />
                </Stack>
            ) : (
                <Stack direction={"column"} spacing={2} alignItems={"center"}>
                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                        {layout[0].map((row, rowIndex) => (
                            <Box
                                sx={{
                                    width: "3rem",
                                    height: "3rem",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    alignContent: "center",
                                }}
                                key={rowIndex}
                            >
                                <Typography key={rowIndex} variant={"h6"}>
                                    {rowIndex + 1}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>
                    {layout.map((row, rowIndex) => (
                        <Stack
                            direction={"row"}
                            spacing={2}
                            key={rowIndex}
                            alignItems={"center"}
                        >
                            {row.map((seat, columnIndex) => (
                                <SeatBox
                                    key={columnIndex}
                                    seat={seat}
                                    rowIndex={rowIndex}
                                    columnIndex={columnIndex}
                                    handleClick={handleClick}
                                />
                            ))}
                        </Stack>
                    ))}
                </Stack>
            )}
        </>
    );
}
