import React from "react";
import { Variants, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const v: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const c: Variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <section className="relative h-screen px-8 text-darkGray w-full max-w-screen  flex flex-col items-center justify-end pb-[10vh] md:pb-[20vh] ">
      <div className="absolute inset-0 -z-10 h-full">
        <motion.div style={{ opacity }} className="relative w-full h-full">
          <Image
            src={"/bg.png"}
            fill
            className="inset-0 w-full h-full object-cover aspect-video"
            alt="bgImage"
          />
        </motion.div>
      </div>

      <motion.div
        variants={c}
        initial="initial"
        animate="animate"
        className=" h-fit  mx-auto w-fit max-w-screen-lg  flex flex-col items-center justify-center"
      >
        <motion.h1
          variants={v}
          className="mb-6 font-bold text-2xl md:text-3xl xl:text-4xl"
        >
          Bálits Péter Márton.
        </motion.h1>
        <motion.p variants={v} className="mb-16 text-2xl text-center">
          I’m passionate about bringing ideas to life and solving complex
          problems.
        </motion.p>
        <motion.button
          variants={v}
          className=" xl:text-xl  rounded-full py-2 px-6 bg-darkGray text-white transition-opacity hover:opacity-80"
        >
          Curriculum&nbsp;Vitae
        </motion.button>
      </motion.div>
    </section>
  );
};
