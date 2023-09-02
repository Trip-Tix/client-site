import { Icon, Stack, Typography } from "@mui/material";
import { transports } from "@public/interface/transport";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TrainIcon from "@mui/icons-material/Train";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { TransportType } from "@public/interface/transport";
import { useContext, useState } from "react";
import { DestinationContext } from "@public/context/destination";
import { TransportEntry } from "@public/interface/transport";
import { ListTransportContext } from "@public/context/list-transport";

export default function Transportation() {
    const { selectedTransportType } = useContext(ListTransportContext);

    const { setTransport } = useContext(DestinationContext);
    return (
        <>
            <Stack
                direction="row"
                justifyContent={"center"}
                sx={{
                    backgroundColor: "#FFFFFF",
                }}
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
                                    : "#000000",
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
                                    height: "2.5rem",
                                    width: "2.5rem",
                                }}
                            />
                        </Icon>
                        <Typography variant="body1">
                            {transport.transportName}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </>
    );
}
