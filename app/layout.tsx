"use client";
import "@fontsource/lato";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { AnimatePresence } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const css_object: React.CSSProperties = {
    margin: "0",
  };

  const theme = createTheme({
    typography: {
      fontFamily: ["Lato", "sans-serif"].join(","),
    },
  });

  return (
    <html lang="en">
      <body style={css_object}>
        <AnimatePresence initial={false} mode="popLayout">
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AnimatePresence>
      </body>
    </html>
  );
}
