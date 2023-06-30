import { useEffect, useState } from "react";

export const Hero = () => {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    setDate(new Date());
  }, []);

  return (
    <section className="lg:mb-[20vh] px-8 blackOnWhite w-full max-w-screen  flex flex-col items-center justify-center gap-20">
      <div className="space-y-8 mt-[30vh] xl:mt-[40vh] h-fit  max-w-screen-lg  flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl md:text-3xl xl:text-4xl">
          Bálits Péter Márton.
        </h1>
        <p className="text-xl text-center">
          I’m passionate about bringing ideas to life and solving complex
          problems.
        </p>
        <button className="xl:text-xl  rounded-full py-2 px-6 bg-darkGray text-white transition-opacity hover:opacity-90">
          Curriculum&nbsp;Vitae
        </button>
      </div>

      <div className="mx-auto container lg:max-w-screen-lg rounded-4xl bg-offWhite p-4 gap-4 xl:gap-8 xl:p-8 xl:p-12  grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-5">
        <div className="md:col-span-2 ">
          {date && (
            <div className="flex items-end justify-between md:flex-col md:items-start md:gap-16">
              <div className="space-y-2">
                <aside className="uppercase text-sm md:text-base">
                  <span>
                    {date.toLocaleString("en-US", { month: "long" })}&nbsp;
                    {date.getDay()}
                  </span>
                </aside>
                <h3 className="text-2xl md:text-3xl xl:text-5xl font-bold">
                  {date.toLocaleString("en-US", { weekday: "long" })}
                </h3>
              </div>
              <p className="text-lightGray text-lg md:text-xl">
                Currently available.
              </p>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center justify-start gap-4 md:col-start-4 md:col-span-3">
          <p className="text-lg md:text-xl xl:text-2xl w-full">
            <span className="font-bold">Status: </span>Open to work.
          </p>
          <p className="text-lg md:text-xl xl:text-2xl w-full">
            <span className="font-bold">Studies: </span>Doing my Bsc in Computer
            Science.
          </p>
          <p className="text-lg md:text-xl xl:text-2xl w-full">
            <span className="font-bold">Ongoing: </span>Creating an ecommerce
            backend in Go.
          </p>
        </div>
      </div>
    </section>
  );
};
