import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { SITE } from "@/lib/site";

function Typewriter({ strings }: { strings: string[] }) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetString = strings[currentStringIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && currentText === targetString) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentStringIndex((prev) => (prev + 1) % strings.length);
    } else {
      const delay = isDeleting ? 30 : 70;
      timeout = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : targetString.slice(0, prev.length + 1)
        );
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentStringIndex, strings]);

  return (
    <span className={currentStringIndex === 0 ? "font-tamil" : "font-serif italic"}>
      {currentText}
      <span className="animate-[pulse_1s_infinite] border-r-[3px] border-accent ml-[4px] h-[1em] inline-block align-middle" style={{ marginTop: '-4px' }} />
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative pt-16 md:pt-48 pb-10 md:pb-40 overflow-hidden bg-royal-deep flex items-center justify-center min-h-[90vh]">
      {/* Subtle arabesque overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.08]"
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
      
      {/* Decorative center radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container-page relative z-10 flex flex-col items-center text-center text-white w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/15 backdrop-blur px-[12px] py-[6px] text-[11px] md:text-sm uppercase tracking-widest text-white/90 shadow-lg"
        >
          NOW OPEN IN CHENNAI <span className="text-accent">•</span> SINCE 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-[14px] font-serif text-[28px] sm:text-7xl md:text-8xl lg:text-[6.5rem] leading-[1.2] sm:leading-[1.05] font-semibold max-w-5xl tracking-tight drop-shadow-lg"
        >
          Authentic <span className="text-accent italic">Arabian</span><br/>
          Desserts <span className="text-white/70">Now in</span> Chennai.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-[8px] text-[14px] md:text-3xl text-accent/90 drop-shadow-md tracking-wide min-h-[24px] md:h-[48px] flex items-center justify-center"
        >
          <Typewriter strings={["Taste · Tradition · A new taste in Chennai"]} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-[10px] max-w-[90%] md:max-w-2xl text-[13px] md:text-xl text-white/80 leading-relaxed font-light line-clamp-3 md:line-clamp-none mx-auto"
        >
          Indulge in rich, creamy, and exotic laban-based desserts crafted with
          premium ingredients and Middle Eastern tradition — served in the heart
          of <span className="font-tamil font-normal text-white" lang="ta">சென்னை</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-[14px] flex flex-col md:flex-row flex-wrap items-center justify-center gap-[8px] md:gap-4 w-full"
        >
          <Button as="a" href="/menu" variant="gold" className="w-[90%] md:w-auto h-[44px] md:h-[60px] md:px-8 font-bold text-[15px] md:text-lg rounded-full">
            Explore the Menu
            <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-2" />
          </Button>
          <Button as="a" href={SITE.mapDirections} target="_blank" rel="noopener noreferrer" variant="ghost" className="w-[90%] md:w-auto h-[40px] md:h-[60px] md:px-8 text-sm md:text-lg rounded-full backdrop-blur bg-white/5 border border-white/10 hover:bg-white/10">
            <MapPin className="h-4 w-4 md:h-5 md:w-5 mr-2" />
            Get Directions
          </Button>
          <Button as="a" href={SITE.whatsapp.href} target="_blank" rel="noopener noreferrer" variant="secondary" className="w-[90%] md:w-auto h-[40px] md:h-[60px] md:px-8 text-sm md:text-lg rounded-full backdrop-blur bg-white/10 hover:bg-white/20 text-white border-none">
            <MessageCircle className="h-4 w-4 md:h-5 md:w-5 mr-2" />
            For contact
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 md:mt-20 flex items-center justify-center gap-8 md:gap-16 text-sm text-white/60 w-full max-w-3xl border-t border-white/10 pt-6 md:pt-10"
        >
          <Stat label="Signature Desserts" value="7+" />
          <div className="h-8 md:h-10 w-px bg-white/15" />
          <Stat label="Open" value="All Days" />
          <div className="h-10 w-px bg-white/15 hidden sm:block" />
          <Stat label="Tradition" value="Arabian" className="hidden sm:block" />
        </motion.div>
      </div>

      {/* Curved bottom divider */}
      <div className="absolute -bottom-px inset-x-0 text-background pointer-events-none" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 md:h-20 lg:h-28 drop-shadow-[-5px_-5px_15px_rgba(0,0,0,0.2)]">
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
      <div className="font-serif text-3xl md:text-4xl text-accent font-semibold mb-1">{value}</div>
      <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/60">{label}</div>
    </div>
  );
}
