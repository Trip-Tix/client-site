import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { DestinationContext } from "@public/context/destination";
import { Button } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

export default function Submit() {
    const { source, destination, date, returnDate, hasReturn, transport } =
        useContext(DestinationContext);

    const submitAnimation = useSpring({
        opacity:
            source === "" ||
            destination === "" ||
            date === "" ||
            (hasReturn && returnDate === "") ||
            transport === null
                ? 0
                : 1,
        delay: 500,
    });

    const [togglePageChange, setTogglePageChange] = useState(false);
    const router = useRouter();
    useEffect(() => {
        if (!togglePageChange) return;

        window.setTimeout(() => {
            router.push("#");
        }, 1000);
    }, [togglePageChange, router]);

    const handleClick = () => {
        sessionStorage.setItem("source", source);
        sessionStorage.setItem("destination", destination);
        sessionStorage.setItem("date", date);
        sessionStorage.setItem("returnDate", returnDate);
        sessionStorage.setItem("hasReturn", hasReturn.toString());
        sessionStorage.setItem("transport", transport.toString());
        
        setTogglePageChange(true);

        console.log({
            source,
            destination,
            date,
            returnDate,
            hasReturn,
            transport,
        })
    }

    return (
        <animated.div style={submitAnimation}>
            <Button
                color="primary"
                variant="contained"
                sx={{
                    width: "100%",
                    backgroundColor: "rgba(0,0,0,0)",
                    color: "#008080",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    padding: "1rem",
                    marginTop: "2rem",
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
            >
                Search Ticket
            </Button>
        </animated.div>
    );
}
