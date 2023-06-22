import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import { M_PLUS_Rounded_1c } from "next/font/google";

const mplus = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["800"],
});

export const Hero = () => {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <>
      <div className="backdrop-blur-md sticky -z-10 inset-0 w-full max-w-screen h-screen overflow-x-hidden">
        <motion.div
          style={{ opacity }}
          className=" relative w-full h-full overflow-x-hidden"
        >
          <Image
            src="/bg.jpg"
            alt="Background gradient"
            fill
            className="-z-20 object-cover"
          />

          <section className="w-full h-full flex flex-col items-center justify-center">
            <h1
              className={`opacity-0 opacity-100 animate-bounce text-[#1d1d1c] text-8xl font-bold ${mplus.className}`}
            >
              Hello
            </h1>
          </section>
        </motion.div>
      </div>
    </>
  );
};
