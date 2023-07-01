import { Variants, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { GrLinkedin, GrFacebook, GrInstagram, GrMail } from "react-icons/gr";

export const Goodbye = () => {
  const thanksRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  const thanksInView = useInView(thanksRef, {
    amount: 0.4,
  });

  const socialsInView = useInView(socialsRef, {
    amount: 0.8,
  });

  const v: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      ref={thanksRef}
      variants={v}
      initial="hidden"
      animate={thanksInView ? "visible" : "hidden"}
      className="h-[50vh] blackOnWhite  px-8 py-12   w-full flex flex-col items-center justify-between"
    >
      <div className="space-y-6">
        <h2 className="text-2xl font-bold w-full text-center">
          Thanks for visiting
        </h2>
        <p className="text-xl text-center">
          I am looking forward to working with you.
        </p>
        <p className="text-xl text-center text-blueDark">
          balits.peter@gmail.com
        </p>
      </div>

      <motion.div
        ref={socialsRef}
        variants={v}
        initial="hidden"
        animate={socialsInView ? "visible" : "hidden"}
        className="space-y-8 "
      >
        <h3 className=" w-full text-center">My socials:</h3>
        <ul className="flex gap-12">
          <li>
            <GrLinkedin size={20} />
          </li>
          <li>
            <GrFacebook size={20} />
          </li>
          <li>
            <GrInstagram size={22} />
          </li>
          <li>
            <GrMail size={20} />
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};
