import React from "react";
import Head from "next/head";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Stack from "@mui/material/Stack";
import Navbar from "@/components/destination/navbar";

import Shamit from "@public/shamit.jpg";
import Zeeon from "@public/zeeon.jpg";
import Fahmid from "@public/fahmid.png";

import { ColorContext } from "@public/context/global";
import { useContext } from "react";

const AboutUsPage: React.FC = () => {
    const { mode } = useContext(ColorContext);
    return (
        <>
            <Head>
                <title>About Us</title>
            </Head>

            <Stack
                direction={"column"}
                sx={{ minHeight: "100vh", minWidth: "100vw" }}
            >
                <Navbar />
                <Stack
                    direction={"column"}
                    sx={{
                        padding: "1rem",
                        backgroundColor: mode === "dark" ? "#333" : "#fff",
                        color : mode === "dark" ? "#fff" : "#000"
                    }}
                >
                    <Typography variant="h2" gutterBottom>
                        About Us
                    </Typography>

                    <Stack direction="column" spacing={2}>
                        <Paper elevation={3} style={{ padding: "20px" }}>
                            <Typography variant="h4" gutterBottom>
                                Our Story
                            </Typography>
                            <Typography paragraph>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nulla auctor, justo a suscipit
                                malesuada, est nisl ultricies eros, id tristique
                                libero lorem at justo.
                            </Typography>
                            <Typography paragraph>
                                Sed ac semper quam. Morbi interdum, metus eu
                                convallis varius, odio purus venenatis quam, at
                                iaculis sapien nulla sed justo.
                            </Typography>
                        </Paper>

                        <Paper elevation={3} style={{ padding: "20px" }}>
                            <Typography variant="h4" gutterBottom>
                                Our Team
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Avatar
                                        src={Zeeon.src}
                                        alt="Team Member 1"
                                    />
                                    <Typography variant="subtitle1">
                                        Zeeon
                                    </Typography>
                                    <Typography variant="body2">Backend Developer</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Avatar
                                        src={Shamit.src}
                                        alt="Team Member 2"
                                    />
                                    <Typography variant="subtitle1">
                                        Shamit
                                    </Typography>
                                    <Typography variant="body2">Frontend Developer</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Avatar
                                        src={Fahmid.src}
                                        alt="Team Member 3"
                                    />
                                    <Typography variant="subtitle1">
                                        Fahmid
                                    </Typography>
                                    <Typography variant="body2">FullStack Developer</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Stack>

                    <Divider style={{ margin: "40px 0" }} />

                    <Typography variant="h4" gutterBottom>
                        Contact Us
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <IconButton>
                                <EmailIcon />
                            </IconButton>
                            <Typography>
                                Email: triptix.sfz@gmail.com
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <IconButton>
                                <LocalPhoneIcon />
                            </IconButton>
                            <Typography>Phone: +1 (123) 456-7890</Typography>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <IconButton>
                                <AddLocationIcon />
                            </IconButton>
                            <Typography>
                                Address: Zigatola, Zeeoner Basha
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider style={{ margin: "40px 0" }} />

                    <Typography variant="h4" gutterBottom>
                        Follow Us
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item>
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton>
                                <TwitterIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton>
                                <LinkedInIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Stack>
            </Stack>
        </>
    );
};

export default AboutUsPage;
