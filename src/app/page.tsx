import { About } from "@/Components/About";
import { Contact } from "@/Components/Contact";
import { Hero } from "@/Components/Hero";
import { Services } from "@/Components/Services";
import TireRequestForm from "@/Components/TiresForm";
import { TuningCTA } from "@/Components/TuningCTA";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main className="mt-[70px] flex flex-col items-center justify-start">
      <Analytics />
      <Toaster position="top-center" reverseOrder={false} />
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
