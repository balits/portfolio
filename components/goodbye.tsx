import React, { useRef } from "react";
import { Variants, motion, useInView } from "framer-motion";
import { GrLinkedin, GrFacebook, GrInstagram, GrMail } from "react-icons/gr";
import Link from "next/link";
import EmailLink from "./email-link";

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
      <div className="gap-y-6 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold w-full text-center">
          Thanks for visiting
        </h2>
        <p className="text-xl text-center">
          I am looking forward to working with you.
        </p>
        <EmailLink>
          <span className="text-xl text-center text-blueDark w-full">
            balits.peter@gmail.com
          </span>
        </EmailLink>
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
            <Link
              className="transition-opacity hover:opacity-80"
              href="https://www.linkedin.com/in/balitspeter"
              target="_blank"
            >
              <GrLinkedin size={20} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.facebook.com/balits.peter/"
              className="transition-opacity hover:opacity-80"
              target="_blank"
            >
              <GrFacebook size={20} />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/balitspeter"
              className="transition-opacity hover:opacity-80"
              target="_blank"
            >
              <GrInstagram size={22} />
            </Link>
          </li>
          <li>
            <EmailLink>
              <GrMail size={20} />
            </EmailLink>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};
