import { useContext } from "react";
import { useSpring, animated } from "@react-spring/web";
import { ColorContext } from "@public/context/global";
import { Paper, Typography, Link, Stack, Icon } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";

export default function SponserMessage() {
    const { mode } = useContext(ColorContext);

    const animation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 500,
    });

    return (
        <animated.div style={animation}>
            <Paper
                elevation={3}
                sx={{
                    padding: "2rem",
                    display: "flex",
                    height: "10rem",
                }}
            >
                <Stack
                    spacing={3}
                    direction="row"
                    alignItems="center"
                    justifyContent={"flex-start"}
                >
                    <Typography variant="h5">Partner Company</Typography>
                    <Icon>
                        <AppleIcon />
                    </Icon>
                    <Icon>
                        <FacebookIcon />
                    </Icon>
                    <Icon>
                        <GoogleIcon />
                    </Icon>
                    <Icon>
                        <LinkedInIcon />
                    </Icon>
                </Stack>
            </Paper>
        </animated.div>
    );
}
