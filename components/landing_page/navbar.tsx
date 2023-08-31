"use client";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SvgIcon from "@mui/material/SvgIcon";
import InputBase from "@mui/material/InputBase";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

// import logo
import { AiOutlineSearch } from "react-icons/ai";

// custom imports
import TripTixLogo from "@public/TripTixLogo.svg";
import { Stack } from "@mui/material";

export default function Navbar() {
  const pages = [
    "About Us",
    "Customer Care",
    "Policy",
    "Transport",
    "Sign Up",
    "Log In",
    "Log Out",
  ];

  // Appbar should be transparent

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      color={"white"}
      sx={{
        pl: 2,
        pr: 2,
        p: 1,
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      <Stack direction="row" alignItems="center">
        <img src={TripTixLogo.src} alt="logo" width={40} height={40} />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, ml: 2 }}
          fontWeight={600}
          fontSize={20}
        >
          TripTix
        </Typography>
      </Stack>
      <Stack direction="row" spacing={3} alignItems="center">
        {pages.map((page) => (
          <Typography key={page} variant="body1" component="div" sx={{ flexGrow: 1 }}>
            {page}
          </Typography>
        ))}
        <Avatar alt="Remy Sharp" />
      </Stack>
    </Stack>
  );
}
