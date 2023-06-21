export const Skills = () => {
  return (
    <section className="w-screen overflow-x-hidden">
      <div className="px-8 py-32 w-full flex flex-col items-start justify-center ">
        <List title="What I can do" content={Already} />
      </div>

      <div className="bg-black text-white px-8 py-32 min-h-[60vh] w-full flex flex-col items-start justify-center border border-black">
        <List title="Currently learning" content={Currently} />
      </div>
    </section>
  );
};

const List = ({
  title,
  content,
}: {
  title: string;
  content: typeof Already;
}) => {
  return (
    <>
      <h2 className=" text-xl mb-4">{title}</h2>
      <ul className="pl-6 text-2xl w-full flex-col items-start justify-start gap-y-10 inline-flex">
        {content.map((s, i) => (
          <li
            key={i}
            className="flex-none w-fit"
            style={{ opacity: i !== 1 ? "0.2" : "1" }}
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
