import React from "react";
import {
    Container,
    Typography,
    Link,
    Divider,
    Stack,
    Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useRouter } from "next/router";

const Footer: React.FC = () => {
    const router = useRouter();
    return (
        <footer>
            <Stack
                direction={"column"}
                sx={{
                    margin: "1rem",
                }}
                spacing={1}
            >
                <Stack direction={"row"} justifyContent={"center"} spacing={2}>
                    <Button
                        variant="text"
                        color="primary"
                        onClick={() => router.push("/ttt")}
                    >
                        Bored?
                    </Button>
                </Stack>
                <Typography variant="body2" align="center">
                    {`© ${new Date().getFullYear()} TripTix`}
                </Typography>
                <Typography variant="body2" align="center">
                    {`Made with ❤️ by Shamit, Zeeon and Fahmid`}
                </Typography>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Typography variant="body2" align="center">
                        <Link color="inherit" href="/privacy-policy">
                            Privacy Policy
                        </Link>
                    </Typography>
                    <Divider orientation="vertical" flexItem variant="middle" />
                    <Typography variant="body2" align="center">
                        <Link color="inherit" href="/privacy-policy">
                            Terms & Conditions
                        </Link>
                    </Typography>
                </Stack>
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                </Stack>
            </Stack>
        </footer>
    );
};

export default Footer;
