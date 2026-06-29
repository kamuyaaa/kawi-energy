"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { ArrowUpRight } from "lucide-react";

const industries = [
  {
    title: "Manufacturing",
    image: "/images/industries/manufacturing.png",
  },
  {
    title: "Food Processing",
    image: "/images/industries/food.png",
  },
  {
    title: "Mining",
    image: "/images/industries/mining.png",
  },
  {
    title: "District Heating",
    image: "/images/industries/heating.png",
  },
];

export default function Industries() {
  return (
    <section className="bg-[#050816] py-40">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mb-20"
        >
          <p className="mb-4 uppercase tracking-[0.3em] text-cyan-400">
            APPLICATIONS
          </p>

          <h2 className="max-w-4xl text-5xl font-bold leading-tight lg:text-7xl">
            Built for Every
            <br />
            Heat Intensive Industry.
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .7,
                delay: index * .1,
              }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-slate-900"
            >
              <div className="relative h-[420px] overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
                  <h3 className="text-3xl font-semibold text-white">
                    {industry.title}
                  </h3>

                  <div className="rounded-full bg-cyan-400 p-3">
                    <ArrowUpRight
                      size={22}
                      className="text-black"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}