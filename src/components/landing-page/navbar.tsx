import { AppBar, Container, Stack, Typography } from "@mui/material";
import NavItem from "@components/landing-page/nav-item";
import Image from "next/image";
import TripTixLogo from "@public/TripTixLogo.svg";

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
        backgroundColor: "transparent",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        borderRadiusBottomLeft: "1rem",
        borderRadiusBottomRight: "1rem",
        boxShadow: "0 0 0 0.1rem rgba(0,0,0,0.05)",
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
          <Image src={TripTixLogo} alt="TripTix Logo"  width={'30'}/>
          <Typography variant="h5" sx ={{fontWeight : "bold"}}>
            TripTix
          </Typography>
        </Stack>
        {/* Menu Options */}
        <Stack direction={"row"} spacing={2} alignContent={"center"}>
          {pages.map((page) => (
            <NavItem key={page.name} name={page.name} href={page.href} />
          ))}
        </Stack>
      </Stack>
    </AppBar>
  );
}
