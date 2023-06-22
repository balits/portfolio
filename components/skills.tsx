import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Skills = () => {
  return (
    <>
      <section className="w-full overflow-x-hidden ">
        <div className="px-8 py-40 w-full max-w-screen-md mx-auto flex flex-col items-start justify-center ">
          <List title="What I can do" content={Already} />
        </div>
      </section>

      <section className="w-full overflow-x-hidden  bg-black">
        <div className="text-white px-8 py-40  min-h-[60vh] w-full max-w-screen-md mx-auto flex flex-col items-start justify-center ">
          <List title="Currently learning" content={Currently} />
        </div>
      </section>
    </>
  );
};

const List = ({
  title,
  content,
}: {
  title: string;
  content: typeof Already;
}) => {
  const refContainer = useRef<HTMLUListElement>(null);
  const [visibelIndex, setVisibleIndex] = useState(0);
  const { scrollY, scrollYProgress } = useScroll({
    target: refContainer,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    scrollY.on("change", (lastVal) => {
      if (!refContainer.current) return;

      const { clientHeight, offsetTop } = refContainer.current;
      const screen = window.innerHeight;
      const halfScreen = screen / 2;
      const percent =
        Math.min(
          clientHeight + halfScreen,
          Math.max(-screen, scrollY.get() - offsetTop) + halfScreen
        ) / clientHeight;
      const i = Math.floor(Math.min(3 - 0.5, Math.max(0, percent * 3)));

      console.log(percent, i);

      const idx = Math.floor((scrollY.get() + halfScreen) / screen);

      setVisibleIndex(i);
    });

    return () => {
      scrollY.clearListeners();
    };
  });

  return (
    <>
      <h2 className=" text-xl md:text-2xl mb-4 md:mb-8">{title}</h2>
      <ul
        ref={refContainer}
        className="pl-6 text-2xl md:text-4xl xl:text-5xl w-full flex-col items-start justify-start gap-y-10 md:gap-y-16 flex"
      >
        {content.map((s, i) => (
          <li
            key={i}
            className="flex-none w-fit inline-block transition-opacity duration-500"
            style={{ opacity: i === visibelIndex ? 1 : 0.2 }}
          >
            <span className="font-bold after:content-[':']">{s.title}</span>{" "}
            <span>{s.body}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

const Already = [
  {
    title: "Frontend work",
    body: "I’m profficient in many frontend frameworks, such as React, Svelte or Solid.",
  },
  {
    title: "API-s",
    body: "I'm familiar with GraphQL and Rest API-s, and can use their full power in the frontend.",
  },
  {
    title: "UI / UX",
    body: "For me, creating responsive, accessible and beautifull apps is walk in the park.",
  },
];

const Currently = [
  {
    title: "Backend solutions",
    body: "I’m heavily invested in high performance backend technologies, like the Actis web, and Go’s Fiber",
  },
  {
    title: "Docker",
    body: " Cloud infrastructure is everywhere. Thanks to Go I can darara.",
  },
  {
    title: "DevOps",
    body: "I want to darara and dururu my way throguh college.",
  },
];
