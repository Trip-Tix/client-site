import Navbar from "@/components/destination/navbar";
import TransportationLocked from "@/components/list-transport/transportation-locked";
import Stack from "@mui/material/Stack";
import Footer from "@/components/destination/footer";
import SeatAlignment from "@/components/seat-selection/seat-alignment";
import SeatDetailsForm from "@/components/seat-selection/seat-details-form";
import { useEffect, useState } from "react";
import { SeatSelectionContext, Seat } from "@public/context/seat-selection";
import Styles from "@styles/list-transport/list-transport.module.css";
import { ColorContext } from "@public/context/global";
import { useContext } from "react";
import { getSeatLayout } from "@public/api-call/select-seat";


export default function SeatSelect() {
    const [row, setRow] = useState<number>(4);
    const [column, setColumn] = useState<number>(4);
    const [layout, setLayout] = useState<number[][]>([
        [0, 1, 0, 1],
        [2, 3, 2, 3],
        [0, 1, 0, 1],
        [4, 5, 4, 5]
    ]);
    const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);
    const [price, setPrice] = useState<number>(0);

    const { mode } = useContext(ColorContext);
    useEffect(() => {
        getSeatLayout().then((res) => {
            setLayout(res.layout);
            setRow(res.row);
            setColumn(res.column);
            setPrice(res.price);
        });
    }, []);

    return (
        <>
            <SeatSelectionContext.Provider
                value={{
                    row,
                    setRow,
                    column,
                    setColumn,
                    layout,
                    setLayout,
                    price,
                    setPrice,
                    selectedSeats,
                    setSelectedSeats,
                }}
            >
                <div
                    className={
                        mode === "light"
                            ? Styles.globalPage_light
                            : Styles.globalPage_dark
                    }
                >
                    <Navbar />
                    <TransportationLocked />
                    <Stack
                        direction={"row"}
                        justifyContent={"center"}
                        alignItems={"flex-start"}
                        spacing={2}
                        sx={{
                            padding: "1rem",
                        }}
                    >
                        <SeatAlignment />
                        <SeatDetailsForm />
                    </Stack>
                    <Footer />
                </div>
            </SeatSelectionContext.Provider>
        </>
    );
}
