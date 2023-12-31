// essential reacts
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

// pre-made component
import Typography from "@mui/material/Typography";

// animation
import { useSpring, animated } from "@react-spring/web";

// custom components
import { ColorContext } from "@public/context/global";

interface NavItemProps {
    name: string;
    href: string;
}

export default function NavItem({ name, href }: NavItemProps) {
    const [hovered, setHovered] = useState(false);
    const animationEnd = 1000;
    const animationDuration = 50;
    const { mode } = useContext(ColorContext);
    const router = useRouter();

    const [props, set] = useSpring(() => ({
        textShadow: "0 0 0 rgba(0,0,0,0)",
        config: {
            duration: animationDuration,
            tension: 1000,
            friction: 100,
        },
    }));

    useEffect(() => {
        set({
            textShadow: hovered
                ? mode === "light"
                    ? "0 0 0.5rem rgba(0,0,0,0.8)"
                    : "0 0 0.5rem rgba(255,255,255,0.8)"
                : "0 0 0 rgba(0,0,0,0)",
        });
    }, [hovered, set, mode]);

    const trigger = () => {
        setHovered(true);
    };

    useEffect(() => {
        if (!hovered) return;

        const timeout = window.setTimeout(() => {
            setHovered(false);
        }, animationEnd);

        return () => {
            window.clearTimeout(timeout);
        };
    }, [hovered, animationEnd]);

    return (
        <animated.div onMouseEnter={trigger} style={props}>
            <Typography
                variant="body1"
                sx={{
                    cursor: "pointer",
                }}
                onClick={() => {
                    router.push(href);
                }}
            >
                {name}
            </Typography>
        </animated.div>
    );
}
