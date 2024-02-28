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
    <div className="flex items-center justify-around flex-col w-[300px] h-[300px] bg-zinc-300 hover:bg-zinc-600 shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black ease-out hover:translate-y-1 transition-all rounded">
      <h1>{title}</h1>
      <p>{description}</p>

      <Github>
        <a href={url}>go to</a>
      </Github>
    </div>
  );
};

export const Projects = () => {
  return (
    <section className="mt-32">
      <h2 className="m-16 croll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        work
      </h2>
      <div className="section grid grid-cols-3 justify-items-center gap-8 mt-8 mb-8">
        <Project title="projeto 1" url="#" />
        <Project title="projeto 2" url="#" />
        <Project title="projeto 3" url="#" />
        <Project title="projeto 4" url="#" />
        <Project title="projeto 5" url="#" />
        <Project title="projeto 6" url="#" />
      </div>
    </section>
  );
};
