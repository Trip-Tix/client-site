// pre-made component
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

// custom
import NavItem from "@components/destination/nav-item";
import TripTixLogoBlack from "@public/TripTixLogoBlack.svg";

const pages = [
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
        href: "/sign-in",
    },
    {
        name: "Sign Up",
        href: "/sign-up",
    },
];

export default function Navbar() {
    return (
        <AppBar
            position="relative"
            sx={{
                backgroundColor: "white",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                borderRadiusBottomLeft: "1rem",
                borderRadiusBottomRight: "1rem",
                boxShadow: "0 0 0 0.1rem rgba(0,0,0,0.05)",
                color: "black",
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
                    <Image
                        src={TripTixLogoBlack}
                        alt="TripTix Logo"
                        width={"30"}
                    />
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
