import { Icon, Stack, Typography } from "@mui/material";
import { transports } from "@public/interface/transport";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TrainIcon from "@mui/icons-material/Train";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { TransportType } from "@public/interface/transport";
import { useContext, useEffect, useState } from "react";
import { ListTransportContext } from "@public/context/list-transport";
import Paper from "@mui/material/Paper";
import { ColorContext } from "@public/context/global";


export default function Transportation() {
    const [ selectedTransportType, setSelectedTransportType ] = useState<TransportType>(TransportType.Bus);
    useEffect(() => {
        setSelectedTransportType(sessionStorage.getItem("transport") as TransportType || TransportType.Bus);
    }, []);
    const { mode } = useContext(ColorContext);

    return (
        <Paper elevation={3}>
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
                        sx={{
                            color:
                                transport.transportType ===
                                selectedTransportType
                                    ? "#008080"
                                    : mode === "light" ? "#000000" : "#ffffff",
                            backgroundColor:
                                transport.transportType ===
                                selectedTransportType
                                    ? "rgba(0,128,128,0.1)"
                                    : "transparent",
                            paddingTop: "0.5rem",
                            paddingRight: "10rem",
                            paddingLeft: "10rem",
                            borderBottom:
                                transport.transportType ===
                                selectedTransportType
                                    ? "0.2rem solid #008080"
                                    : "0.2rem solid transparent",
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
