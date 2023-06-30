import Image from "next/image";
import Marquee from "react-fast-marquee";

export const Tech = () => {
  return (
    <section className="blackOnWhite relative w-full h-[90vh] flex flex-col  gap-28 items-center justify-center">
      <Marquee gradient speed={100} className="">
        <Line />
      </Marquee>
    </section>
  );
};

const Line = () => {
  return (
    <div className="w-[200vh] mx-12 flex items-center justify-between">
      <Image
        src={"/logo_1.svg"}
        height={70}
        width={70}
        alt="react"
        className="object-center"
      />
      <Image src={"/logo_2.svg"} height={60} width={60} alt="svelte" />
      <Image
        src={"/logo_3.svg"}
        height={60}
        width={60}
        alt="typescript"
        className="object-center"
      />
      <Image
        src={"/tailwind.svg"}
        height={70}
        width={70}
        alt="tailwindcss"
        className="object-center"
      />
      <Image
        src={"/logo_5.svg"}
        height={80}
        width={80}
        alt="rust"
        className="object-center"
      />
      <Image
        src={"/logo_4.svg"}
        height={100}
        width={100}
        alt="go"
        className="object-center"
      />
      <Image
        src={"/git.svg"}
        height={60}
        width={60}
        alt="git"
        className="object-center"
      />
      <Image
        src={"/logo_1.svg"}
        height={70}
        width={70}
        alt="react"
        className="object-center"
      />
      <Image src={"/logo_2.svg"} height={60} width={60} alt="svelte" />
      <Image
        src={"/logo_3.svg"}
        height={60}
        width={60}
        alt="typescript"
        className="object-center"
      />
      <Image
        src={"/tailwind.svg"}
        height={70}
        width={70}
        alt="tailwindcss"
        className="object-center"
      />
      <Image
        src={"/logo_5.svg"}
        height={80}
        width={80}
        alt="rust"
        className="object-center"
      />
      <Image
        src={"/logo_4.svg"}
        height={100}
        width={100}
        alt="go"
        className="object-center"
      />
      <Image
        src={"/git.svg"}
        height={60}
        width={60}
        alt="git"
        className="object-center"
      />
    </div>
  );
};
