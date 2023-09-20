import { useState, useEffect, useContext, use } from "react";
import {
    SeatSelectionContext,
    SeatDetailsFormProps,
} from "@public/context/seat-selection";
import Stack from "@mui/material/Stack";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Divider from "@mui/material/Divider";
import { ValidationNumber, Gender } from "@public/context/seat-selection";
import FormHelperText from "@mui/material/FormHelperText";

import { motion, useAnimation, useScroll } from "framer-motion";

interface SeatFormEntryProps {
    row: number;
    column: number;
}

const IdentificationText = [
    "NID Number",
    "Passport Number",
    "Birth Certificate Number",
];

export default function SeatFormEntry({ row, column }: SeatFormEntryProps) {
    const { selectedSeats, setSelectedSeats } =
        useContext(SeatSelectionContext);
    const [selectedId, setSelectedId] = useState<ValidationNumber>(
        ValidationNumber.NID
    );

    const [seatName, sth] = useState(
        selectedSeats.find(
            (seat) =>
                seat.selectedSeat.row === row &&
                seat.selectedSeat.column === column
        )?.seatName
    );

    const [name, setName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [dateOfBirth, setDateOfBirth] = useState<string>("");
    const [nidNumber, setNidNumber] = useState<number>(0);
    const [passportNumber, setPassportNumber] = useState<number>(0);
    const [birthCertificateNumber, setBirthCertificateNumber] =
        useState<number>(0);

    const ChangeNameAction = (event: React.ChangeEvent<HTMLInputElement>) => {
        const temp = [...selectedSeats];
        temp.filter((seat) => {
            if (
                seat.selectedSeat.row === row &&
                seat.selectedSeat.column === column
            ) {
                seat.name = event.target.value;
            }
        });
        setSelectedSeats(temp);
        setName(event.target.value);
    };

    const ChangePhoneNumberAction = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const temp = [...selectedSeats];
        temp.filter((seat) => {
            if (
                seat.selectedSeat.row === row &&
                seat.selectedSeat.column === column
            ) {
                seat.phoneNumber = event.target.value;
            }
        });
        setSelectedSeats(temp);
        setPhoneNumber(event.target.value);
    };

    const ChangeDateOfBirthAction = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const temp = [...selectedSeats];
        temp.filter((seat) => {
            if (
                seat.selectedSeat.row === row &&
                seat.selectedSeat.column === column
            ) {
                seat.dateOfBirth = event.target.value;
            }
        });
        setSelectedSeats(temp);
        setDateOfBirth(event.target.value);
    };

    const ChangeIdentificationNumberAction = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const temp = [...selectedSeats];
        temp.filter((seat) => {
            if (
                seat.selectedSeat.row === row &&
                seat.selectedSeat.column === column
            ) {
                seat.typeOfID = parseInt(
                    event.target.value === "" ? "0" : event.target.value
                );
            }
        });
        setSelectedSeats(temp);
    };

    const ChangeGenderAction = (event: React.ChangeEvent<HTMLInputElement>) => {
        const temp = [...selectedSeats];
        temp.filter((seat) => {
            if (
                seat.selectedSeat.row === row &&
                seat.selectedSeat.column === column
            ) {
                seat.Gender = parseInt(
                    event.target.value === "" ? "0" : event.target.value
                );
            }
        });
        setSelectedSeats(temp);
    };

    const ChangeNIDNumberAction = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const temp = [...selectedSeats];
        temp.filter((seat) => {
            if (
                seat.selectedSeat.row === row &&
                seat.selectedSeat.column === column
            ) {
                seat.NIDNumber = parseInt(
                    event.target.value === "" ? "0" : event.target.value
                );
            }
        });
        setSelectedSeats(temp);
        setNidNumber(parseInt(event.target.value));
    };

    const ChangePassportNumberAction = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const temp = [...selectedSeats];
        temp.filter((seat) => {
            if (
                seat.selectedSeat.row === row &&
                seat.selectedSeat.column === column
            ) {
                seat.passportNumber = parseInt(
                    event.target.value === "" ? "0" : event.target.value
                );
            }
        });
        setSelectedSeats(temp);
        setPassportNumber(parseInt(event.target.value));
    };

    const ChangeBirthCertificateNumberAction = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const temp = [...selectedSeats];
        temp.filter((seat) => {
            if (
                seat.selectedSeat.row === row &&
                seat.selectedSeat.column === column
            ) {
                seat.birthCertificateNumber = parseInt(
                    event.target.value === "" ? "0" : event.target.value
                );
            }
        });
        setSelectedSeats(temp);
        setBirthCertificateNumber(parseInt(event.target.value));
    };

    const IdentificationChangeApi = [
        ChangeNIDNumberAction,
        ChangePassportNumberAction,
        ChangeBirthCertificateNumberAction,
    ];

    // validity Checking
    const [nameError, setNameError] = useState<boolean>(false);
    const [nameErrorMessage, setNameErrorMessage] = useState<string>("");
    const [phoneNumberError, setPhoneNumberError] = useState<boolean>(false);
    const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] =
        useState<string>("");
    const [dateOfBirthError, setDateOfBirthError] = useState<boolean>(false);
    const [dateOfBirthErrorMessage, setDateOfBirthErrorMessage] =
        useState<string>("");
    const [identificationNumberError, setIdentificationNumberError] =
        useState<boolean>(false);
    const [
        identificationNumberErrorMessage,
        setIdentificationNumberErrorMessage,
    ] = useState<string>("");

    // check name
    useEffect(() => {
        if (name === "") {
            setNameError(true);
            setNameErrorMessage("Name is required");
        } else if (name.length < 3) {
            setNameError(true);
            setNameErrorMessage("Name must be at least 3 character");
        } else {
            setNameError(false);
            setNameErrorMessage("");
        }
    }, [name]);

    // check phone number
    useEffect(() => {
        if (phoneNumber === "") {
            setPhoneNumberError(true);
            setPhoneNumberErrorMessage("Phone Number is required");
        } else if (phoneNumber.length !== 11) {
            setPhoneNumberError(true);
            setPhoneNumberErrorMessage("Phone Number must be 11 digit");
        } else if (phoneNumber[0] !== "0" || phoneNumber[1] !== "1") {
            setPhoneNumberError(true);
            setPhoneNumberErrorMessage("Phone Number must start with 01");
        } else {
            setPhoneNumberError(false);
            setPhoneNumberErrorMessage("");
        }
    }, [phoneNumber]);

    // check date of birth
    useEffect(() => {
        if (dateOfBirth === "") {
            setDateOfBirthError(true);
            setDateOfBirthErrorMessage("Date of Birth is required");
        } else if (new Date(dateOfBirth) > new Date()) {
            setDateOfBirthError(true);
            setDateOfBirthErrorMessage("Date of Birth can't be future date");
        } else if (new Date(dateOfBirth) < new Date("1900-01-01")) {
            setDateOfBirthError(true);
            setDateOfBirthErrorMessage("Date of Birth can't be before 1900");
        } else {
            setDateOfBirthError(false);
            setDateOfBirthErrorMessage("");
        }
    }, [dateOfBirth]);

    // if identification number is nid, nid should be available
    useEffect(() => {
        if (selectedId !== ValidationNumber.NID) return;
        if (nidNumber === 0) {
            setIdentificationNumberError(true);
            setIdentificationNumberErrorMessage("NID Number is required");
        } else if (nidNumber.toString().length !== 10) {
            setIdentificationNumberError(true);
            setIdentificationNumberErrorMessage("NID Number must be 10 digit");
        } else {
            setIdentificationNumberError(false);
            setIdentificationNumberErrorMessage("");
        }
    }, [selectedId, nidNumber]);

    // if identification number is passport, passport should be available
    useEffect(() => {
        if (selectedId !== ValidationNumber.Passport) return;
        if (passportNumber === 0) {
            setIdentificationNumberError(true);
            setIdentificationNumberErrorMessage("Passport Number is required");
        } else if (passportNumber.toString().length !== 9) {
            setIdentificationNumberError(true);
            setIdentificationNumberErrorMessage(
                "Passport Number must be 9 digit"
            );
        } else {
            setIdentificationNumberError(false);
            setIdentificationNumberErrorMessage("");
        }
    }, [selectedId, passportNumber]);

    // if identification number is birth certificate, birth certificate should be available
    useEffect(() => {
        if (selectedId !== ValidationNumber.BirthCertificate) return;
        if (birthCertificateNumber === 0) {
            setIdentificationNumberError(true);
            setIdentificationNumberErrorMessage(
                "Birth Certificate Number is required"
            );
        } else if (birthCertificateNumber.toString().length !== 17) {
            setIdentificationNumberError(true);
            setIdentificationNumberErrorMessage(
                "Birth Certificate Number must be 17 digit"
            );
        } else {
            setIdentificationNumberError(false);
            setIdentificationNumberErrorMessage("");
        }
    }, [selectedId, birthCertificateNumber]);

    // if any error is true, set is valid to false
    useEffect(() => {
        const temp = [...selectedSeats];
        temp.filter((seat) => {
            if (
                seat.selectedSeat.row === row &&
                seat.selectedSeat.column === column
            ) {
                if (
                    nameError ||
                    phoneNumberError ||
                    dateOfBirthError ||
                    identificationNumberError
                ) {
                    seat.isValid = false;
                } else {
                    seat.isValid = true;
                }
            }
        });
        setSelectedSeats(temp);
    }, [
        nameError,
        phoneNumberError,
        dateOfBirthError,
        identificationNumberError,
    ]);

    return (
        <Stack direction={"column"} spacing={1}>
            <Typography
                variant={"h6"}
                sx={{
                    fontWeight: "light",
                }}
            >
                {seatName}
            </Typography>
            <Stack direction={"row"} spacing={2}>
                <FormControl>
                    <FormLabel id="name">Name</FormLabel>
                    <TextField
                        variant={"outlined"}
                        onChange={ChangeNameAction}
                        error={nameError}
                    />
                    <FormHelperText error={nameError}>
                        {nameErrorMessage}
                    </FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel id="phone-number">Phone Number</FormLabel>
                    <TextField
                        variant={"outlined"}
                        onChange={ChangePhoneNumberAction}
                        error={phoneNumberError}
                    />
                    <FormHelperText error={phoneNumberError}>
                        {phoneNumberErrorMessage}
                    </FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel id="date-of-birth">Date of Birth</FormLabel>
                    <TextField
                        variant={"outlined"}
                        type="date"
                        onChange={ChangeDateOfBirthAction}
                        error={dateOfBirthError}
                    />
                    <FormHelperText error={dateOfBirthError}>
                        {dateOfBirthErrorMessage}
                    </FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel id="Type of id">
                        Type of Identification
                    </FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={selectedId}
                        onChange={(event) => {
                            setSelectedId(parseInt(event.target.value));
                            ChangeIdentificationNumberAction(event);
                        }}
                    >
                        <FormControlLabel
                            value={ValidationNumber.NID}
                            control={<Radio />}
                            label="NID"
                        />
                        <FormControlLabel
                            value={ValidationNumber.Passport}
                            control={<Radio />}
                            label="Passport"
                        />
                        <FormControlLabel
                            value={ValidationNumber.BirthCertificate}
                            control={<Radio />}
                            label="Birth Certificate"
                        />
                    </RadioGroup>
                </FormControl>
            </Stack>
            <Stack direction={"row"} spacing={2}>
                <FormControl>
                    <FormLabel id="nid-number">{`${IdentificationText[selectedId]}`}</FormLabel>
                    <TextField
                        variant={"outlined"}
                        onChange={IdentificationChangeApi[selectedId]}
                        error={identificationNumberError}
                    />
                    <FormHelperText error={identificationNumberError}>
                        {identificationNumberErrorMessage}
                    </FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel id="gender">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={ChangeGenderAction}
                        defaultValue={Gender.Male}
                    >
                        <FormControlLabel
                            value={Gender.Male}
                            control={<Radio />}
                            label="Male"
                        />
                        <FormControlLabel
                            value={Gender.Female}
                            control={<Radio />}
                            label="Female"
                        />
                        <FormControlLabel
                            value={0}
                            control={<Radio />}
                            label="Other"
                        />
                    </RadioGroup>
                </FormControl>
            </Stack>
            <Divider variant="middle" />
        </Stack>
    );
}
