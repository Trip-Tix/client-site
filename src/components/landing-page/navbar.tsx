// react essentials
import { use, useState, useEffect } from "react";

// pre-made component
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

// custom
import NavItem from "@components/landing-page/nav-item";
import TripTixLogo from "@public/TripTixLogo.svg";

interface NavbarProps {
    name: string;
    href: string;
}

export default function Navbar() {
    const [pages, setPages] = useState<NavbarProps[]>([
        {
            name: "Home",
            href: "/",
        },
        {
            name: "About Us",
            href: "/about",
        },
        {
            name: "Customer Care",
            href: "/customer-care",
        },
        {
            name: "Policy",
            href: "/policy",
        },
        {
            name: "Transportation",
            href: "/transportation",
        },
        {
            name: "Sign In",
            href: "/login",
        },
        {
            name: "Sign Up",
            href: "/register",
        },
    ]);

    useEffect(() => {
        const username = sessionStorage.getItem("username");
        if (username) {
            const tempPages = [...pages];
            tempPages.filter((page) => {
                if (page.name === "Sign In" ) {
                    page.name = "Log Out";
                    page.href = "/log-out";
                }
            });
            //remove sign up
            tempPages.pop();


            setPages(tempPages);
        }
    }, []);

    return (
        <AppBar
            position="relative"
            sx={{
                backgroundColor: "transparent",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                borderRadiusBottomLeft: "1rem",
                borderRadiusBottomRight: "1rem",
                boxShadow: "0 0 0 0.1rem rgba(0,0,0,0.05)",
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
                <Stack direction="row" spacing={1} alignItems={"center"}>
                    <Image src={TripTixLogo} alt="TripTix Logo" width={"30"} />
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        TripTix
                    </Typography>
                </Stack>
                {/* Menu Options */}
                <Stack direction={"row"} spacing={2} alignContent={"center"}>
                    {pages.map((page) => (
                        <NavItem
                            key={page.name}
                            name={page.name}
                            href={page.href}
                        />
                    ))}
                </Stack>
            </Stack>
        </AppBar>
    );
}
