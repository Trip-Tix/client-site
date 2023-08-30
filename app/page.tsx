// pages/page.tsx
"use client";
import { motion } from 'framer-motion';
import { Button, Typography } from '@mui/material';

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h2" gutterBottom>
        Framer Motion + Material-UI
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </motion.div>
  );
};

export default Page;
