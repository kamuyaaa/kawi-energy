"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Renewable Energy",
    description:
      "Electricity from solar and wind powers the thermal storage system.",
  },
  {
    number: "02",
    title: "Heat Conversion",
    description:
      "Electrical energy is converted into high-temperature thermal energy.",
  },
  {
    number: "03",
    title: "Sand Storage",
    description:
      "Heat is safely stored inside specially engineered sand battery chambers.",
  },
  {
    number: "04",
    title: "Industrial Heat",
    description:
      "Stored heat is supplied on demand to industrial processes and district heating.",
  },
];

export default function Process() {
  return (
    <section className="bg-[#050816] py-40">
      <Container>

        <div className="mb-24 max-w-3xl">

          <p className="mb-4 uppercase tracking-[0.3em] text-cyan-400">
            HOW IT WORKS
          </p>

          <h2 className="text-5xl font-bold leading-tight lg:text-7xl">
            From Renewable
            <br />
            Electricity
            <br />
            to Industrial Heat
          </h2>

        </div>

        <div className="grid gap-24 lg:grid-cols-2">

          {/* LEFT */}

          <div className="space-y-12">

            {steps.map((step, index) => (

              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .7,
                  delay: index * .15,
                }}
                className="group flex gap-8"
              >

                <div className="text-6xl font-bold text-slate-700 transition group-hover:text-cyan-400">
                  {step.number}
                </div>

                <div>

                  <h3 className="text-3xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-md leading-8 text-slate-400">
                    {step.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="sticky top-32 h-fit"
          >

            <div className="overflow-hidden rounded-[40px]">

              <Image
                src="/images/process/process.png"
                alt="Process"
                width={900}
                height={900}
                className="h-[700px] w-full object-cover"
              />

            </div>

            <div className="mt-8 flex items-center justify-between rounded-3xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur-xl">

              <div>

                <p className="text-slate-400">
                  Storage Efficiency
                </p>

                <h2 className="mt-2 text-5xl font-bold">
                  94%
                </h2>

              </div>

              <ArrowRight
                size={40}
                className="text-cyan-400"
              />

            </div>

          </motion.div>

        </div>

      </Container>
    </section>
  );
}