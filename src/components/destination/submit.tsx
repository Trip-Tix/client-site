import { useRouter } from "next/router";
import { useContext } from "react";
import { DestinationContext } from "@public/context/destination";
import { Button } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

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
                onClick={() => {
                    console.log("Search Ticket");
                }}
            >
                Search Ticket
            </Button>
        </animated.div>
    );
}
