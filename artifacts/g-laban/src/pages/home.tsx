import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Sparkles,
  Award,
  Leaf,
  Clock,
  TrendingUp,
  Heart,
  ArrowRight,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { FeatureCard } from "@/components/FeatureCard";
import { DessertCard } from "@/components/DessertCard";
import { CTABanner } from "@/components/CTABanner";
import { MapEmbed } from "@/components/MapEmbed";
import { Button } from "@/components/Button";
import { OrnamentDivider } from "@/components/SectionDivider";
import hebaCakeImg from "@assets/pistachio_belgium_chocolate_1777519996540.jpeg";
import { MENU } from "@/lib/menu";
import { SITE } from "@/lib/site";
import { useSeo } from "@/lib/seo";

const FEATURES = [
  { icon: Sparkles, title: "Authentic Arabian Flavours", description: "Recipes rooted in Middle Eastern tradition — every bite carries centuries of dessert craft." },
  { icon: Heart, title: "Signature Laban-Based Treats", description: "Creamy, cultured laban transformed into desserts you simply won't find anywhere else in Chennai." },
  { icon: Leaf, title: "Premium Quality Ingredients", description: "From slow-cooked milk to hand-crushed pistachios, we never compromise on what goes into the bowl." },
  { icon: Clock, title: "Freshly Prepared Every Time", description: "Made in small batches, served the moment they're at their peak — never sat on a shelf." },
  { icon: TrendingUp, title: "Trending Dessert Concept", description: "A new culinary chapter for Chennai — Arabian sweets reimagined for the modern dessert lover." },
  { icon: Award, title: "Customer-First Experience", description: "Warm hospitality, considered presentation, and the kind of service that turns first visits into rituals." },
];

export default function HomePage() {
  useSeo(
    "G Laban — Authentic Arabian Desserts in Chennai",
    "Indulge in authentic Arabian desserts at G Laban, Royapettah, Chennai — cheese bombs, kunafa, laban specials, and signature cakes. Open all days.",
  );

  const featured = MENU.slice(0, 4);

  return (
    <div>
      <Hero />

      {/* WHY G LABAN */}
      <section className="container-page py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <div className="font-arabic text-accent text-sm tracking-[0.3em] uppercase">
            ✦ The G Laban Difference · <span className="font-tamil normal-case tracking-normal text-base text-accent" lang="ta">எங்கள் சிறப்பு</span> ✦
          </div>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-primary font-semibold leading-tight">
            Why <span className="italic">G Laban</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            Six reasons our desserts are unlike anything else in the city —{" "}
            <span className="font-tamil text-primary/80" lang="ta">
              ஒவ்வொரு சுவையும் ஒரு அனுபவம்
            </span>
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </section>

      {/* FEATURED DESSERTS */}
      <section className="bg-secondary/40">
        <div className="container-page py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <div className="font-arabic text-accent text-sm tracking-[0.3em] uppercase">
                ✦ Signature Treats · <span className="font-tamil normal-case tracking-normal text-base text-accent" lang="ta">சிறப்பு இனிப்புகள்</span> ✦
              </div>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl text-primary font-semibold leading-tight">
                Featured Desserts
              </h2>
              <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                A glimpse of the indulgences waiting for you at our Royapettah store.
              </p>
            </div>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors group"
            >
              See the full menu
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
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
          </div>

          <div className="mt-12 flex justify-center">
            <Button as="a" href="/menu" variant="primary">
              Explore Full Menu
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="container-page py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[28px] overflow-hidden shadow-xl bg-gradient-to-br from-[hsl(224,72%,16%)] via-primary to-[hsl(224,72%,22%)] flex items-center justify-center">
              <img
                src={hebaCakeImg}
                alt="G Laban Heba Cake — signature Arabian dessert"
                className="w-full h-full object-contain p-6"
                loading="lazy"
                draggable={false}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-accent text-primary px-6 py-5 rounded-2xl shadow-xl max-w-[200px]">
              <div className="font-serif text-2xl font-bold leading-none">{SITE.since}</div>
              <div className="text-xs uppercase tracking-[0.2em] mt-1 opacity-80">
                A new tradition begins
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="font-arabic text-accent text-sm tracking-[0.3em] uppercase">
              ✦ Our Story · <span className="font-tamil normal-case tracking-normal text-base text-accent" lang="ta">எங்கள் கதை</span> ✦
            </div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-primary font-semibold leading-tight">
              A taste of the Middle East, <span className="italic">at home</span> in <span className="font-tamil text-primary" lang="ta">சென்னை</span>.
            </h2>
            <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
              G Laban was born from a simple craving — a desire for authentic laban desserts, perfectly crispy kunafa, and the rich, indulgent flavours that define true Arabian hospitality.

We brought these timeless recipes to Chennai, elevating them with the finest ingredients and a touch of modern craftsmanship. Every dessert is carefully curated to deliver not just taste, but an experience — one that blends tradition with elegance.

Set in a warm, contemporary space, G Laban is more than a dessert destination — it’s where culture, flavour, and comfort come together.
            </p>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed">
              Every dessert we serve is a small invitation: <em>slow down, taste
              carefully, share generously.</em>
            </p>
            <div className="mt-8">
              <Button as="a" href="/about" variant="secondary">
                Read our full story
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VISIT US */}
      <section className="bg-secondary/40">
        <div className="container-page py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="font-arabic text-accent text-sm tracking-[0.3em] uppercase">
              ✦ Visit Us · <span className="font-tamil normal-case tracking-normal text-base text-accent" lang="ta">வருக, வருக</span> ✦
            </div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-primary font-semibold leading-tight">
              Find Your Way to G Laban
            </h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg">
              Open all days, ready to welcome you with an Arabian dessert experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-stretch">
            <div className="lg:col-span-3 h-[420px]">
              <MapEmbed className="h-full" />
            </div>

            <div className="lg:col-span-2 bg-card border border-card-border rounded-[24px] p-8 shadow-md flex flex-col gap-6">
              <InfoRow icon={MapPin} label="Address">
                {SITE.address.line1}, {SITE.address.line2}, {SITE.address.city}
              </InfoRow>
              <InfoRow icon={Clock} label="Hours">
                {SITE.hours} · 11 AM – 11 PM
              </InfoRow>
              <InfoRow icon={Phone} label="Call us">
                <a href={SITE.phone.tel} className="hover:text-accent transition-colors">
                  {SITE.phone.display}
                </a>
              </InfoRow>
              <InfoRow icon={MessageCircle} label="WhatsApp">
                <a
                  href={SITE.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {SITE.whatsapp.display}
                </a>
              </InfoRow>

              <OrnamentDivider />

              <div className="flex flex-wrap gap-3">
                <Button as="a" href={SITE.mapDirections} target="_blank" rel="noopener noreferrer" variant="primary">
                  <MapPin className="h-4 w-4" />
                  Get Directions
                </Button>
                <Button as="a" href={SITE.whatsapp.href} target="_blank" rel="noopener noreferrer" variant="secondary">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="h-10 w-10 rounded-xl bg-secondary text-primary grid place-items-center shrink-0">
        <Icon className="h-5 w-5" strokeWidth={1.6} />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-0.5">
          {label}
        </div>
        <div className="text-sm md:text-base text-foreground leading-snug">{children}</div>
      </div>
    </div>
  );
}
