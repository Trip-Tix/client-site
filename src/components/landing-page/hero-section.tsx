import { Container, Stack, Typography, Box, Button } from "@mui/material";
import image from "@public/travel.png";
import GetStarted from "@components/landing-page/get-started"

const HeadLine1 = "Unlock Your";
const HeadLine2 = "Journey";

const subHeadLine = `Embark on the journey of a lifetime with Trip Tix!
Discover the world in style as we bring you the best deals on tickets 
for flights, trains, buses, and more.`;

const buttonLabel = "Get Started";

export default function HeroSection() {
  return (
    <Stack
      sx={{ height: "80vh"}}
      alignContent={"center"}
      alignItems={"center"}
      justifyContent={"center"}
      padding={"10rem"}
    >
      <Stack direction="row" justifyContent={"center"} alignItems={"center"} spacing={'10vw'}>
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"flex-start"}
          width={"50%"}
        >
          <Typography variant={"h1"}>{HeadLine1}</Typography>
          <Typography variant={"h1"} sx={{
            color: "black",
            backgroundColor: "rgba(255,255,255,0.5)",
            borderRadius: "0.5rem",
            margin: "-0.5rem",
            padding: "0.5rem",
          }}>{HeadLine2}</Typography>
          <Typography variant={"body1"} sx ={{
            marginTop: "1rem",
            maxWidth: "40rem",
            marginBottom: "1rem",
          }}>{subHeadLine}</Typography>
          <GetStarted/>
        </Stack>
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"50%"}
        >
          <img src={image.src} alt="hero-section" />
          <Typography variant={"caption"}>image will be changed, Don't worry</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
