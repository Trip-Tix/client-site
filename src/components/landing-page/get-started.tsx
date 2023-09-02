// essential reacts
import { use, useEffect, useState } from "react";
import { useRouter } from "next/router";

// pre-made component
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// animation
import { useSpring, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";

// customs
import styles from "@styles/landing-page/get-started.module.css";

export default function GetStarted() {
    const [ref, { width }] = useMeasure();
    const [pressed, setPressed] = useState(false);
    const props = useSpring({ width: pressed ? width : 0 });
    const router = useRouter();

    const initalAnimation = useSpring({
        from: {
            opacity: 0,
            x: -100,
        },
        to: {
            opacity: 1,
            x: 0,
        },
        delay: 500,
    });

    useEffect(() => {
        if (pressed) {
            setTimeout(() => {
                router.push("/auth");
            }, 500);
        }
    }, [pressed, router]);

    return (
        <animated.div style={initalAnimation}>
            <Box
                sx={{
                    borderRadius: "0.5rem",
                    padding: "0.5rem",
                }}
                className={styles.main}
                onClick={() => setPressed(!pressed)}
                ref={ref}
            >
                <animated.div className={styles.fill} style={props} />
                <Typography
                    variant={"body1"}
                    sx={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                    }}
                    className={styles.text}
                >
                    Get Started
                </Typography>
            </Box>
        </animated.div>
    );
}
