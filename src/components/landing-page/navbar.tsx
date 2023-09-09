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
import {
    home_url,
    login_url,
    register_url,
    logout_url,
    about_us_url,
    customer_care_url,
    policy_url,
    transportation_url,
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

    useEffect(() => {
        const username = sessionStorage.getItem("username");
        if (username) {
            const tempPages = [...pages];
            tempPages.filter((page) => {
                if (page.name === "Sign In") {
                    page.name = "Log Out";
                    page.href = logout_url;
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
