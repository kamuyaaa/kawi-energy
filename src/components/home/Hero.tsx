"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Image */}

      <img
        src="/images/hero/hero-bg.png"
        alt="KAWI Energy"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-transparent" />

      <Container>

        <div className="relative z-10 flex h-screen max-w-3xl items-center">

          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .9 }}
          >

            <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2">

              <span className="text-sm text-cyan-300">

                Sustainable Thermal Energy Storage

              </span>

            </div>

            <h1 className="text-6xl font-bold leading-[0.9] tracking-tight lg:text-8xl">

              Renewable
              <br />

              Energy

              <br />

              Stored in
              <br />

              <span className="text-cyan-400">
                Sand.
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">

              Affordable thermal energy storage using sand batteries.
              Designed for industries, factories and communities across Africa.

            </p>

            <div className="mt-12 flex gap-5">

              <Button
                size="lg"
                rightIcon={<ArrowRight size={18} />}
              >
                Explore Technology
              </Button>

              <Button
                size="lg"
                variant="secondary"
                leftIcon={<Play size={18} />}
              >
                Watch Video
              </Button>

            </div>

          </motion.div>

        </div>

      </Container>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown
          size={36}
          className="text-white"
        />
      </motion.div>

    </section>
  );
}