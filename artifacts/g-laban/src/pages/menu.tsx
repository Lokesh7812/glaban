import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DessertCard } from "@/components/DessertCard";
import { CTABanner } from "@/components/CTABanner";
import { FILTERS, MENU } from "@/lib/menu";
import type { FilterValue } from "@/lib/menu";
import { useSeo } from "@/lib/seo";

export default function MenuPage() {
  useSeo(
    "Menu — G Laban Arabian Desserts",
    "Explore the full G Laban menu: cheese bomb, salankatia, koushri, lou'a, heba cake, fazea chocola cake, and de paris — Arabian desserts crafted in Chennai.",
  );
  const [filter, setFilter] = useState<FilterValue>("All");

  const items = useMemo(
    () =>
      filter === "All" ? MENU : MENU.filter((m) => m.category === filter),
    [filter],
  );

  return (
    <div>
      {/* Hero band */}
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-20 bg-royal-deep text-white overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.07]"
          viewBox="0 0 600 400"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <pattern id="menu-pat" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="white" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="600" height="400" fill="url(#menu-pat)" />
        </svg>
        <div className="container-page text-center max-w-3xl mx-auto relative">
          <div className="font-arabic text-accent text-sm tracking-[0.3em] uppercase">
            ✦ The Menu · <span className="font-tamil normal-case tracking-normal text-base" lang="ta">எங்கள் இனிப்புகள்</span> ✦
          </div>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl font-semibold leading-[1.05]">
            Our Signature <span className="italic text-accent">Arabian</span> Desserts
          </h1>
          <p className="mt-5 text-lg text-white/75">
            Seven indulgences. Each one made fresh, in small batches, the
            traditional way —{" "}
            <span className="font-tamil text-white" lang="ta">
              ஒவ்வொன்றும் ஒரு சிறப்பு.
            </span>
          </p>
        </div>

        <div className="absolute -bottom-px inset-x-0 text-background pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-12 md:h-20">
            <path
              fill="currentColor"
              d="M0,32 C240,80 480,80 720,48 C960,16 1200,16 1440,48 L1440,80 L0,80 Z"
            />
          </svg>
        </div>
      </section>

      {/* Filter bar */}
      <section className="container-page pt-12">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 p-2 md:p-2 bg-card border border-card-border rounded-full shadow-sm w-full md:w-fit mx-auto">
          {FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all ${
                  active
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-foreground/70 hover:text-primary hover:bg-secondary/60"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid */}
      <section className="container-page py-12 md:py-16">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={filter}
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <DessertCard
                  name={item.name}
                  arabicName={item.arabicName}
                  tamilName={item.tamilName}
                  category="Arabian Desserts"
                  description={item.description}
                  variant={i}
                  image={item.image}
                  imageFit={item.imageFit}
                  imageBg={item.imageBg}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {items.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            Nothing here in this category just yet — try another.
          </div>
        )}
      </section>

      <CTABanner
        title="Hungry already? We're ready when you are."
        subtitle="Visit our Franchise, or For contact — we'll have it freshly prepared."
      />
    </div>
  );
}
