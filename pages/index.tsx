import { Inter } from "next/font/google";

import { Skills } from "@/components/skills";
import { About } from "@/components/about";
import { Goodbye } from "@/components/goodbye";
import { Tech } from "@/components/tech";
import { Hero } from "@/components/hero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`selection:bg-blue-500 selection:text-gray-100 flex min-h-screen  max-w-full flex-col items-center justify-start ${inter.className}`}
    >
      <Hero />
      <Skills />
      <Tech />
      <Goodbye />
    </main>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
