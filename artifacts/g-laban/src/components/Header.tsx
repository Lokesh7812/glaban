import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/franchise", label: "Franchise" },
  { href: "/contact", label: "Contact" },
];

export function Header({ transparentOverHero = false }: { transparentOverHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  const isTransparent = transparentOverHero && !scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/85 backdrop-blur-xl border-b border-border shadow-sm"
      }`}
    >
      <div className="container-page flex items-center justify-between h-18 py-3">
        <Logo inverted={isTransparent} />

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => {
            const active = location === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide rounded-full transition-colors ${
                  isTransparent
                    ? "text-white/90 hover:text-white"
                    : active
                      ? "text-primary"
                      : "text-foreground/75 hover:text-primary"
                }`}
              >
                {item.label}
                {active && !isTransparent && (
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-0.5 w-6 rounded-full bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={SITE.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              isTransparent
                ? "bg-white text-primary hover:bg-white/95 hover:-translate-y-0.5"
                : "bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            }`}
          >
            <MessageCircle className="h-4 w-4" />
            Order on WhatsApp
          </a>
        </div>

        <button
          className={`md:hidden p-2 rounded-full transition-colors ${
            isTransparent ? "text-white" : "text-primary"
          }`}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[480px] border-t border-border" : "max-h-0"
        } bg-white`}
      >
        <div className="container-page py-5 flex flex-col gap-1">
          {NAV.map((item) => {
            const active = location === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-3 rounded-2xl text-base font-medium ${
                  active
                    ? "bg-secondary text-primary"
                    : "text-foreground hover:bg-secondary/60"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={SITE.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-primary text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            Order on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
