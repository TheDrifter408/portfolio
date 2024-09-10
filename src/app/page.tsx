import Image from "next/image";
import Header from "./components/Header";
import Illustration from "./public/illustration-svg.svg";
export default function Home() {
  return (
    <>
    <Header />
    <main className="p-16 bg-orange-500 h-screen">
      <section className="grid grid-cols-12 items-center">
        <div className="col-span-6 grid grid-cols-subgrid gap-2 items-center">
          <h1 className="cols-start-1 col-span-2 mb-8 font-semibold text-3xl">Hi, I&apos;m Noor Ullah,</h1>
          <h1 className="col-start-1 col-span-3 text-5xl font-black border-y-4 border-black rounded-sm py-4">Frontend Developer</h1>
          <h1 className="col-start-1 col-span-2 text-3xl font-semibold mb-8">Based in Bangladesh</h1>
        </div>
        <div className="cols-start-6 col-span-5">
          <Image className="object-cover" src={Illustration} width={900} height={900} alt="developer illustration" />
        </div>
      </section>
      <section>
        
      </section>
    </main>
    </>
    
  );
}
