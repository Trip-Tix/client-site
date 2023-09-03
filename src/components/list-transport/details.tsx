import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useSpring } from "@react-spring/web";

export default function Details() {
    const [showDetails, setShowDetails] = useState(false);
    const props = useSpring({
        opacity: showDetails ? 1 : 0,
        height: showDetails ? "auto" : 0,
        from: { opacity: 0, height: 0 },
    });
    return (
        <Stack
            direction={"row"}
            spacing={1}
            sx={{
                background: "#00000010",
                padding: 2,
                display: showDetails ? "flex" : "none",
            }}
        >
            Hello
        </Stack>
    );
}
