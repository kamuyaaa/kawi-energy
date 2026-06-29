"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";

const technologies = [
  {
    title: "Smart Heat Storage",
    description:
      "Renewable electricity is converted into thermal energy and stored in engineered sand for long-duration use with minimal losses.",
    image: "/images/technology/storage.png",
  },
  {
    title: "Intelligent Monitoring",
    description:
      "Advanced sensors continuously monitor temperature, efficiency, and system health, enabling predictive maintenance and real-time optimization.",
    image: "/images/technology/monitoring.png",
  },
  {
    title: "Industrial Integration",
    description:
      "The system connects directly with industrial heat processes, reducing fossil fuel consumption while maintaining reliable thermal output.",
    image: "/images/technology/integration.png",
  },
];

export default function Technology() {
  return (
    <section className="bg-[#08111f] py-40">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-28 text-center"
        >
          <p className="mb-4 uppercase tracking-[0.35em] text-cyan-400">
            TECHNOLOGY
          </p>

          <h2 className="text-5xl font-bold lg:text-7xl">
            Engineering the Future
            <br />
            of Thermal Storage
          </h2>
        </motion.div>

        <div className="space-y-36">
          {technologies.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid items-center gap-20 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-[36px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={900}
                  height={700}
                  className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
                />
              </div>

              <div>
                <h3 className="text-4xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-8 text-lg leading-9 text-slate-400">
                  {item.description}
                </p>

                <div className="mt-10 h-1 w-28 rounded-full bg-cyan-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}