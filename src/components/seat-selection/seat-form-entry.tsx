import { useState, useEffect, useContext } from "react";
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
    const { selectedSeats, setSelectedSeats } = useContext(SeatSelectionContext);
    const [selectedId, setSelectedId] = useState<ValidationNumber>(
        ValidationNumber.NID
    );

    const ChangeNameAction = (event: React.ChangeEvent<HTMLInputElement>) => {
        const temp = [...selectedSeats];
        temp.filter((seat) => {
            if (seat.selectedSeat.row === row && seat.selectedSeat.column === column) {
                seat.name = event.target.value;
            }
        });
        setSelectedSeats(temp);
    };

    const ChangePhoneNumberAction = (event: React.ChangeEvent<HTMLInputElement>) => {
        const temp = [...selectedSeats];
        temp.filter((seat) => {
            if (seat.selectedSeat.row === row && seat.selectedSeat.column === column) {
                seat.phoneNumber = event.target.value;
            }
        });
        setSelectedSeats(temp);
    };

    const ChangeDateOfBirthAction = (event: React.ChangeEvent<HTMLInputElement>) => {
        const temp = [...selectedSeats];
        temp.filter((seat) => {
            if (seat.selectedSeat.row === row && seat.selectedSeat.column === column) {
                seat.dateOfBirth = event.target.value;
            }
        });
        setSelectedSeats(temp);
    };

    const ChangeIdentificationNumberAction = (event: React.ChangeEvent<HTMLInputElement>) => {
        const temp = [...selectedSeats];
        temp.filter((seat) => {
            if (seat.selectedSeat.row === row && seat.selectedSeat.column === column) {
                seat.typeOfID = parseInt(event.target.value === "" ? "0" : event.target.value);
            }
        });
        setSelectedSeats(temp);
    };

    const ChangeGenderAction = (event: React.ChangeEvent<HTMLInputElement>) => {
        const temp = [...selectedSeats];
        temp.filter((seat) => {
            if (seat.selectedSeat.row === row && seat.selectedSeat.column === column) {
                seat.Gender = parseInt(event.target.value === "" ? "0" : event.target.value);
            }
        });
        setSelectedSeats(temp);
    };

    return (
        <Stack direction={"column"} spacing={1}>
            <Typography variant={"h6"}>{`Seat ${row + 1} : ${
                column + 1
            }`}</Typography>
            <Stack direction={"row"} spacing={2}>
                <FormControl>
                    <FormLabel id="name">Name</FormLabel>
                    <TextField variant={"outlined"} onChange={ChangeNameAction} />
                </FormControl>
                <FormControl>
                    <FormLabel id="phone-number">Phone Number</FormLabel>
                    <TextField variant={"outlined"} onChange={ChangePhoneNumberAction} />
                </FormControl>
                <FormControl>
                    <FormLabel id="date-of-birth">Date of Birth</FormLabel>
                    <TextField variant={"outlined"} type="date" onChange={ChangeDateOfBirthAction} />
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
                    <TextField variant={"outlined"} />
                </FormControl>
                <FormControl>
                    <FormLabel id="gender">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        onChange={ChangeGenderAction}
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
