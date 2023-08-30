// pages/another-page.tsx
"use client";
import { motion } from "framer-motion";
import { Button, Card, CardContent, Typography } from "@mui/material";

const AnotherPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Another Page with Framer Motion + Material-UI
          </Typography>
          <Typography variant="body1" paragraph>
            This is another page to demonstrate the integration of Framer Motion
            and Material-UI in a Next.js app.
          </Typography>
          <Button variant="contained" color="secondary">
            Click Me Too
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AnotherPage;
