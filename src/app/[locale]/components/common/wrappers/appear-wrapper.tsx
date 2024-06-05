"use client";
import { motion } from "framer-motion";

export const AppearWrapper = (props: any) => {
  return (
    <motion.div
      className={props.customClass + " flex justify-center"}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 3,
      }}
      viewport={{ once: true }}
    >
      {props.children}
    </motion.div>
  );
};
