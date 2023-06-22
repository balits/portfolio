import { Inter } from "next/font/google";

import { Skills } from "@/components/skills";
import { About } from "@/components/about";
import { Goodbye } from "@/components/goodbye";
import { Tech } from "@/components/tech";
import { Hero } from "@/components/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main
        className={`flex min-h-screen max-w-full flex-col items-center justify-start ${inter.className}`}
      >
        <Hero />
        <About />
        <Skills />
        <Tech />
        <Goodbye />
      </main>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
