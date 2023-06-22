import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";

export const Hero = () => {
  const { scrollY, scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <>
      <div className="fixed -z-10 inset-0 w-full max-w-screen h-screen overflow-x-hidden">
        <motion.div
          style={{ opacity }}
          className="relative w-full h-full overflow-x-hidden"
        >
          <Image
            src="/bg-gradient.jpg"
            alt="Background gradient"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </>
  );
};
