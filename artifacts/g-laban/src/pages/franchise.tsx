import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
  TrendingUp,
  Award,
  Sparkles,
  Heart,
  Users,
  Handshake,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { OrnamentDivider } from "@/components/SectionDivider";
import { FeatureCard } from "@/components/FeatureCard";
import { SITE } from "@/lib/site";
import { useSeo } from "@/lib/seo";

const BENEFITS = [
  {
    icon: Sparkles,
    title: "A Unique Concept",
    description:
      "G Laban is the only Arabian laban dessert brand of its kind in Tamil Nadu — a category-creator with a clear edge.",
  },
  {
    icon: TrendingUp,
    title: "Growing Demand",
    description:
      "Premium, experience-led desserts are a fast-rising trend across South Indian cities — and we're early.",
  },
  {
    icon: Heart,
    title: "Loved Recipes",
    description:
      "Time-tested signatures — kunafa, salankatia, koushri, lou'a — built on authentic Middle Eastern technique.",
  },
  {
    icon: Award,
    title: "Premium Brand Identity",
    description:
      "A royal, elegant brand built for high streets, malls, and lifestyle districts — not just a counter.",
  },
  {
    icon: Users,
    title: "Full Onboarding Support",
    description:
      "Recipe training, kitchen setup guidance, branded packaging, and marketing playbook — we hand it all over.",
  },
  {
    icon: Handshake,
    title: "True Partnership",
    description:
      "We grow together. You bring the location and passion; we bring the craft, the brand, and the ongoing support.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Reach Out",
    body: "Call, WhatsApp, or email our franchise team with your city and preferred location.",
  },
  {
    n: "02",
    title: "Initial Discussion",
    body: "We discuss the concept, investment range, model, and your vision for the store.",
  },
  {
    n: "03",
    title: "Site & Agreement",
    body: "We help evaluate locations and finalise a partnership that works for both sides.",
  },
  {
    n: "04",
    title: "Launch Support",
    body: "Training, setup, branding, and an unforgettable opening — we're with you every step.",
  },
];

