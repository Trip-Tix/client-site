"use client";

// pages/more-animation.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Button, Card, CardContent, Typography } from "@mui/material";

const MoreAnimationPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <CardContent>
        <Typography variant="h4" gutterBottom>
          More Interactive Animation
        </Typography>
        <Typography variant="body1" paragraph>
          Hover over the card and see the interactive animations in action.
        </Typography>
      </CardContent>
    </motion.div>
  );
};

export default MoreAnimationPage;
