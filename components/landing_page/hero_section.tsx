"use client";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

const HeadLineWhite = "Unlock Your";
const HeadLineBlack = "Journey";
const SubTitle =
  "Embark on the journey of a lifetime with Trip Tix! Discover the world in style as we bring you the best deals on tickets for flights, trains, buses, and more.";
const ButtonText = "Get Started";

export default function HeroSection() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ p: 20 }}
    >
      <Stack
        direction="column"
        alignItems="flex-start"
        alignContent="flex-start"
        sx={{ width: "50%" }}
      >
        <Stack direction="row" alignItems="center" sx={{ width: "100%" }}>
          <Stack
            direction="column"
            alignItems="flex-start"
            sx={{ width: "50%" }}
          >
            <Typography
              variant="h2"
              component="div"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              {HeadLineWhite}
            </Typography>
            <Typography
              variant="h2"
              component="div"
              sx={{ fontWeight: "bold", color: "black" }}
            >
              {HeadLineBlack}
            </Typography>
          </Stack>
        </Stack>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", color: "white", width: "100%" }}
        >
          {SubTitle}
        </Typography>
        <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              width: "100%",
              backgroundColor: "black",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {ButtonText}
          </Button>
        </motion.div>
      </Stack>
    </Stack>
  );
}
