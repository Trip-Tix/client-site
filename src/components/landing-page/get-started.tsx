import { useSpring, animated } from "@react-spring/web";
import { Box, Typography } from "@mui/material";
import { use, useEffect, useState } from "react";

export default function GetStarted() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  const buttonSpring = useSpring({
    backgroundColor: hovered ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.5)",
    borderRadius: "0.5rem",
    padding: clicked ? "0.4rem 0.6rem" : "0.5rem",
    config: { tension: 300, friction: 10 },
  });



  return (
    <animated.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setClicked(false);
      }}
      onMouseDown={() => setClicked(true)}
      onMouseUp={() => setClicked(false)}
      style={buttonSpring}
    >
      <Box
        sx={{
          borderRadius: "0.5rem",
          padding: "0.5rem",
        }}
      >
        <Typography
          variant={"body1"}
          sx={{
            color: "black",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          Get Started
        </Typography>
      </Box>
    </animated.div>
  );
}
