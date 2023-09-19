import { Icon, Stack, Typography } from "@mui/material";
import { transports } from "@public/interface/transport";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TrainIcon from "@mui/icons-material/Train";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { TransportType } from "@public/interface/transport";
import { useContext, useState } from "react";
import { DestinationContext } from "@public/context/destination";
import { TransportEntry } from "@public/interface/transport";
import { ColorContext } from "@public/context/global";
import Paper from "@mui/material/Paper";

export default function Transportation() {
    const { mode } = useContext(ColorContext);
    const [ selectedTransport, setSelectedTransport ] = useState<TransportEntry>(transports[0]);
    const { setTransport } = useContext(DestinationContext);
    return (
        <Paper
            elevation={3}
            sx={{
                width: "100%",
                height: "100%",
            }}
        >
            <Stack
                direction="row"
                justifyContent={"center"}
            >
                {transports.map((transport, index) => (
                    <Stack
                        key={index}
                        direction="row"
                        spacing={1}
                        justifyContent={"center"}
                        alignItems={"center"}
                        alignContent={"center"}
                        sx={{
                            color:
                                transport.transportId ===
                                selectedTransport.transportId
                                    ? mode === "dark" ? "#008080" : "#14908E"
                                    : mode === "dark" ? "#fff" : "#000",
                            backgroundColor:
                                transport.transportId ===
                                selectedTransport.transportId
                                    ? "rgba(0,128,128,0.1)"
                                    : "transparent",
                            paddingTop: "0.5rem",
                            paddingRight: "5rem",
                            paddingLeft: "5rem",
                            borderBottom:
                                transport.transportId ===
                                selectedTransport.transportId
                                    ? "0.2rem solid #008080"
                                    : "0.2rem solid transparent",
                            ":hover": {
                                color: "#008080",
                                backgroundColor: "rgba(0,128,128,0.1)",
                                cursor:
                                    transport.transportId ===
                                    selectedTransport.transportId
                                        ? "default"
                                        : "pointer",
                            },
                        }}
                        onClick={() => {
                            setSelectedTransport(transport);
                            setTransport(transport.transportType);
                        }}
                    >
                        <Icon
                            sx={{
                                width: "auto",
                                height: "auto",
                            }}
                        >
                            <transport.transportIcon
                                sx={{
                                    height: "1.5rem",
                                    width: "1.5rem",
                                }}
                            />
                        </Icon>
                        <Typography variant="body1" sx={{
                            paddingBottom: "0.5rem",
                        }}>
                            {transport.transportName}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Paper>
    );
}
