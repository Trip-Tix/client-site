import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/ubuntu/300.css";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { ColorContext } from "@public/context/global";

const theme = createTheme({
    typography: {
        fontFamily: ["Ubuntu", "sans-serif"].join(","),
    },
});

export default function App({ Component, pageProps }: AppProps) {
    const [mode, setMode] = React.useState<"light" | "dark">("light");
    const theme = React.useMemo(
        () =>
            createTheme({
                typography: {
                    fontFamily: ["Ubuntu", "sans-serif"].join(","),
                },
                palette: {
                    mode: mode,
                },
            }),
        [mode]
    );
    return (
        <ThemeProvider theme={theme}>
            <ColorContext.Provider
                value={{
                    mode,
                    setMode,
                }}
            >
                <Component {...pageProps} />
            </ColorContext.Provider>
        </ThemeProvider>
    );
}
