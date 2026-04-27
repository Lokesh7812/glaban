import { motion } from "framer-motion";
import { MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { DessertPlaceholder } from "./DessertPlaceholder";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden bg-royal-deep">
      {/* Subtle arabesque overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07]"
        viewBox="0 0 600 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern id="hero-pat" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="white" strokeWidth="0.6" />
            <circle cx="30" cy="30" r="3" fill="white" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="600" height="400" fill="url(#hero-pat)" />
      </svg>

      <div className="container-page grid lg:grid-cols-12 gap-12 lg:gap-10 items-center text-white relative">
        <div className="lg:col-span-7 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 rounded-full bg-white/10 border border-white/15 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-white/80 mb-7"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Now Open in Navalur, Chennai
            <span className="font-arabic text-accent">·</span>
            Since {SITE.since}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.02] font-semibold"
          >
            Authentic <span className="text-accent italic">Arabian</span>
            <br />
            Desserts <span className="text-white/60">Now in</span>
            <br />
            Chennai.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-7 max-w-xl text-base md:text-lg text-white/75 leading-relaxed"
          >
            Indulge in rich, creamy, and exotic laban-based desserts crafted with
            premium ingredients and Middle Eastern tradition — served in the heart
            of Navalur.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Button as="a" href="/menu" variant="gold">
              Explore the Menu
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button as="a" href={SITE.mapDirections} target="_blank" rel="noopener noreferrer" variant="ghost">
              <MapPin className="h-4 w-4" />
              Get Directions
            </Button>
            <Button as="a" href={SITE.whatsapp.href} target="_blank" rel="noopener noreferrer" variant="secondary">
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex items-center gap-8 text-sm text-white/60"
          >
            <Stat label="Signature Desserts" value="7+" />
            <div className="h-8 w-px bg-white/15" />
            <Stat label="Open" value="All Days" />
            <div className="h-8 w-px bg-white/15 hidden sm:block" />
            <Stat label="Tradition" value="Arabian" className="hidden sm:block" />
          </motion.div>
        </div>

        {/* Dessert collage */}
        <div className="lg:col-span-5 relative h-[420px] sm:h-[520px] lg:h-[560px]">
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -3 }}
            animate={{ opacity: 1, y: 0, rotate: -4 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-4 left-2 w-[58%] h-[58%] rounded-[28px] overflow-hidden shadow-2xl border-4 border-white/90"
          >
            <DessertPlaceholder variant={0} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 6 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="absolute bottom-4 right-0 w-[60%] h-[58%] rounded-[28px] overflow-hidden shadow-2xl border-4 border-white/90"
          >
            <DessertPlaceholder variant={1} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="absolute top-[34%] right-[28%] w-[34%] h-[34%] rounded-full overflow-hidden shadow-2xl border-4 border-accent/80"
          >
            <DessertPlaceholder variant={2} />
          </motion.div>
          {/* Decorative arabic medallion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="absolute -bottom-2 -left-2 h-24 w-24 rounded-full bg-accent text-primary grid place-items-center shadow-xl rotate-[-12deg]"
            aria-hidden="true"
          >
            <div className="text-center leading-tight">
              <div className="font-serif text-[10px] uppercase tracking-[0.18em]">Since</div>
              <div className="font-serif text-2xl font-bold">{SITE.since}</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Curved bottom divider */}
      <div className="absolute -bottom-px inset-x-0 text-background pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 md:h-20">
          <path
            fill="currentColor"
            d="M0,32 C240,80 480,80 720,48 C960,16 1200,16 1440,48 L1440,80 L0,80 Z"
          />
        </svg>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="font-serif text-2xl text-accent font-semibold">{value}</div>
      <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">{label}</div>
    </div>
  );
}
