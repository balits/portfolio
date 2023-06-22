import Image from "next/image";
import Marquee from "react-fast-marquee";

export const Tech = () => {
  return (
    <section className="w-full h-[60vh] flex items-center justify-center">
      <Marquee
        autoFill
        gradient
        className="w-full max-w-screen-md  flex items-center justify-around"
      >
        <Image
          className="mx-6"
          src={"/logo_1.svg"}
          height={50}
          width={50}
          alt="react"
        />
        <Image
          className="mx-6"
          src={"/logo_2.svg"}
          height={40}
          width={40}
          alt="svelte"
        />
        <Image
          className="mx-6"
          src={"/logo_3.svg"}
          height={40}
          width={40}
          alt="typescript"
        />
        <Image
          className="mx-2"
          src={"/logo_4.svg"}
          height={80}
          width={80}
          alt="go"
        />
        <Image
          className="mx-6"
          src={"/logo_5.svg"}
          height={60}
          width={60}
          alt="rust"
        />
      </Marquee>
    </section>
  );
};
