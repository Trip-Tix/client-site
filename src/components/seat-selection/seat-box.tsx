import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Popover from "@mui/material/Popover";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import { layout_to_info_map, SeatLabel } from "@public/context/seat-selection";
import React from "react";

interface SeatBoxProps {
    seat: number;
    rowIndex: number;
    columnIndex: number;
    handleClick: (rowIndex: number, columnIndex: number) => void;
}

export default function SeatBox({
    seat,
    rowIndex,
    columnIndex,
    handleClick,
}: SeatBoxProps) {
    const [hovered, setHovered] = React.useState(false);
    const SeatIcon = layout_to_info_map[seat].icon;
    const available = seat !== SeatLabel.Unavailable;
    const booked =
        seat !== SeatLabel.Free && seat !== SeatLabel.TemporarySelection;
    const gender = booked
        ? seat === SeatLabel.MaleBooked ||
          seat === SeatLabel.MaleTemporaryBooked
            ? "M"
            : "F"
        : "";

    return (
        <>
            <Box
                sx={{
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: layout_to_info_map[seat].color,
                    borderRadius: "0.5rem",
                    cursor: seat === 1 || seat === 6 ? "pointer" : "default",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                }}
                onClick={() => handleClick(rowIndex, columnIndex)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <Icon
                    sx={{
                        display: hovered || !available ? "none" : "block",
                        width: "auto",
                        height: "auto",
                    }}
                >
                    <SeatIcon />
                </Icon>
                <Typography
                    sx={{ display: hovered && available ? "block" : "none" }}
                >
                    {gender}
                </Typography>
            </Box>
        </>
    );
}
