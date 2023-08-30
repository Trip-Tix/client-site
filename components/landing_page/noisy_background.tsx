import React from "react";

interface NoisyBackgroundProps {
  children: React.ReactNode;
}

const canvasStyles: React.CSSProperties = {
  background: `linear-gradient(45deg,hsl(60deg 92% 71%) 0%,
    hsl(160deg 48% 46%) 38%,
    hsl(180deg 100% 17%) 62%,
    hsl(0deg 0% 0%) 100%)`,
    position: "relative",
    width: "100%",
    height: "100%",
    zIndex: -1,
    overflow: "hidden",
};

export default function NoisyBackground({ children }: NoisyBackgroundProps) {
  return <div style={canvasStyles}>{children}</div>;
}
