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
    <div className="flex items-center justify-around gap-32 mt-64 ">
      <Card className="flex flex-col p-4 w-[700px]">
        <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Samuel Alves
        </CardTitle>
        <CardDescription className="leading-7 [&:not(:first-child)]:mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          repellat maxime voluptatibus sunt, qui saepe iusto delectus, minima
          perferendis veniam ratione similique. Accusamus quibusdam praesentium
          quae eaque consequatur voluptate quos.
        </CardDescription>
        <CardFooter className="flex mt-4 items-center gap-4">
          <Linkedin />
          <Github />
          <Twitter />
        </CardFooter>
      </Card>

      <div className="flex items-center">
        <Laptop />
      </div>
    </div>
  );
};
