import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { DestinationContext } from "@public/context/destination";
import { Button } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import { transport_list_url } from "@public/pagelinks";
import { Height } from "@mui/icons-material";
import { ColorContext } from "@public/context/global";

export default function Submit() {
    const { source, destination, date, returnDate, hasReturn, transport } =
        useContext(DestinationContext);

    const [togglePageChange, setTogglePageChange] = useState(false);
    const router = useRouter();
    useEffect(() => {
        if (!togglePageChange) return;

        window.setTimeout(() => {
            router.push(transport_list_url);
        }, 1000);
    }, [togglePageChange, router]);

    const handleClick = () => {
        sessionStorage.setItem("source", source);
        sessionStorage.setItem("destination", destination);
        sessionStorage.setItem("date", date);
        sessionStorage.setItem("returnDate", returnDate);
        sessionStorage.setItem("hasReturn", hasReturn.toString());
        sessionStorage.setItem("transport", transport.toString());
        sessionStorage.setItem("processingReturn", "false");

        setTogglePageChange(true);

        console.log({
            source,
            destination,
            date,
            returnDate,
            hasReturn,
            transport,
        });
    };

    const {mode} = useContext(ColorContext);
    return (
            <Button
                color="primary"
                variant="contained"
                sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: mode === "dark" ? "rgb(255,255,255,0.05)" : "rgb(255,255,255,1)",
                    color: "#008080",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    padding: "1rem",
                    marginBottom: "2rem",
                    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0.25)",
                    ":hover": {
                        backgroundColor: "#008080",
                        color: "#FFFFFF",
                        cursor: "pointer",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    },
                }}
                onClick={handleClick}
                disabled={source === "" || destination === "" || date === "" || transport === null}
            >
                Search Ticket
            </Button>

    );
}
