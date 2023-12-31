import { useEffect, useContext, useState } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Icon from "@mui/material/Icon";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import { ColorContext } from "@public/context/global";
import { TicketHistoryContext } from "@public/context/profile";

export default function AboutMe() {
    const { mode } = useContext(ColorContext);
    const { ticketHistory } = useContext(TicketHistoryContext);
    const [ cost, setCost ] = useState<number>(0);
    const [ user_email, setUserEmail ] = useState<string>("");
    const [ user_mobile, setUserMobile ] = useState<string>("");
    const [ username, setUsername ] = useState<string>("");

    useEffect(() => {
        let totalCost = 0;
        ticketHistory.busTicketInfo.forEach((ticket) => {
            totalCost += ticket.total_fare;
        });
        ticketHistory.trainTicketInfo.forEach((ticket) => {
            totalCost += ticket.total_fare;
        });
        ticketHistory.airTicketInfo.forEach((ticket) => {
            totalCost += ticket.total_fare;
        });
        setCost(totalCost);
    }, [ticketHistory]);


    useEffect(() => {
        setUserEmail(sessionStorage.getItem("user_email") || "");
        setUserMobile(sessionStorage.getItem("mobile") || "");
        setUsername(sessionStorage.getItem("username") || "");
    }, []);


    return (
        <Stack
            direction={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
            sx={{ height: "85vh" }}
        >
            <Stack
                direction={"column"}
                spacing={2}
                sx={{ padding: "2rem" }}
                alignItems={"center"}
            >
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                    <Avatar
                        alt="Remy Sharp"
                        sx={{
                            width: "5rem",
                            height: "5rem",
                        }}
                    />
                    <Stack direction={"column"} spacing={0}>
                        <Typography variant={"h3"}>{username}</Typography>
                    </Stack>
                </Stack>

                <Stack
                    direction={"row"}
                    spacing={2}
                    alignItems={"center"}
                    sx={{ width: "100%" }}
                >
                    <Paper
                        sx={{
                            padding: "1rem",
                            flex: 1,
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "15rem",
                        }}
                        elevation={3}
                    >
                        <LocalActivityIcon
                            sx={{
                                height: "3rem",
                                width: "3rem",
                            }}
                        />
                        <Typography variant={"h4"}>
                            {ticketHistory.busTicketInfo.length +
                                ticketHistory.airTicketInfo.length +
                                ticketHistory.trainTicketInfo.length}
                        </Typography>
                        <Typography variant={"h6"}>Tickets</Typography>
                    </Paper>
                    <Paper
                        sx={{
                            padding: "1rem",
                            flex: 1,
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        elevation={3}
                    >
                        <AttachMoneyIcon
                            sx={{
                                height: "3rem",
                                width: "3rem",
                            }}
                        />
                        <Typography variant={"h4"}>{`${cost} Tk`}</Typography>
                        <Typography variant={"h6"}>Cost</Typography>
                    </Paper>
                </Stack>
                <Stack direction={"column"} spacing={5} sx={{ width: "100%" }}>
                    <Stack direction={"column"} spacing={0}>
                        <Typography variant={"h5"}>About Me</Typography>
                        <Typography variant={"body1"}>
                            Elite User.
                            Looking to travel the world
                        </Typography>
                    </Stack>
                    <Stack direction={"column"} spacing={1}>
                        <Stack direction={"row"} spacing={2}>
                            <Icon
                                component={AlternateEmailIcon}
                                sx={{
                                    color:
                                        mode === "light"
                                            ? "#3b5998"
                                            : "#e9ebee",
                                }}
                            />

                            <Typography
                                variant={"body1"}
                                sx={{
                                    color:
                                        mode === "light"
                                            ? "#3b5998"
                                            : "#e9ebee",
                                }}
                            >
                                {user_email}
                            </Typography>
                        </Stack>
                        <Stack direction={"row"} spacing={2}>
                            <Icon
                                component={LocalPhoneIcon}
                                sx={{
                                    color:
                                        mode === "light"
                                            ? "#3b5998"
                                            : "#e9ebee",
                                }}
                            />

                            <Typography
                                variant={"body1"}
                                sx={{
                                    color:
                                        mode === "light"
                                            ? "#3b5998"
                                            : "#e9ebee",
                                }}
                            >
                                {user_mobile}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>

            <Stack
                direction={"row"}
                spacing={2}
                sx={{
                    padding: "1rem",
                    backgroundColor: mode === "light" ? "#f5f5f5" : "#121212",
                    width: "100%",
                }}
                justifyContent={"center"}
            >
                <IconButton
                    size={"large"}
                    sx={{
                        color: "#3b5998",
                        backgroundColor:
                            mode === "light" ? "#e9ebee" : "#2d2d2d",
                        "&:hover": {
                            backgroundColor:
                                mode === "light" ? "#d6d9dc" : "#2d2d2d",
                        },
                    }}
                >
                    <FacebookIcon />
                </IconButton>
                <IconButton
                    size={"large"}
                    sx={{
                        color: "#e1306c",
                        backgroundColor:
                            mode === "light" ? "#e9ebee" : "#2d2d2d",
                        "&:hover": {
                            backgroundColor:
                                mode === "light" ? "#d6d9dc" : "#2d2d2d",
                        },
                    }}
                >
                    <InstagramIcon />
                </IconButton>
                <IconButton
                    size={"large"}
                    sx={{
                        color: "#1da1f2",
                        backgroundColor:
                            mode === "light" ? "#e9ebee" : "#2d2d2d",
                        "&:hover": {
                            backgroundColor:
                                mode === "light" ? "#d6d9dc" : "#2d2d2d",
                        },
                    }}
                >
                    <TwitterIcon />
                </IconButton>
                <IconButton
                    size={"large"}
                    sx={{
                        color: "#25d366",
                        backgroundColor:
                            mode === "light" ? "#e9ebee" : "#2d2d2d",
                        "&:hover": {
                            backgroundColor:
                                mode === "light" ? "#d6d9dc" : "#2d2d2d",
                        },
                    }}
                >
                    <WhatsAppIcon />
                </IconButton>
            </Stack>
        </Stack>
    );
}
