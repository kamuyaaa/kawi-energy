"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-700 via-blue-700 to-slate-950 py-40">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,.15),transparent_35%)]" />

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mx-auto max-w-5xl text-center"
        >

          <p className="mb-5 uppercase tracking-[0.35em] text-cyan-200">
            LET US BUILD TOGETHER
          </p>

          <h2 className="text-5xl font-bold leading-tight lg:text-7xl">
            Ready to Transform
            <br />
            Industrial Energy?
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-slate-200">
            Partner with KAWI Metrics Technologies to accelerate the transition
            toward affordable, renewable thermal energy storage across Africa.
          </p>

          <div className="mt-12 flex justify-center">

            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-200"
              rightIcon={<ArrowRight size={18} />}
            >
              Contact Us
            </Button>

          </div>

        </motion.div>

      </Container>

    </section>
  );
}