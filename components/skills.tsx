import { useScroll } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Skills = () => {
  return (
    <>
      <section className="mt-[30vh] w-full overflow-x-hidden ">
        <div className=" px-8 py-56 w-full max-w-screen-md mx-auto flex flex-col items-start justify-center ">
          <List title="Skills" content={Already} showFirstLine={true} />
        </div>
      </section>

      <section className="w-full overflow-x-hidden  whiteOnBlack ">
        <div className=" px-8 py-56  w-full max-w-screen-md mx-auto flex flex-col items-start justify-center ">
          <List title="Learning" content={Currently} showFirstLine={false} />
        </div>
      </section>
    </>
  );
};

const List = ({
  title,
  content,
  showFirstLine,
}: {
  title: string;
  content: typeof Already;
  showFirstLine: boolean;
}) => {
  const refContainer = useRef<HTMLUListElement>(null);

  const [visibleIndex, setVisibleIndex] = useState(0);

  const { scrollY } = useScroll({
    target: refContainer,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    scrollY.on("change", () => {
      if (!refContainer.current) return;

      const { clientHeight, offsetTop } = refContainer.current;
      const screen = window.innerHeight;
      const halfScreen = screen / 2;
      const percent =
        Math.min(
          clientHeight + halfScreen,
          Math.max(-screen, scrollY.get() - offsetTop) + halfScreen
        ) / clientHeight;

      setVisibleIndex(
        Math.floor(
          Math.min(3 - 0.5, Math.max(showFirstLine ? 0 : -1, percent * 3))
        )
      );
    });

    return () => {
      scrollY.clearListeners();
    };
  });

  return (
    <>
      <h2
        className=" text-xl md:text-2xl mb-6 md:mb-10 transition-opacity duration-500"
        style={{ opacity: visibleIndex === 0 ? 1 : 0.2 }}
      >
        {title}
      </h2>
      <ul
        ref={refContainer}
        className="pl-6 text-2xl md:text-4xl xl:text-5xl w-full flex-col items-start justify-start gap-y-12 md:gap-y-20 flex"
      >
        {content.map((s, i) => (
          <li
            key={i}
            className="flex-none w-fit inline-block transition-opacity duration-500"
            style={{ opacity: i === visibleIndex ? 1 : 0.2 }}
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
    title: "Frontend",
    body: (
      <>
        I’m profficient in many frontend frameworks, such as{" "}
        <Link target="_blank" href="https://svelte.dev/" className="link-light">
          React
        </Link>
        ,{" "}
        <Link target="_blank" href="https://svelte.dev/" className="link-light">
          Svelte
        </Link>{" "}
        or{" "}
        <Link
          target="_blank"
          href="https://www.solidjs.com/"
          className="link-light"
        >
          Solid
        </Link>
        .
      </>
    ),
  },
  {
    title: "UI / UX",
    body: "Creating responsive, accessible and beautifull apps is a priority for me.",
  },
  {
    title: "API Integration",
    body: "I'm familiar with both GraphQL and Rest API-s.",
  },
];

const Currently = [
  {
    title: "Backend",
    body: (
      <>
        I am currently learning high performace backend frameworks, such
        as&nbsp;
        <Link target="_blank" href="https://gofiber.io/" className="link-dark">
          Go Fiber,
        </Link>{" "}
        <Link target="_blank" href="https://gofiber.io/" className="link-dark">
          Gin
        </Link>{" "}
        and{" "}
        <Link
          target="_blank"
          href="https://docs.rs/axum/latest/axum/"
          className="link-dark"
        >
          Rust&apos; Axum.
        </Link>
      </>
    ),
  },
  {
    title: "Containerization",
    body: (
      <>
        Recently I am working more and more with&nbsp;
        <Link href="https://www.docker.com/" className="link-dark">
          Docker,
        </Link>
        &nbsp;and&nbsp;
        <Link href="https://kubernetes.io/" className="link-dark">
          Kubernetes.
        </Link>
      </>
    ),
  },
  {
    title: "Native Apps",
    body: (
      <>
        Lately I&apos;ve been trying out{" "}
        <Link href="https://reactnative.dev/" className="link-dark">
          React Native,
        </Link>{" "}
        and in the future I plan to use{" "}
        <Link href="https://reactnative.dev/" className="link-dark">
          Swift
        </Link>{" "}
        too.
      </>
    ),
  },
];
