import { FaJava, FaPython, FaReact, FaDocker } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiSpring } from "react-icons/si";

export const Skills = () => {
  return (
    <div className="mt-32">
      <h2 className="m-16 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Skills
      </h2>
      <div className="section flex flex-col items-center justify-center md:grid md:grid-cols-3 md:justify-items-center gap-8 mt-8 mb-8">
        <div className="flex flex-col items-center gap-3">
          <FaJava size={32} />
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            Java
          </code>
        </div>

        <div className="flex flex-col items-center gap-3">
          <RiJavascriptFill size={32} />
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            JavaScript
          </code>
        </div>
        <div className="flex flex-col items-center gap-3">
          <FaPython size={32} />
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            Python
          </code>
        </div>
        <div className="flex flex-col items-center gap-3">
          <SiSpring size={32} />

          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            Spring Boot
          </code>
        </div>
        <div className="flex flex-col items-center gap-3">
          <FaReact size={32} />

          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            React
          </code>
        </div>
        <div className="flex flex-col items-center gap-3">
          <FaDocker size={32} />

          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            Docker
          </code>
        </div>
      </div>

      <div className=" mt-32">
        <div className="flex flex-col gap-8 m-16">
          <p className="text-xl text-muted-foreground">
            I am specializing in various technologies including Java + Spring,
            JavaScript + React, and Python.
          </p>
          <p className="text-xl text-muted-foreground">
            I also have experience with Docker and am currently studying Golang.
            I am always seeking ways to make development more agile and
            cohesive. My goal is to create efficient and effective solutions
            that meet the needs of the project and exceed expectations.
          </p>
        </div>
      </div>
    </div>
  );
};
