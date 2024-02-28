import Laptop from "@/assets/icon/Laptop";
import { Card, CardDescription, CardFooter, CardTitle } from "../ui/card";
import { Github, Linkedin, Twitter } from "lucide-react";

export const Home = () => {
  return (
    <section>
      <div className="flex items-center justify-around mt-32 mr-32 ml-32">
        <div className="flex w-1/2 items-center justify-center">
          <Card className="flex-col p-4">
            <CardTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Samuel Alves
            </CardTitle>
            <CardDescription className="leading-7 [&:not(:first-child)]:mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              repellat maxime voluptatibus sunt, qui saepe iusto delectus,
              minima perferendis veniam ratione similique. Accusamus quibusdam
              praesentium quae eaque consequatur voluptate quos.
            </CardDescription>
            <CardFooter className="flex mt-4 items-center gap-4">
              <Linkedin />
              <Github />
              <Twitter />
            </CardFooter>
          </Card>
        </div>
        <div className="flex w-1/2 items-stretch justify-end">
          <Laptop />
        </div>
      </div>
    </section>
  );
};
