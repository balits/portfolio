import Image from "next/image";
import Marquee from "react-fast-marquee";

export const Tech = () => {
  return (
    <section className="relative w-full h-[80vh] flex flex-col  gap-28 items-center justify-center">
      <h2 className="absolute top-28 text-4xl">Technologies I use</h2>
      <Marquee
        gradient
        className="w-full max-w-screen-lg flex items-center justify-around"
      >
        <Image
          className="mx-8"
          src={"/logo_1.svg"}
          height={70}
          width={70}
          alt="react"
        />
        <Image
          className="mx-8"
          src={"/logo_2.svg"}
          height={60}
          width={60}
          alt="svelte"
        />
        <Image
          className="mx-8"
          src={"/logo_3.svg"}
          height={60}
          width={60}
          alt="typescript"
        />
        <Image
          className="mx-8"
          src={"/tailwind.svg"}
          height={70}
          width={70}
          alt="tailwindcss"
        />
        <Image
          className="mx-8"
          src={"/logo_5.svg"}
          height={80}
          width={80}
          alt="rust"
        />
        <Image
          className="mx-2"
          src={"/logo_4.svg"}
          height={100}
          width={100}
          alt="go"
        />
        <Image
          className="mx-8"
          src={"/git.svg"}
          height={60}
          width={60}
          alt="git"
        />
      </Marquee>
    </section>
  );
};
