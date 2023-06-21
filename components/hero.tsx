import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";

export const Hero = () => {
  const { scrollY, scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <>
      <div className="fixed -z-10 inset-0 w-screen h-screen overflow-hidden">
        <motion.div style={{ opacity }} className="relative w-full h-full">
          <Image
            src="/bg-gradient.jpg"
            alt="Background gradient"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
      <section className="h-screen w-full flex flex-col items-start justify-between">
        <div />
        <h1 className="pl-8 text-8xl font-bold">Hello</h1>
        <p className="px-8 pb-8 text-2xl">
          I’m <span className="font-bold">Balits Peter Marton,</span> a computer
          science student from Budapest working on my Bsc at ELTE.
        </p>
      </section>
    </>
  );
};
