"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const team = [
  {
    name: "Engineering",
    role: "Thermal Systems",
    image: "/images/team/team1.png",
  },
  {
    name: "Research",
    role: "Materials Science",
    image: "/images/team/team2.png",
  },
  {
    name: "Operations",
    role: "Industrial Deployment",
    image: "/images/team/team3.png",
  },
];

export default function Team() {
  return (
    <section className="bg-[#08111F] py-40">

      <Container>

        <div className="mb-24 text-center">

          <p className="mb-4 uppercase tracking-[0.35em] text-cyan-400">
            OUR TEAM
          </p>

          <h2 className="text-5xl font-bold lg:text-7xl">
            Building Africas
            <br />
            Energy Future
          </h2>

        </div>

        <div className="grid gap-10 lg:grid-cols-3">

          {team.map((member, index) => (

            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .7,
                delay: index * .15,
              }}
              className="overflow-hidden rounded-[36px] border border-white/10 bg-slate-900"
            >

              <Image
                src={member.image}
                alt={member.name}
                width={700}
                height={900}
                className="h-[420px] w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-2xl font-bold">
                  {member.name}
                </h3>

                <p className="mt-2 text-cyan-400">
                  {member.role}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </Container>
    </section>
  );
}