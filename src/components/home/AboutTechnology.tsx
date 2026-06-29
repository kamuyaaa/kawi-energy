"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Abundant and low-cost storage material",
  "Zero emissions during operation",
  "Long-duration thermal energy storage",
  "Designed for African industries",
];

export default function AboutTechnology() {
  return (
    <section className="relative bg-[#050816] py-36">
      <Container>
        <div className="grid items-center gap-24 lg:grid-cols-2">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              WHY SAND?
            </p>

            <h2 className="text-5xl font-bold leading-tight lg:text-6xl">
              A Simple Material.
              <br />
              Extraordinary
              <span className="text-cyan-400"> Energy.</span>
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
              Sand is one of the world's most abundant materials. By storing
              renewable electricity as thermal energy, KAWI provides industries
              with reliable heat while reducing dependence on fossil fuels.
            </p>

            <div className="mt-12 space-y-6">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2
                    className="text-cyan-400"
                    size={24}
                  />

                  <span className="text-lg text-slate-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-[36px]">
              <Image
                src="/images/battery/battery-1.jpg"
                alt="Sand Battery"
                width={900}
                height={1000}
                className="h-[700px] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}