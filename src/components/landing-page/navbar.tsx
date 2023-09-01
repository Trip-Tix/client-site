import { AppBar, Container, Stack, Typography } from "@mui/material";

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
      }}
    >
      <Stack
        direction="row"
        justifyItems={"center"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {/* Logo and Title */}
        <Stack direction="row" spacing={2}>
          <Typography variant="h6" component="div">
            Logo
          </Typography>
          <Typography variant="h6" component="div">
            TripTix
          </Typography>
        </Stack>
        {/* Menu Options */}
        <Stack direction={"row"} spacing={2} alignContent={"center"}>
          {pages.map((page) => (
            <Stack direction={"row"} spacing={2} alignContent={"center"}>
                <Typography variant="body1" component="div">
                  {page.name}
                </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </AppBar>
  );
}
