import { createContext } from "react";
import CloseIcon from '@mui/icons-material/Close';
import BookmarkIcon from '@mui/icons-material/Bookmark';    
import CheckIcon from '@mui/icons-material/Check';

export interface  Seat {
    row: number;
    column: number;
}

export const enum ValidationNumber {
    NID = 0,
    Passport = 1,
    BirthCertificate = 2,
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
    layout: number[][];
    setLayout: React.Dispatch<React.SetStateAction<number[][]>>;
    seatName: string[][];
    setSeatName: React.Dispatch<React.SetStateAction<string[][]>>;
    seatId: number[][];
    setSeatId: React.Dispatch<React.SetStateAction<number[][]>>;
    numberOfSeats: number;
    setNumberOfSeats: React.Dispatch<React.SetStateAction<number>>;
    availableSeatCount: number;
    setAvailableSeatCount: React.Dispatch<React.SetStateAction<number>>;
    selectedSeats: SeatDetailsFormProps[];
    setSelectedSeats: React.Dispatch<React.SetStateAction<SeatDetailsFormProps[]>>;
    price : number;
    setPrice : React.Dispatch<React.SetStateAction<number>>;
    uniqueId : string;
    setUniqueId : React.Dispatch<React.SetStateAction<string>>;
    transportId : number;
    setTransportId : React.Dispatch<React.SetStateAction<number>>;
    scheduleId : number;
    setScheduleId : React.Dispatch<React.SetStateAction<number>>;
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

interface LayoutInfo {
    information: string;
    label: string;
    color: string;
    icon: any;
}


export const layout_to_info_map: LayoutInfo[] = [
    {
        information: "Unavailable",
        label: "",
        color: "invisible",
        icon: CheckIcon,
    },
    {
        information: "Free",
        label: "",
        color: "#008080",
        icon: CheckIcon,
    },
    {
        information: "Male Temporary Booked",
        label: "M",
        color: "#C8C8C8",
        icon: CloseIcon,
    },
    {
        information: "Female Temporary Booked",
        label: "F",
        color: "#C8C8C8",
        icon: CloseIcon,
    },
    {
        information: "Male Booked",
        label: "M",
        color: "#888888",
        icon: CloseIcon,
    },
    {
        information: "Female Booked",
        label: "F",
        color: "#888888",
        icon: CloseIcon,
    },
    {
        information: "Temporary Selection",
        label: "T",
        color: "green",
        icon: BookmarkIcon,
    }
]

export const SeatSelectionContext = createContext<SeatSelectionContextType>({
    layout: [],
    setLayout: () => {},
    seatName: [],
    setSeatName: () => {},
    seatId: [],
    setSeatId: () => {},
    numberOfSeats: 0,
    setNumberOfSeats: () => {},
    availableSeatCount: 0,
    setAvailableSeatCount: () => {},
    selectedSeats: [],
    setSelectedSeats: () => {},
    price : 0,
    setPrice : () => {},
    uniqueId : "",
    setUniqueId : () => {},
    transportId : 0,
    setTransportId : () => {},
    scheduleId : 0,
    setScheduleId : () => {},
});

