import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

interface locationData {
    label: string;
    id: number;
}

const locations: locationData[] = [
    { label: "Dhaka", id: 1 },
    { label: "Chittagong", id: 2 },
    { label: "Sylhet", id: 3 },
    { label: "Rajshahi", id: 4 },
    { label: "Khulna", id: 5 },
    { label: "Barishal", id: 6 },
    { label: "Rangpur", id: 7 },
    { label: "Mymensingh", id: 8 },
];

export default function Source() {
    return (
        <Autocomplete
            id="combo-box-demo"
            options={locations}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} name="Location" />}
        />
    );
}
