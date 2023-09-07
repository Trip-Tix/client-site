import { useContext, useState, useEffect } from "react";
import { SeatSelectionContext } from "@public/context/seat-selection";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

export default function TotalPrice() {
    const { price, selectedSeats } = useContext(SeatSelectionContext);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        console.log(selectedSeats, price);
        setTotalPrice(price * selectedSeats.length);
    }, [selectedSeats, price]);

    return (
        <Paper
            sx={{
                width: "100%",
                height: "100%",
                padding: "1rem",
            }}
        >
            <Stack
                direction={"column"}
                spacing={1}
                justifyContent={"flex-start"}
            >
                <Typography variant={"h4"}>Total Price</Typography>
                <Typography
                    variant={"h6"}
                    sx={{
                        fontWeight: "light",
                    }}
                >{`${totalPrice} Tk`}</Typography>
            </Stack>
        </Paper>
    );
}
