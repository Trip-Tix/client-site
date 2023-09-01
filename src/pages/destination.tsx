import Navbar from "@/components/landing-page/navbar";
import Form from "@/components/destination/form";
import Footer from "@/components/destination/footer";
import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import React from "react";
import { ColorModeContext } from "@public/context/global";

export default function Destination() {
    const theme = useTheme();
    const ColorMode = React.useContext(ColorModeContext);
    return (
        <>
            <Navbar />
            <Button onClick={ColorMode.toggleColorMode}>Toggle Color Mode</Button>
            <Form />
            <Footer />
        </>
    )
}