import { Github } from "lucide-react";

interface IProject {
  title: string;
  description?: string;
  url: string;
}

const Project = ({ title, description, url }: IProject) => {
  // const navTo = (url) => {
  //   nav(url);
  // };

  return (
    <a
      target="_blank"
      href={url}
      className="flex items-center justify-around flex-col w-[300px] h-[300px] bg-zinc-300 hover:bg-zinc-600 shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black ease-out hover:translate-y-1 transition-all rounded font-bold"
    >
      <h1>{title}</h1>
      {description && <p className=" m-2 text-center">{description}</p>}

      <Github />
    </a>
  );
};

export const Projects = () => {
  return (
    <section className="mt-32">
      <h2 className="m-16 croll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        projects
      </h2>
      <div className="section grid grid-cols-3 justify-items-center gap-8 mt-8 mb-8">
        <Project
          title="knex"
          description="landing page for knex company"
          url="https://github.com/jairosl/knex"
        />
        <Project
          title="my-expenses"
          url="https://github.com/samuelfsd/my-expenses"
          description="my expenses aims to provide robust tools for users to manage their finances effectively."
        />
        <Project
          title="boilerplate-knex"
          description="my personal boilerplate for nextjs"
          url="https://github.com/samuelfsd/boilerplate-knex"
        />
        <Project
          title="golang"
          description="fundamentals of this incredible lang"
          url="https://github.com/samuelfsd/fundamentals-go"
        />
        <Project
          title="invite-teams"
          description="an app to play with friends"
          url="https://github.com/samuelfsd/invite-teams"
        />
        <Project
          title="data structure"
          description="an repo to learning data structure"
          url="https://github.com/samuelfsd/data-structure"
        />
      </div>
    </section>
  );
};
