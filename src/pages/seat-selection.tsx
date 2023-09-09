import Navbar from "@/components/destination/navbar";
import TransportationLocked from "@/components/list-transport/transportation-locked";
import Stack from "@mui/material/Stack";
import Footer from "@/components/destination/footer";
import Grid from "@mui/material/Unstable_Grid2";
import SeatAlignment from "@/components/seat-selection/seat-alignment";
import SeatDetailsForm from "@/components/seat-selection/seat-details-form";
import TotalPrice from "@/components/seat-selection/total-price";
import ExtraInformation from "@/components/seat-selection/extra-information";
import { useEffect, useState } from "react";
import {
    SeatSelectionContext,
    SeatDetailsFormProps,
} from "@public/context/seat-selection";
import Styles from "@styles/list-transport/list-transport.module.css";
import { ColorContext } from "@public/context/global";
import { useContext } from "react";
import { getSeatLayout } from "@public/api-call/select-seat";
import TempBookWarning from "@/components/seat-selection/temp-book-warning";

export default function SeatSelect() {
    const [layout, setLayout] = useState<number[][]>([
        [0, 1, 0, 1],
        [2, 3, 2, 3],
        [0, 1, 0, 1],
        [4, 5, 4, 5],
    ]);
    const [seatName, setSeatName] = useState<string[][]>([
        ["A1", "A2", "A3", "A4"],
        ["B1", "B2", "B3", "B4"],
        ["C1", "C2", "C3", "C4"],
        ["D1", "D2", "D3", "D4"],
    ]);
    const [seatId, setSeatId] = useState<number[][]>([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
    ]);
    const [numberOfSeats, setNumberOfSeats] = useState<number>(12);
    const [availableSeatCount, setAvailableSeatCount] = useState<number>(4);
    const [selectedSeats, setSelectedSeats] = useState<SeatDetailsFormProps[]>(
        []
    );
    const [price, setPrice] = useState<number>(0);
    const [uniqueId, setUniqueId] = useState<string>("");
    const [scheduleId, setScheduleId] = useState<number>(0);
    const [transportId, setTransportId] = useState<number>(0);
    const [hasTempBooked, setHasTempBooked] = useState<boolean>(false);
    const [layoutLoading, setLayoutLoading] = useState<boolean>(true);

    const { mode } = useContext(ColorContext);
    useEffect(() => {
        setLayoutLoading(true);
        getSeatLayout()
            .then((res) => {
                console.log(res);
                if (res) {
                    setLayout(res.layout.length === 0 ? layout : res.layout);
                    setSeatName(res.seatName);
                    setSeatId(res.SeatId);
                    setNumberOfSeats(res.numberOfSeats);
                    setAvailableSeatCount(res.availableSeatCount);
                    setPrice(res.price);
                    setUniqueId(res.uniqueId);
                    setScheduleId(res.scheduleId);
                    setTransportId(res.transportId);
                }
            })
            .finally(() => {
                setLayoutLoading(false);
            });
    }, []);

    return (
        <>
            <SeatSelectionContext.Provider
                value={{
                    layout,
                    setLayout,
                    seatName,
                    setSeatName,
                    seatId,
                    setSeatId,
                    numberOfSeats,
                    setNumberOfSeats,
                    availableSeatCount,
                    setAvailableSeatCount,
                    selectedSeats,
                    setSelectedSeats,
                    price,
                    setPrice,
                    uniqueId,
                    setUniqueId,
                    scheduleId,
                    setScheduleId,
                    transportId,
                    setTransportId,
                    hasTempBooked,
                    setHasTempBooked,
                    layoutLoading
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
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            padding: "1rem",
                        }}
                    >
                        <Grid xs={4}>
                            <TotalPrice />
                        </Grid>
                        <Grid xs={8}>
                            <ExtraInformation />
                        </Grid>
                        {hasTempBooked && (
                            <Grid xs={12}>
                                <TempBookWarning />
                            </Grid>
                        )}
                        <Grid xs={8}>
                            <SeatDetailsForm />
                        </Grid>
                        <Grid xs={4}>
                            <SeatAlignment />
                        </Grid>
                    </Grid>
                </div>
            </SeatSelectionContext.Provider>
        </>
    );
}
