import { useState, useEffect, useContext } from "react";
import {
    ListTransportContext,
    FilteringData,
    TransportEntry,
} from "@public/context/list-transport";
import { TransportType } from "@public/interface/transport";
import Stack from "@mui/material/Stack";
import { getTransportList } from "@public/api-call/list-transport";
import AutoComplete from "@mui/material/Autocomplete";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Autocomplete from "@mui/material/Autocomplete";

export default function Filter() {
    const { filteringData, setFilteringData, transportList } =
        useContext(ListTransportContext);
    const [selectedFareRange, setSelectedFareRange] = useState<number[]>([
        0, 0,
    ]);
    const [selectedSeatRange, setSelectedSeatRange] = useState<number[]>([
        0, 0,
    ]);
    const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
    const [selectedCoachTypes, setSelectedCoachTypes] = useState<string[]>([]);
    const [wantOffer, setWantOffer] = useState(false);
    const [wantRefundable, setWantRefundable] = useState(false);

    const [priceRange, setPriceRange] = useState([0, 0]);
    const [seatRange, setSeatRange] = useState([0, 0]);
    const [companies, setCompanies] = useState<string[]>([]);
    const [coachTypes, setCoachTypes] = useState<string[]>([]);

    useEffect(() => {
        if (transportList.length === 0) return;

        setPriceRange([
            Math.min(...transportList.map((transport) => transport.fare)),
            Math.max(...transportList.map((transport) => transport.fare)),
        ]);

        setSeatRange([
            Math.min(
                ...transportList.map((transport) => transport.number_of_seats)
            ),
            Math.max(
                ...transportList.map((transport) => transport.number_of_seats)
            ),
        ]);

        setCompanies(
            Array.from(
                new Set(
                    transportList.map((transport) => transport.company_name)
                )
            )
        );
        setCoachTypes(
            Array.from(
                new Set(transportList.map((transport) => transport.coach_type))
            )
        );

        setSelectedFareRange([
            Math.min(...transportList.map((transport) => transport.fare)),
            Math.max(...transportList.map((transport) => transport.fare)),
        ]);

        setSelectedSeatRange([
            Math.min(
                ...transportList.map((transport) => transport.number_of_seats)
            ),
            Math.max(
                ...transportList.map((transport) => transport.number_of_seats)
            ),
        ]);
    }, [transportList]);

    

    const handlePriceRangeChange = (
        event: any,
        newValue: number | number[]
    ) => {
        setSelectedFareRange(newValue as number[]);
    };

    const handleSeatRangeChange = (event: any, newValue: number | number[]) => {
        setSelectedSeatRange(newValue as number[]);
    };

    const handleCompanyAddition = (event: any, newValue: string | string[]) => {
        setSelectedCompanies(newValue as string[]);
    };


    useEffect(() => {
        setFilteringData({
            ...filteringData,
            maxFare: selectedFareRange[1],
            minFare: selectedFareRange[0],
            maxSeats: selectedSeatRange[1],
            minSeats: selectedSeatRange[0],
            companies: selectedCompanies,
            coaches: selectedCoachTypes,
            wantOffer: wantOffer,
            wantRefundable: wantRefundable,
        });
        console.log(filteringData);
    }, [
        selectedFareRange,
        selectedSeatRange,
        selectedCompanies,
        selectedCoachTypes,
        wantOffer,
        wantRefundable,
    ]);

    return (
        <Stack direction="column" spacing={2} sx={{width: "30%"}}>
        <Paper
            elevation={3}
            sx={{ 
                padding: 5, 
                borderRadius: 5,
             }}
        >
            <Stack spacing={2}>
                <Typography variant="h5">Filter</Typography>
                <Divider />
                <Stack spacing={2}>
                    <Typography variant="h6">Price</Typography>
                    <Slider
                        value={selectedFareRange}
                        valueLabelDisplay="auto"
                        onChange={handlePriceRangeChange}
                    />
                </Stack>
                <Divider />
                <Stack spacing={2}>
                    <Typography variant="h6">Number of seats</Typography>
                    <Slider
                        value={selectedSeatRange}
                        valueLabelDisplay="auto"
                        onChange={handleSeatRangeChange}
                    />
                </Stack>
                <Divider />
                <Stack spacing={2}>
                    <Typography variant="h6">Company</Typography>
                    <Autocomplete
                        multiple
                        options={companies}
                        filterSelectedOptions
                        limitTags={2}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                placeholder="Company"
                            />
                        )}
                        onChange={(event, value) => {
                            setSelectedCompanies(value);
                        }}
                    />
                </Stack>
                <Divider />
                <Stack spacing={2}>
                    <Typography variant="h6">Coach type</Typography>
                    <Autocomplete
                        multiple
                        options={coachTypes}
                        filterSelectedOptions
                        limitTags={2}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                placeholder="Coach type"
                            />
                        )}
                        onChange={(event, value) => {
                            setSelectedCoachTypes(value);
                        }}
                    />
                </Stack>
                <Divider />
                <Stack spacing={2}>
                    <Typography variant="h6">Offer</Typography>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={wantOffer}
                                onChange={(e) => {
                                    setWantOffer(e.target.checked);
                                    setFilteringData({
                                        ...filteringData,
                                        wantOffer: e.target.checked,
                                    });
                                }}
                                name="wantOffer"
                                color="primary"
                            />
                        }
                        label="Offer"
                    />
                </Stack>
                <Divider />
                <Stack spacing={2}>
                    <Typography variant="h6">Refundable</Typography>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={wantRefundable}
                                onChange={(e) => {
                                    setWantRefundable(e.target.checked);
                                    setFilteringData({
                                        ...filteringData,
                                        wantRefundable: e.target.checked,
                                    });
                                }}
                                name="wantRefundable"
                                color="primary"
                            />
                        }
                        label="Refundable"
                    />
                </Stack>
            </Stack>
        </Paper>
        </Stack>
    );
}
