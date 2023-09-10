// essential react imports
import React from "react";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

// pre-made component
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
        margin: 1,
        padding: 0,
        transform: "translateX(6px)",
        "&.Mui-checked": {
            color: "#fff",
            transform: "translateX(22px)",
            "& .MuiSwitch-thumb:before": {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    "#fff"
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor:
                    theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
            },
        },
    },
    "& .MuiSwitch-thumb": {
        backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
        width: 32,
        height: 32,
        "&:before": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                "#fff"
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    "& .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        borderRadius: 20 / 2,
    },
}));

// custom
import NavItem from "@components/destination/nav-item";
import TripTixLogoBlack from "@public/TripTixLogoBlack.svg";
import TripTixLogo from "@public/TripTixLogo.svg";
import { ColorContext } from "@public/context/global";
import {
    home_url,
    login_url,
    register_url,
    logout_url,
    about_us_url,
    customer_care_url,
    policy_url,
    transportation_url,
    profile_url,
} from "@public/pagelinks";

interface NavbarProps {
    name: string;
    href: string;
}   

export default function Navbar() {
    const [pages, setPages] = useState<NavbarProps[]>([
        {
            name: "Home",
            href: home_url,
        },
        {
            name: "About Us",
            href: about_us_url,
        },
        {
            name: "Customer Care",
            href: customer_care_url,
        },
        {
            name: "Policy",
            href: policy_url,
        },
        {
            name: "Transportation",
            href: transportation_url,
        },
        {
            name: "Sign In",
            href: login_url,
        },
        {
            name: "Sign Up",
            href: register_url,
        },
    ]);
    const [username, setUsername] = useState<string>("");
    const [showAvatar, setShowAvatar] = useState<boolean>(false);
    useEffect(() => {
        const username = sessionStorage.getItem("username");
        if (username) {
            const tempPages = [...pages];
            tempPages.push({
                name: "Sign Out",
                href: logout_url,
            });
            setUsername(username);
            setShowAvatar(true);
            setPages(
                tempPages.filter((page) => {
                    return page.name !== "Sign Up" && page.name !== "Sign In";
                })
            );
        }
    }, []);
    const { mode, setMode } = useContext(ColorContext);
    const router = useRouter();

    return (
        <AppBar
            position="relative"
            sx={{
                backgroundColor: mode === "dark" ? "#121212" : "#fff",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                borderRadiusBottomLeft: "1rem",
                borderRadiusBottomRight: "1rem",
                boxShadow: "0 0 0 0.1rem rgba(0,0,0,0.05)",
                color: mode === "dark" ? "#fff" : "#000",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
            }}
        >
            <Stack
                direction="row"
                justifyItems={"center"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                {/* Logo and Title */}
                <Stack
                    direction="row"
                    spacing={1}
                    alignItems={"center"}
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                        router.push(home_url);
                    }}
                >
                    <Image
                        src={mode === "dark" ? TripTixLogo : TripTixLogoBlack}
                        alt="TripTix Logo"
                        width={"30"}
                    />
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        TripTix
                    </Typography>
                </Stack>
                {/* Menu Options */}

                <Stack
                    direction={"row"}
                    spacing={2}
                    alignContent={"center"}
                    alignItems={"center"}
                >
                    <MaterialUISwitch
                        checked={mode === "dark"}
                        onChange={() => {
                            if (mode === "dark") {
                                setMode("light");
                            } else {
                                setMode("dark");
                            }
                        }}
                    />
                    <Stack
                        direction={"row"}
                        spacing={2}
                        alignContent={"center"}
                    >
                        {pages.map((page) => (
                            <NavItem
                                key={page.name}
                                name={page.name}
                                href={page.href}
                            />
                        ))}
                        {showAvatar && (
                            <Badge
                                color="primary"
                                variant="dot"
                                onClick={() => {
                                    router.push(profile_url);
                                }}
                                sx={{ cursor: "pointer" }}
                            >
                                <Avatar sx={{ width: 24, height: 24 }}></Avatar>
                            </Badge>
                        )}
                    </Stack>
                </Stack>
            </Stack>
        </AppBar>
    );
}
