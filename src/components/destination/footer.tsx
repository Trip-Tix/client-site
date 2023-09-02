import { useSpring, animated } from "@react-spring/web";

export default function Footer() {
  const props = useSpring({
    from: { opacity: 0, marginTop: 500 },
    to: { opacity: 1, marginTop: 0 },
    delay: 2000,
  });

  return (
    <animated.div style={props}>
      <div>Footer</div>
    </animated.div>
  );
}