export default function FranchisePage() {
  useSeo(
    "Franchise Enquiry — G Laban",
    "Become a G Laban franchise partner. Bring authentic Arabian desserts to your city. Call +91 99629 09100 to start your franchise journey.",
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
            <pattern id="franchise-pat" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="white" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="600" height="400" fill="url(#franchise-pat)" />
        </svg>
        <div className="container-page text-center max-w-3xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-arabic text-accent text-sm tracking-[0.3em] uppercase"
          >
            ✦ Franchise · <span className="font-tamil normal-case tracking-normal text-base" lang="ta">பிராஞ்சைஸி</span> ✦
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-3 font-serif text-5xl md:text-6xl font-semibold leading-[1.05]"
          >
            Bring G Laban <span className="italic text-accent">to your city.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-lg text-white/75"
          >
            Partner with us to open a G Laban store and serve authentic Arabian
            desserts to a growing audience —{" "}
            <span className="font-tamil text-accent" lang="ta">
              ஒரு புதிய வாய்ப்பு
            </span>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Button
              as="a"
              href={SITE.franchise.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              variant="gold"
            >
              <MessageCircle className="h-4 w-4" />
              Enquire on WhatsApp
            </Button>
            <Button as="a" href={SITE.franchise.tel} variant="ghost">
              <Phone className="h-4 w-4" />
              Call {SITE.franchise.display}
            </Button>
          </motion.div>
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

      {/* Contact cards */}
      <section className="container-page pt-12 md:pt-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="font-arabic text-accent text-sm tracking-[0.3em] uppercase">
            ✦ <span className="font-tamil normal-case tracking-normal text-base text-accent" lang="ta">தொடர்பு கொள்ளுங்கள்</span> · Reach Our Franchise Team ✦
          </div>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-primary font-semibold leading-tight">
            Let's start the conversation.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <ContactCard
            icon={Phone}
            label="Franchise Phone"
            value={SITE.franchise.display}
            cta="Tap to call"
            href={SITE.franchise.tel}
            index={0}
          />
          <ContactCard
            icon={MessageCircle}
            label="WhatsApp"
            value={SITE.franchise.display}
            cta="Open WhatsApp"
            href={SITE.franchise.whatsapp}
            external
            highlight
            index={1}
          />
          <ContactCard
            icon={Mail}
            label="Email"
            value={SITE.franchise.email}
            cta="Send an email"
            href={SITE.franchise.emailHref}
            index={2}
          />
        </div>
      </section>

      {/* Our First Franchise Location */}
      <section className="container-page pt-20 md:pt-24">
        <div className="bg-card border border-card-border rounded-[28px] overflow-hidden shadow-md">
          <div className="grid md:grid-cols-2">
            <div className="h-64 md:h-auto bg-muted relative">
              <img
                src="/images/franchise-store.jpeg"
                alt="G Laban First Franchise Store"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="font-arabic text-accent text-sm tracking-[0.3em] uppercase mb-2">
                ✦ Our First Franchise · <span className="font-tamil normal-case tracking-normal text-base text-accent" lang="ta">முதல் கிளை</span> ✦
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-primary font-semibold leading-tight mb-4">
                Visit Our Navalur Franchise
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Experience the premium G Laban dessert destination at our very first franchise location.
              </p>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/60 text-primary p-2.5 rounded-xl mt-1">
                    <MapPin className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-lg mb-1">Address</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      NO:/ 389, Rajiv Gandhi Salai,<br />
                      opposite to Pacifica Tech Park,<br />
                      Navalur, Chennai, Tamil Nadu 600130
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/60 text-primary p-2.5 rounded-xl mt-1">
                    <Phone className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-lg mb-1">Contact</h4>
                    <a href="tel:+919962909100" className="text-muted-foreground hover:text-accent transition-colors">
                      +91 99629 09100
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="container-page py-20 md:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="font-arabic text-accent text-sm tracking-[0.3em] uppercase">
            ✦ Why Partner With Us · <span className="font-tamil normal-case tracking-normal text-base" lang="ta">ஏன் எங்களுடன்?</span> ✦
          </div>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-primary font-semibold leading-tight">
            A premium brand with a real edge.
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
            Six reasons franchise partners choose G Laban as their next venture.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((b, i) => (
            <FeatureCard key={b.title} {...b} index={i} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-secondary/40">
        <div className="container-page py-20 md:py-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="font-arabic text-accent text-sm tracking-[0.3em] uppercase">
              ✦ How It Works · <span className="font-tamil normal-case tracking-normal text-base" lang="ta">செயல்முறை</span> ✦
            </div>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-primary font-semibold leading-tight">
              Four simple steps to open your store.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-card border border-card-border rounded-[24px] p-7 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="font-serif text-4xl text-accent font-bold mb-3">
                  {s.n}
                </div>
                <h3 className="font-serif text-xl text-primary font-semibold mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick info strip */}
      <section className="container-page py-16 md:py-20">
        <div className="bg-card border border-card-border rounded-[28px] p-8 md:p-12 shadow-md">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="font-arabic text-accent text-sm tracking-[0.3em] uppercase">
                ✦ Ready to begin? · <span className="font-tamil normal-case tracking-normal text-base text-accent" lang="ta">தயாரா?</span> ✦
              </div>
              <h3 className="mt-3 font-serif text-3xl md:text-4xl text-primary font-semibold leading-tight">
                Talk to our franchise team today.
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                We'll walk you through everything — the model, the investment,
                the support — and answer all your questions personally.
              </p>
              <OrnamentDivider />
              <div className="flex flex-wrap gap-3">
                <Button
                  as="a"
                  href={SITE.franchise.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Franchise Team
                </Button>
                <Button as="a" href={SITE.franchise.tel} variant="secondary">
                  <Phone className="h-4 w-4" />
                  {SITE.franchise.display}
                </Button>
              </div>
            </div>

            <div className="bg-royal-deep text-white rounded-[20px] p-7 text-center">
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/60">
                Franchise Hotline
              </div>
              <div className="mt-2 font-serif text-3xl font-semibold text-accent">
                {SITE.franchise.display}
              </div>
              <div className="mt-3 font-tamil text-sm text-white/70" lang="ta">
                பிராஞ்சைஸி விசாரணை
              </div>
              <a
                href={SITE.franchise.tel}
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-accent transition-colors"
              >
                Tap to call
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Open the next G Laban store with us."
        subtitle="A new chapter for Arabian desserts in your city — let's build it together."
      />
    </div>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  cta,
  href,
  external,
  highlight,
  index = 0,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  cta: string;
  href: string;
  external?: boolean;
  highlight?: boolean;
  index?: number;
}) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className={`group block rounded-[24px] p-7 md:p-8 border shadow-sm hover:shadow-xl transition-all ${
        highlight
          ? "bg-gradient-to-br from-primary to-[hsl(224,72%,22%)] text-white border-primary/30"
          : "bg-card text-foreground border-card-border"
      }`}
    >
      <div
        className={`h-14 w-14 rounded-2xl grid place-items-center mb-5 transition-transform group-hover:scale-105 ${
          highlight ? "bg-accent text-primary" : "bg-secondary text-primary"
        }`}
      >
        <Icon className="h-6 w-6" strokeWidth={1.6} />
      </div>
      <div
        className={`text-[11px] uppercase tracking-[0.22em] mb-1.5 ${
          highlight ? "text-white/65" : "text-muted-foreground"
        }`}
      >
        {label}
      </div>
      <div
        className={`font-serif text-2xl md:text-[26px] font-semibold leading-tight break-words ${
          highlight ? "text-white" : "text-primary"
        }`}
      >
        {value}
      </div>
      <div
        className={`mt-5 inline-flex items-center gap-2 text-sm font-medium ${
          highlight ? "text-accent" : "text-primary"
        }`}
      >
        {cta}
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.a>
  );
}
