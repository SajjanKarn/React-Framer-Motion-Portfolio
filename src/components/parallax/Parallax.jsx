import { motion, useScroll, useTransform } from "framer-motion";
import "./parallax.scss";
import { useRef } from "react";

export default function Parallax({ type = "services" }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #0c0c1d, #505064)",
      }}
    >
      <motion.h1
        style={{
          y: yBg,
        }}
      >
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage:
            type === "services" ? "url('/planets.png')" : "url('/sun.png')",
        }}
      ></motion.div>
      <motion.div
        className="stars"
        style={{
          x: yBg,
        }}
      ></motion.div>
    </div>
  );
}
