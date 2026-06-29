"use client";

import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const navLinks = [
  { name: "Technology", href: "/technology" },
  { name: "Applications", href: "/applications" },
  { name: "Industries", href: "/industries" },
  { name: "Roadmap", href: "/roadmap" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container>
        <nav
          className={`mt-4 flex h-16 items-center justify-between rounded-full border px-7 transition-all duration-500 ${
            scrolled
              ? "border-white/10 bg-slate-950/80 shadow-2xl backdrop-blur-3xl"
              : "border-white/5 bg-slate-950/40 backdrop-blur-2xl"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-cyan-400 to-cyan-300 shadow-lg shadow-cyan-500/30">
              <span className="text-lg font-bold text-white">K</span>
            </div>

            <div className="leading-tight">
              <h2 className="text-sm font-semibold tracking-wide text-white">
                KAWI Metrics
              </h2>

              <p className="text-xs text-slate-400">
                Thermal Energy Storage
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="group relative text-sm font-medium text-slate-300 transition duration-300 hover:text-white"
                >
                  {link.name}

                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button size="md" rightIcon={<ArrowRight size={18} />}>
              Get Started
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white lg:hidden"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-500 lg:hidden ${
            mobileOpen
              ? "mt-4 max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-6 backdrop-blur-3xl">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-300 transition hover:text-white"
                >
                  {link.name}
                </Link>
              ))}

              <Button
                className="mt-3 w-full"
                rightIcon={<ArrowRight size={18} />}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}