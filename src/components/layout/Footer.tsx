import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const company = [
  "About",
  "Technology",
  "Industries",
  "Roadmap",
  "Careers",
];

const resources = [
  "News",
  "Research",
  "Documentation",
  "Partners",
  "Support",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#040816]">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <Container>

        <div className="relative py-36">

          {/* CTA */}

          <div className="mx-auto max-w-5xl text-center">

            <p className="mb-5 uppercase tracking-[0.35em] text-cyan-400">

              THE FUTURE OF HEAT STORAGE

            </p>

            <h2 className="text-5xl font-bold leading-tight lg:text-7xl">

              Let Us Build
              <br />
              Africas Energy Future.

            </h2>

            <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-slate-400">

              Join KAWI Metrics in accelerating renewable thermal energy
              storage for industries, manufacturers and communities
              across Africa.

            </p>

            <div className="mt-14 flex justify-center">

              <Button
                size="lg"
                rightIcon={<ArrowRight size={18} />}
              >
                Contact Our Team
              </Button>

            </div>

          </div>

          {/* Divider */}

          <div className="my-24 h-px bg-white/10" />

          {/* Footer Grid */}

          <div className="grid gap-16 lg:grid-cols-[2fr_1fr_1fr_1.5fr]">

            {/* Logo */}

            <div>

              <h2 className="text-4xl font-bold">

                KAWI Metrics

              </h2>

              <p className="mt-3 text-cyan-400">

                Thermal Energy Storage

              </p>

              <p className="mt-8 max-w-md text-lg leading-9 text-slate-400">

                Affordable renewable heat storage using engineered
                sand batteries to power Africa's industrial transition.

              </p>

            </div>

            {/* Company */}

            <div>

              <h3 className="mb-8 text-lg font-semibold">

                Company

              </h3>

              <div className="space-y-5">

                {company.map((item) => (

                  <Link
                    key={item}
                    href="/"
                    className="block text-slate-400 transition hover:text-white"
                  >
                    {item}
                  </Link>

                ))}

              </div>

            </div>

            {/* Resources */}

            <div>

              <h3 className="mb-8 text-lg font-semibold">

                Resources

              </h3>

              <div className="space-y-5">

                {resources.map((item) => (

                  <Link
                    key={item}
                    href="/"
                    className="block text-slate-400 transition hover:text-white"
                  >
                    {item}
                  </Link>

                ))}

              </div>

            </div>

            {/* Contact */}

            <div>

              <h3 className="mb-8 text-lg font-semibold">

                Contact

              </h3>

              <div className="space-y-5 text-slate-400">

                <p>Nairobi, Kenya</p>

                <p>info@kawimetrics.com</p>

                <p>+254 700 000 000</p>

              </div>

            </div>

          </div>

          {/* Bottom */}

          <div className="mt-24 flex flex-col gap-6 border-t border-white/10 pt-10 lg:flex-row lg:items-center lg:justify-between">

            <p className="text-slate-500">

              © 2026 KAWI Metrics Technologies. All rights reserved.

            </p>

            <div className="flex gap-8">

              <Link
                href="/"
                className="text-slate-500 transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/"
                className="text-slate-500 transition hover:text-white"
              >
                Terms of Service
              </Link>

            </div>

          </div>

        </div>

      </Container>

    </footer>
  );
}