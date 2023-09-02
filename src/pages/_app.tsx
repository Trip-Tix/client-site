import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/ubuntu/300.css";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import { ColorModeContext } from "@public/context/global";

const theme = createTheme({
    typography: {
        fontFamily: ["Ubuntu", "sans-serif"].join(","),
    },
});

export default function App({ Component, pageProps }: AppProps) {
    const [mode, setMode] = React.useState<"light" | "dark">("light");
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
        }),
        []
    );
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
