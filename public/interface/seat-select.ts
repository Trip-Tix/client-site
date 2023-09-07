import { Seat } from "@public/context/seat-selection";

const enum ValidationNumber {
    NID = 1,
    Passport = 2,
    BirthCertificate = 3,
}

const enum Gender {
    Male = 1,
    Female = 2,
}


export interface SeatDetailsFormProps {
    name: string;
    phoneNumber: number;
    dateOfBirth: string;
    typeOfID: ValidationNumber;
    NIDNumber: number;
    passportNumber: number;
    birthCertificateNumber: number;
    Gender: Gender;
    selectedSeat: Seat;
}
