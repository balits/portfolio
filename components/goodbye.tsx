import Image from "next/image";
import Link from "next/link";

export const Goodbye = () => {
  return (
    <footer className="bg-black  pt-32 pb-44 text-white w-full flex flex-col items-center justify-center">
      <div>
        <h3 className="mb-8 text-2xl font-bold w-full text-center">
          Thanks for visiting
        </h3>
        <p className="mb-28 text-2xl text-center">
          I look forward to connecting with you one day.
        </p>
      </div>

      <ul>
        <li>
          <Link href={""}>
            <Image
              src={"/github.svg"}
              width={80}
              height={80}
              alt="Github"
              className="text-white"
            />
            <span>Github</span>
          </Link>
        </li>
      </ul>
    </footer>
  );
};
