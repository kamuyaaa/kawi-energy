import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import AboutTechnology from "@/components/home/AboutTechnology";
import Process from "@/components/home/Process";
import Industries from "@/components/home/Industries";
import Technology from "@/components/home/Technology";
import Benefits from "@/components/home/Benefits";
import Timeline from "@/components/home/Timeline";
import Prototype from "@/components/home/Prototype";
import Team from "@/components/home/Team";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#050816] text-white">

      <Navbar />

      <Hero />

      <Stats />

      <AboutTechnology />

      <Process />

      <Industries />

      <Technology />

      <Benefits />

      <Timeline />

      <Prototype />

      <Team />

      <ContactCTA />

      <Footer />

    </main>
  );
}