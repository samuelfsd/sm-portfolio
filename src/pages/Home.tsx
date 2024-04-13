import Laptop from "@/assets/icon/Laptop";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";

export const Home = () => {
  return (
    <div className="flex items-center justify-center p-8 mt-64 lg:justify-around lg:gap-32">
      <Card className="flex flex-col m-25 p-8 lg:w-[600px]">
        <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Samuel Alves
        </CardTitle>
        <div className="flex flex-col gap-3 mt-2 mb-2">
          <CardDescription className="leading-7 [&:not(:first-child)]:mt-6">
            I'm a computer science student at the State University of Paraíba
            (UEPB).
          </CardDescription>
          <CardDescription>
            Today, I work in software development with a focus on web
            development. I have good conversational and technical skills. I work
            using the best market practices and following an agile development
            culture.
          </CardDescription>
          <CardDescription>
            I always seek clean communication with my teammates and deliver my
            tasks in the best possible way.
          </CardDescription>

          <CardDescription>
            I'm always looking for more technical knowledge to improve my
            skills. I'm currently studying React Native, Flask and Golang.
          </CardDescription>
        </div>
        <CardFooter className="flex mt-4 items-center gap-4">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/samuel-alves-medeiros-235461217"
          >
            <Linkedin />
          </a>
          <a target="_blank" href="https://github.com/samuelfsd">
            <Github />
          </a>

          <a target="_blank" href="https://twitter.com/samuelAlv7">
            <Twitter />
          </a>
        </CardFooter>
      </Card>

      <div className="hidden lg:flex lg:items-center">
        <Laptop />
      </div>
    </div>
  );
};
