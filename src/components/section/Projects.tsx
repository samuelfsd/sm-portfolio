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
    <div className="section flex items-center justify-center flex-col w-[300px] h-[300px] bg-slate-500">
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={url}>go to</a>
    </div>
  );
};

export const Projects = () => {
  return (
    <section className="mt-32">
      <div className="flex container items-center">
        <h1>projects</h1>
      </div>
      <div className="grid grid-cols-3 justify-items-center gap-8 mt-8">
        <Project title="projeto 1" url="#" />
        <Project title="projeto 1" url="#" />
        <Project title="projeto 1" url="#" />
        <Project title="projeto 1" url="#" />
        <Project title="projeto 1" url="#" />
        <Project title="projeto 1" url="#" />
      </div>
    </section>
  );
};
