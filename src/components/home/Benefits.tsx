"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import {
  Leaf,
  Flame,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Zero Carbon Heat",
    text: "Replace fossil fuels with renewable thermal energy for industrial processes.",
  },
  {
    icon: Flame,
    title: "High Temperature",
    text: "Deliver heat exceeding 400°C for demanding industrial applications.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Storage",
    text: "Store renewable energy for hours or even days without significant losses.",
  },
  {
    icon: BarChart3,
    title: "Lower Operating Costs",
    text: "Reduce fuel expenses while improving long-term energy resilience.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-[#040712] py-40">
      <Container>

        <div className="mb-24 text-center">

          <p className="mb-4 uppercase tracking-[0.35em] text-cyan-400">
            BENEFITS
          </p>

          <h2 className="text-5xl font-bold lg:text-7xl">
            Why Industries
            <br />
            Choose KAWI
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {benefits.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .15,
                  duration: .7,
                }}
                whileHover={{
                  y: -10,
                }}
                className="rounded-[30px] border border-white/10 bg-slate-900/70 p-10 backdrop-blur-xl"
              >

                <Icon
                  size={42}
                  className="text-cyan-400"
                />

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {item.text}
                </p>

              </motion.div>

            );

          })}

        </div>

      </Container>
    </section>
  );
}