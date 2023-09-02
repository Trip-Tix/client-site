import Navbar from "@/components/destination/navbar";
import Form from "@/components/destination/form";
import Footer from "@/components/destination/footer";
import { Button } from "@mui/material";
import React from "react";
import { DestinationContext } from "@public/context/destination";
import { useContext, useState } from "react";
import { TransportType } from "@public/interface/transport";
import Transportation from "@/components/destination/transportation";
import Stack from "@mui/material/Stack";``

export default function Destination() {
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [hasReturn, setHasReturn] = useState(false);
    const [transport, setTransport] = useState<TransportType>(TransportType.Bus);

    return (
        <>
            <DestinationContext.Provider
                value={{
                    source,
                    setSource,
                    destination,
                    setDestination,
                    date,
                    setDate,
                    returnDate,
                    setReturnDate,
                    hasReturn,
                    setHasReturn,
                    transport,
                    setTransport,
                }}
            >
                <Stack
                sx={{
                    width: "100%",
                    backgroundColor: "#E4E4E4",
                }}
            >
                <Navbar />
                <Transportation />
                <Form />
                <Footer />
                </Stack>
            </DestinationContext.Provider>
        </>
    );
}
