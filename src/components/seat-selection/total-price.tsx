import { useContext, useState, useEffect } from "react";
import {
    SeatSelectionContext,
    SeatDetailsFormProps,
} from "@public/context/seat-selection";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { processPurchase } from "@public/api-call/select-seat";
import { useRouter } from "next/router";

export default function TotalPrice() {
    const { price, selectedSeats } = useContext(SeatSelectionContext);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const router = useRouter();

    useEffect(() => {
        setTotalPrice(price * selectedSeats.length);
    }, [selectedSeats, price]);

    const handleClick = () => {
        processPurchase(selectedSeats).then((res) => {
            if (res) router.push(res);
        });
    };

    return (
        <Paper
            sx={{
                width: "100%",
                height: "100%",
                padding: "1rem",
            }}
        >
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
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
                <Button
                    variant={"contained"}
                    sx={{
                        width: "20%",
                        height: "100%",
                    }}
                    onClick={handleClick}
                >
                    Confirm
                </Button>
            </Stack>
        </Paper>
    );
}
