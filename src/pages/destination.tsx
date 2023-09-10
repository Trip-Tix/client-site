import Navbar from "@/components/destination/navbar";
import Form from "@/components/destination/form";
import Footer from "@/components/destination/footer";
import { Button } from "@mui/material";
import React from "react";
import { DestinationContext } from "@public/context/destination";
import { useContext, useState } from "react";
import { TransportType } from "@public/interface/transport";
import Transportation from "@/components/destination/transportation";
import Stack from "@mui/material/Stack";
import Style from "@styles/destination/home.module.css";
import { ColorContext } from "@public/context/global";

export default function Destination() {
    const [source, setSource] = useState("");
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [hasReturn, setHasReturn] = useState(false);
    const [transport, setTransport] = useState<TransportType>(
        TransportType.Bus
    );
    const [hasError, setHasError] = useState(false);
    const [sourceId, setSourceId] = useState(0);
    const [destinationId, setDestinationId] = useState(0);
    const { mode } = useContext(ColorContext);

    return (
        <>
            <DestinationContext.Provider
                value={{
                    source,
                    setSource,
                    destination,
                    setDestination,
                    sourceId,
                    setSourceId,
                    destinationId,
                    setDestinationId,
                    date,
                    setDate,
                    returnDate,
                    setReturnDate,
                    hasReturn,
                    setHasReturn,
                    transport,
                    setTransport,
                    hasError,
                    setHasError,
                }}
            >
                <Stack
                    sx={{
                        width: "100%",
                        backgroundColor:
                            mode === "dark" ? "#121212" : "#dfdfdf",
                        height: "100vh",
                    }}
                    direction={"column"}
                    justifyContent="space-between"
                >
                    <Stack direction="column" justifyContent="flex-start">
                        <Navbar />
                        <Transportation />
                        <Form />
                    </Stack>
                    <Footer />
                </Stack>
            </DestinationContext.Provider>
        </>
    );
}
