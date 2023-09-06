import { createContext } from "react";

export interface  Seat {
    row: number;
    column: number;
}

interface SeatSelectionContextType {
    row: number;
    setRow: (row: number) => void;
    column: number;
    setColumn: (column: number) => void;
    layout: number[][];
    setLayout: (layout: number[][]) => void;
    price: number;
    setPrice: (price: number) => void;
    selectedSeats: Seat[];
    setSelectedSeats: (selectedSeats: Seat[]) => void;
}

export const layout_to_info_map = [
    {
        information: "Unavailable",
        label: "",
        color: "invisible",
    },
    {
        information: "Free",
        label: "",
        color: "white",
    },
    {
        information: "Male Temporary Booked",
        label: "M",
        color: "blue",
    },
    {
        information: "Female Temporary Booked",
        label: "F",
        color: "blue",
    },
    {
        information: "Male Booked",
        label: "M",
        color: "red",
    },
    {
        information: "Female Booked",
        label: "F",
        color: "red",
    },
    {
        information: "Temporary Selection",
        label: "T",
        color: "yellow",
    }
]

export const SeatSelectionContext = createContext<SeatSelectionContextType>({
    row: 0,
    setRow: () => {},
    column: 0,
    setColumn: () => {},
    layout: [[]],
    setLayout: () => {},
    price: 0,
    setPrice: () => {},
    selectedSeats: [],
    setSelectedSeats: () => {},
});

