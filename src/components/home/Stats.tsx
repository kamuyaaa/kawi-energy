"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const stats = [
  {
    value: "430°C",
    title: "Storage Temperature",
  },
  {
    value: "24/7",
    title: "Heat Availability",
  },
  {
    value: "100%",
    title: "Renewable Input",
  },
  {
    value: "94%",
    title: "System Efficiency",
  },
];

export default function Stats() {
  return (
    <section className="relative -mt-24 z-20">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 backdrop-blur-2xl"
            >
              <h2 className="text-5xl font-bold text-cyan-400">
                {stat.value}
              </h2>

              <p className="mt-4 text-slate-400">
                {stat.title}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}