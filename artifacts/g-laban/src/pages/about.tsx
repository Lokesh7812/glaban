import { motion } from "framer-motion";
import {
  Sparkles,
  Award,
  Leaf,
  Clock,
  TrendingUp,
  Heart,
} from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";
import { CTABanner } from "@/components/CTABanner";
import { OrnamentDivider } from "@/components/SectionDivider";
import { useSeo } from "@/lib/seo";

const FEATURES = [
  { icon: Sparkles, title: "Authentic Arabian Flavours", description: "Traditional recipes preserved exactly as they were taught — by family, by memory, by patience." },
  { icon: Heart, title: "Signature Laban-Based Treats", description: "Cultured laban turned into something poetic — desserts that surprise even seasoned sweet-lovers." },
  { icon: Leaf, title: "Premium Quality Ingredients", description: "Pistachios, saffron, cardamom, slow-cooked milk — sourced with the same care a chef takes." },
  { icon: Clock, title: "Freshly Prepared Every Time", description: "Made in small batches every day. Nothing pre-made, nothing rushed, nothing left to age on a shelf." },
  { icon: TrendingUp, title: "A New Dessert Chapter", description: "We're rewriting what dessert can mean in Chennai — Arabian craft meets contemporary plating." },
  { icon: Award, title: "Customer-First Experience", description: "Every guest is welcomed the Arabian way — generously, warmly, and with genuine care." },
];

export default function AboutPage() {
  useSeo(
    "Our Story — G Laban",
    "Discover the story behind G Laban — bringing authentic Arabian dessert tradition to Royapettah, Chennai with premium ingredients and warm hospitality.",
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
            <pattern id="about-pat" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="white" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="600" height="400" fill="url(#about-pat)" />
        </svg>
        <div className="container-page text-center max-w-3xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-arabic text-accent text-sm tracking-[0.3em] uppercase"
          >
            ✦ Our Story · <span className="font-tamil normal-case tracking-normal text-base" lang="ta">எங்கள் கதை</span> ✦
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-3 font-serif text-5xl md:text-6xl font-semibold leading-[1.05]"
          >
            A passion for <span className="italic text-accent">Arabian</span> dessert,<br />
            served from <span className="font-tamil text-accent" lang="ta">சென்னை</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-lg text-white/75"
          >
            G Laban is more than a dessert shop — it's a small embassy of Middle Eastern sweetness in our city.{" "}
            <span className="font-tamil text-white" lang="ta">
              ருசியின் ஒரு புதிய அத்தியாயம்.
            </span>
          </motion.p>
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

      {/* Story body */}
      <section className="container-page py-20 md:py-24">
        <div className="max-w-[820px] mx-auto">
          <article className="prose prose-lg max-w-none text-foreground/90">
            <p className="text-xl md:text-2xl font-serif text-primary leading-snug !mt-0">
              The first time you taste a real Arabian laban dessert, something quiet happens — a memory you've never had comes back to you. That feeling is the reason G Laban exists.
            </p>
            <p>
              We grew up around dessert tables that felt like ceremonies — different bases served in boxes, topped with golden, crispy kunafa, sometimes layered with crunchy baklava. Bowls of chilled laban were dressed with rich, premium flavours and finished with a generous sprinkle of crunchy nuts on top.

These weren’t desserts served at the end of a meal; they were the meal, the conversation, the welcome. And for years, we wondered why a city as vibrant as Chennai didn’t have a place that served them this way.
            </p>
            <p>
              In 2026, on Navalur , Royapettah, we
              opened that place. We brought traditional recipes from the Middle
              East, paired them with the highest-quality ingredients we could
              source, and built G Laban to feel like the homes we remember —
              warm, generous, unhurried, and a little bit royal.
            </p>
            <p>
              Every dessert here is made fresh, in small batches, by people who
              care about what comes out of the kitchen. Our cheese bombs are
              wrapped in golden kunafa shells. Our laban specials are layered
              like the originals. Our cakes are conceived with the same care a
              jeweller uses on a centerpiece.
            </p>
            <p className="text-lg font-serif text-primary italic">
              When you visit G Laban, you're not just buying a dessert. You're
              accepting a small invitation into a tradition. We're so glad you
              came.
            </p>
          </article>

          <OrnamentDivider label="With gratitude" />
        </div>
      </section>

      {/* Decorative imagery strip */}
      <section className="container-page pb-16">
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {[
            { src: "/images/kunafa.png", alt: "Golden sizzling Arabian Kunafa" },
            { src: "/images/laban.png", alt: "Creamy Arabian Laban dessert" },
            { src: "/images/baklava.png", alt: "Crispy Arabian Baklava" }
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="aspect-[3/4] rounded-[24px] overflow-hidden shadow-lg relative group"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* What makes G Laban special */}
      <section className="bg-secondary/40">
        <div className="container-page py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto">
            <div className="font-arabic text-accent text-sm tracking-[0.3em] uppercase">
              ✦ What Makes Us Special · <span className="font-tamil normal-case tracking-normal text-base text-accent" lang="ta">எங்கள் வாக்குறுதி</span> ✦
            </div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-primary font-semibold leading-tight">
              The G Laban Promise
            </h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Come and Taste Arabian Delight"
        subtitle="One visit is all it takes. We'll have a fresh tray waiting for you."
      />
    </div>
  );
}
