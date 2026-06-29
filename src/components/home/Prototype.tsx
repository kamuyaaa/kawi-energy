"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function Prototype() {
  return (
    <section className="bg-[#050816] py-40">
      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <p className="mb-4 uppercase tracking-[0.35em] text-cyan-400">
              PROTOTYPE
            </p>

            <h2 className="text-5xl font-bold lg:text-7xl">
              Built for
              <br />
              Real Industry
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-400">
              The KAWI thermal battery prototype demonstrates how renewable
              electricity can be converted into high-temperature heat and
              delivered whenever industries need it.
            </p>

            <div className="mt-10 flex gap-5">

              <Button
                size="lg"
                rightIcon={<ArrowRight size={18} />}
              >
                View Prototype
              </Button>

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <Image
              src="/images/prototype/prototype.png"
              alt="Prototype"
              width={900}
              height={700}
              className="rounded-[40px] object-cover"
            />

          </motion.div>

        </div>

      </Container>
    </section>
  );
}