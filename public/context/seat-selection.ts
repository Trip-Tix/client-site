import { createContext } from "react";

export interface  Seat {
    row: number;
    column: number;
}

export const enum ValidationNumber {
    NID = 1,
    Passport = 2,
    BirthCertificate = 3,
}

export const enum Gender {
    Male = 1,
    Female = 2,
}

export interface SeatDetailsFormProps {
    name: string;
    phoneNumber: string;
    dateOfBirth: string;
    typeOfID: ValidationNumber;
    NIDNumber: number;
    passportNumber: number;
    birthCertificateNumber: number;
    Gender: Gender;
    selectedSeat: Seat;
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
    selectedSeats: SeatDetailsFormProps[];
    setSelectedSeats: (selectedSeats: SeatDetailsFormProps[]) => void;
}

export enum SeatLabel {
    Unavailable = 0,
    Free = 1,
    MaleTemporaryBooked = 2,
    FemaleTemporaryBooked = 3,
    MaleBooked = 4,
    FemaleBooked = 5,
    TemporarySelection = 6,
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
        color: "green",
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

