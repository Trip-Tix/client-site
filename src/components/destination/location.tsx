import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

interface LocationData {
    label: string;
    id: number;
}

const locations: LocationData[] = [
    { label: "Dhaka", id: 1 },
    { label: "Chittagong", id: 2 },
    { label: "Sylhet", id: 3 },
    { label: "Rajshahi", id: 4 },
    { label: "Khulna", id: 5 },
    { label: "Barishal", id: 6 },
    { label: "Rangpur", id: 7 },
    { label: "Mymensingh", id: 8 },
];

export default function Location() {
  const prop = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 2000,
  });

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <Stack
      sx={{
        color: "#000000",
      }}
      direction="row"
      justifyContent={"center"}
    >
      <animated.div style={prop}>
        <Autocomplete
          id="combo-box-demo"
          options={locations}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Source" />}
          inputValue={source}
          onInputChange={(event, newInputValue) => {
            setSource(newInputValue);
          }}
        />
      </animated.div>

      <Box
        sx={{
          width: 1,
          background: "#FFFFFF",
        }}
      />
      <Autocomplete
        id="combo-box-demo"
        options={locations}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Destination" />}
        inputValue={destination}
        onInputChange={(event, newInputValue) => {
          setDestination(newInputValue);
        }}
      />
    </Stack>
  );
}
