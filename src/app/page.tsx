import Image from "next/image";
import Header from "./components/Header";
import Illustration from "./public/illustration-svg.svg";
import RickAndMorty from "./public/rick-and-morty.png";
import { CardType } from "./types";
import Card from "./components/Card";

const projects:CardType[] = [
  {
    id:1,
    img:RickAndMorty,
    title:"Rick and Morty Site",
    description:"This was done using a figma design template and the goal of this project was to learn how to use GraphQL, Codegen on the rickandmorty.com GpraphQL API to extract data",
  } 
];

export default function Home() {
  return (
    <div className="relative">
    <Header />
    <main className="p-16 bg-orange-500">
      <section className="grid grid-cols-12 items-center h-screen">
        <div className="col-span-6 grid grid-cols-subgrid gap-2 items-center">
          <h1 className="cols-start-1 col-span-2 mb-8 font-semibold text-3xl">Hi, I&apos;m Noor Ullah,</h1>
          <h1 className="col-start-1 col-span-3 text-5xl font-black border-y-4 border-black rounded-sm py-4">Frontend Developer</h1>
          <h1 className="col-start-1 col-span-2 text-3xl font-semibold mb-8">Based in Bangladesh</h1>
        </div>
        <div className="cols-start-6 col-span-5">
          <Image className="object-cover" src={Illustration} width={900} height={900} alt="developer illustration" />
        </div>
      </section>
      <section className="grid grid-cols-12 items-start h-screen">
        <article className="grid items-center col-span-2">
          <h1 className="font-semibold text-5xl border-y-4 border-black rounded-sm py-4">Projects</h1>
        </article>
        <article className="col-start-5 grid grid-cols-subgrid col-span-6">
          {
            projects.map((project) => (
              <Card key={project.id} {...project} />
            ))
          }
        </article>
      </section>
    </main>
    </div>
    
  );
}
