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
                        color: mode === "dark" ? "#fff" : "#000",
                    }}
                >
                    <Typography
                        variant="h3"
                        gutterBottom
                        sx={{ fontWeight: "light" }}
                    >
                        About Us
                    </Typography>

                    <Stack direction="column" spacing={2}>
                        <Paper elevation={3} style={{ padding: "20px" }} >
                            <Typography
                                variant="h4"
                                gutterBottom
                                sx={{ fontWeight: "light" }}
                            >
                                Our Story
                            </Typography>
                            <Typography paragraph>
                                {`In the bustling corridors of the renowned
                                Bangladesh University of Engineering and
                                Technology (BUET), where dreams were forged and
                                friendships were born, the story of Triptix
                                began. Three close-knit friends, all graduates
                                of BUET's prestigious Computer Science and
                                Engineering department, embarked on a remarkable
                                journey that would ultimately transform the way
                                people manage ticket purchases and transport
                                logistics.`}
                            </Typography>
                            <Typography paragraph>
                                {`It all started as a term assignment, a mere
                                academic endeavor, during their final year at
                                BUET. Little did they know that this project
                                would become the cornerstone of their
                                entrepreneurial dreams. The friends, who shared
                                a passion for technology and a common vision for
                                simplifying complex transportation processes,
                                joined forces to tackle the challenges presented
                                by the assignment.`}
                            </Typography>
                            <Typography paragraph>
                                {`As they delved deeper into the project, a spark
                                ignited within them. They realized that the
                                conventional ticket purchase and transport
                                management systems were riddled with
                                inefficiencies and complexities. The process of
                                booking tickets, coordinating travel plans, and
                                ensuring seamless journeys often left travelers
                                frustrated and confused.`}
                            </Typography>
                            <Typography paragraph>
                                {`This revelation marked the beginning of
                                Triptix's journey towards revolutionizing the
                                transportation industry. They were determined to
                                create a platform that would not only simplify
                                ticket purchasing but also provide a
                                comprehensive solution for managing transport
                                logistics. With their backgrounds in computer
                                science and engineering, they possessed the
                                technical prowess required to turn this vision
                                into a reality.`}
                            </Typography>
                            <Typography paragraph>
                                {`Triptix became more than just a term assignment;
                                it became a mission. They poured their hearts
                                and souls into developing a user-friendly
                                platform that would cater to the needs of both
                                travelers and transport service providers.
                                Countless late nights and rigorous brainstorming
                                sessions fueled their determination.`}
                            </Typography>
                            <Typography paragraph>
                                {`What sets Triptix apart is the deep-rooted
                                friendship and camaraderie that binds the
                                founders together. Their shared experiences at
                                BUET not only strengthened their friendship but
                                also instilled in them the values of integrity,
                                excellence, and innovation. These principles
                                became the foundation of Triptix's core values.`}
                            </Typography>
                            <Typography paragraph>
                                {`Today, Triptix is more than just a company; it's
                                a testament to the power of friendship and
                                determination. The platform they created has
                                evolved to become a game-changer in the world of
                                ticket purchase and transport management. With
                                Triptix, travelers can book tickets with ease,
                                plan their journeys seamlessly, and experience
                                stress-free travel like never before.`}
                            </Typography>
                            <Typography paragraph>
                                {`As they reflect on their journey, the founders
                                of Triptix are proud to have come full circle,
                                from BUET's hallowed halls to the forefront of
                                transportation innovation. They are excited to
                                share their vision and passion with the world,
                                and their story serves as a reminder that with
                                dedication, friendship, and a shared dream,
                                anything is possible. Join us on our journey,
                                and together, let's redefine the future of
                                transportation.`}
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
                                    <Typography variant="body2">
                                        Backend Developer
                                    </Typography>
                                    <Typography variant="body2">
                                        System Engineer
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Avatar
                                        src={Shamit.src}
                                        alt="Team Member 2"
                                    />
                                    <Typography variant="subtitle1">
                                        Shamit
                                    </Typography>
                                    <Typography variant="body2">
                                        Frontend Developer
                                    </Typography>
                                    <Typography variant="body2">
                                        Community Manager
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Avatar
                                        src={Fahmid.src}
                                        alt="Team Member 3"
                                    />
                                    <Typography variant="subtitle1">
                                        Fahmid
                                    </Typography>
                                    <Typography variant="body2">
                                        FullStack Developer
                                    </Typography>
                                    <Typography variant="body2">
                                        System Analytics
                                    </Typography>
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
