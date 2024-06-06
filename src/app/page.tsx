import { About } from "@/Components/About";
import { Contact } from "@/Components/Contact";
import { Hero } from "@/Components/Hero";
import { Navbar } from "@/Components/Navbar";
import { Services } from "@/Components/Services";
import { TuningCTA } from "@/Components/TuningCTA";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-[70px] flex flex-col items-center justify-start">
      <Hero />
      <Services />
      <TuningCTA />
      <About />
      <Contact />
    </main>
  );
}
