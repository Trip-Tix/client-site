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

  return (
    <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
      <Toolbar>
        <svg width="35" height="60">
          <image href="/TripTixLogo.svg" width="30" height="60" />
        </svg>
        <Typography variant="h4" component="div">
          TripTix
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {pages.map((page, index) => (
            <Tooltip title={page} key={index}>
              <Button
                sx={{
                  color: "#ffffff",
                  textTransform: "none",
                  fontSize: "1rem",
                }}
                variant="text"
                size="large"
                key={index}
              >
                {page}
              </Button>
            </Tooltip>
          ))}
          <Tooltip title="Profile">
            <FormControl>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                sx={{ backgroundColor: "#f7f7f7", borderRadius: "5px",  height: "30", width: "200" }}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      type="submit"
                      aria-label="search"
                      sx={{ color: "#ffffff" }}
                    >
                      <AiOutlineSearch />
                    </IconButton>
                  ),
                }}
              />
            </FormControl>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
