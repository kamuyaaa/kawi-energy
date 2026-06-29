"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const timeline = [
  {
    year: "2024",
    title: "Research",
    text: "Concept development and thermal storage feasibility studies.",
  },
  {
    year: "2025",
    title: "Prototype",
    text: "Construction of the first KAWI thermal battery prototype.",
  },
  {
    year: "2026",
    title: "Industrial Pilot",
    text: "Pilot deployments with manufacturing partners across Kenya.",
  },
  {
    year: "2027+",
    title: "Commercial Scale",
    text: "Expansion into East Africa with large-scale industrial heat storage.",
  },
];

export default function Timeline() {
  return (
    <section className="bg-[#07111E] py-40">

      <Container>

        <div className="mb-28 text-center">

          <p className="mb-4 uppercase tracking-[0.35em] text-cyan-400">
            ROADMAP
          </p>

          <h2 className="text-5xl font-bold lg:text-7xl">
            Our Journey
          </h2>

        </div>

        <div className="relative mx-auto max-w-5xl">

          <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />

          <div className="space-y-24">

            {timeline.map((item, index) => (

              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .7,
                  delay: index * .1,
                }}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  index % 2 === 1
                    ? "lg:text-right"
                    : ""
                }`}
              >

                <div
                  className={
                    index % 2 === 1
                      ? "lg:order-2"
                      : ""
                  }
                >

                  <h2 className="text-6xl font-bold text-cyan-400">
                    {item.year}
                  </h2>

                  <h3 className="mt-4 text-3xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-slate-400">
                    {item.text}
                  </p>

                </div>

                <div className="hidden lg:flex justify-center">

                  <div className="h-8 w-8 rounded-full border-4 border-cyan-400 bg-[#07111E]" />

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}