"use client";
import { seasonalOrem } from "@/assets/icon";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

const svgVariants = {
  hidden: { y: 0 },
  visible: {
    y: [0, -25, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const staggerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Splash() {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prevKey) => prevKey + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <motion.div
        key={animationKey}
        variants={staggerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <motion.div variants={svgVariants}>{seasonalOrem.spring}</motion.div>
        <motion.div variants={svgVariants}>{seasonalOrem.summer}</motion.div>
        <motion.div variants={svgVariants}>{seasonalOrem.autumn}</motion.div>
        <motion.div variants={svgVariants}>{seasonalOrem.winter}</motion.div>
      </motion.div>
    </Container>
  );
}

export default Splash;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 99;
`;
