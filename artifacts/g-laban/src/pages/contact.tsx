import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { Button } from "@/components/Button";
import { MapEmbed } from "@/components/MapEmbed";
import { CTABanner } from "@/components/CTABanner";
import { OrnamentDivider } from "@/components/SectionDivider";
import { SITE } from "@/lib/site";
import { useSeo } from "@/lib/seo";

export default function ContactPage() {
  useSeo(
    "Contact & Visit — G Laban",
    "Visit G Laban at Navalur, Chennai. Call, WhatsApp, email, or get directions. Open all days for an Arabian dessert experience.",
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
            <pattern id="contact-pat" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="white" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="600" height="400" fill="url(#contact-pat)" />
        </svg>
        <div className="container-page text-center max-w-3xl mx-auto relative">
          <div className="font-arabic text-accent text-sm tracking-[0.3em] uppercase">
            ✦ Visit Us ✦
          </div>
          <h1 className="mt-3 font-serif text-5xl md:text-6xl font-semibold leading-[1.05]">
            Come <span className="italic text-accent">Find Us</span>
          </h1>
          <p className="mt-5 text-lg text-white/75">
            Whether you'd like to drop by, place an order, or simply say hello — we'd love to hear from you.
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

      {/* Contact cards */}
      <section className="container-page pt-12 md:pt-16">
        <div className="grid md:grid-cols-3 gap-6">
          <ContactCard
            icon={Phone}
            label="Call us"
            value={SITE.phone.display}
            cta="Tap to call"
            href={SITE.phone.tel}
            index={0}
          />
          <ContactCard
            icon={MessageCircle}
            label="WhatsApp"
            value={SITE.whatsapp.display}
            cta="Open WhatsApp"
            href={SITE.whatsapp.href}
            external
            highlight
            index={1}
          />
          <ContactCard
            icon={Mail}
            label="Email"
            value={SITE.email.display}
            cta="Send an email"
            href={SITE.email.href}
            index={2}
          />
        </div>
      </section>

      {/* Map + address */}
      <section className="container-page py-16 md:py-20">
        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <div className="lg:col-span-3 h-[420px] md:h-[520px]">
            <MapEmbed className="h-full" />
          </div>

          <div className="lg:col-span-2 bg-card border border-card-border rounded-[24px] p-8 md:p-10 shadow-md flex flex-col gap-6">
            <div>
              <div className="font-arabic text-accent text-sm tracking-[0.3em] uppercase">
                ✦ Our Address ✦
              </div>
              <h2 className="mt-2 font-serif text-3xl md:text-4xl text-primary font-semibold leading-tight">
                G Laban, Navalur
              </h2>
            </div>

            <div className="space-y-5 text-foreground/90">
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-secondary text-primary grid place-items-center shrink-0">
                  <MapPin className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-0.5">
                    Address
                  </div>
                  <div className="leading-snug">
                    {SITE.address.line1}, {SITE.address.line2}, {SITE.address.city}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-secondary text-primary grid place-items-center shrink-0">
                  <Clock className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-0.5">
                    Working days
                  </div>
                  <div className="leading-snug">{SITE.hours} · 11 AM – 11 PM</div>
                </div>
              </div>
            </div>

            <OrnamentDivider />

            <div className="flex flex-wrap gap-3">
              <Button
                as="a"
                href={SITE.mapDirections}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
                <MapPin className="h-4 w-4" />
                Get Directions
              </Button>
              <Button
                as="a"
                href={SITE.whatsapp.franchise}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                <MessageCircle className="h-4 w-4" />
                Franchise Enquiry
              </Button>
            </div>

            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Follow us
              </div>
              <div className="flex gap-3">
                <Social href={SITE.social.instagram} label="Instagram">
                  <FaInstagram className="h-4 w-4" />
                </Social>
                <Social href={SITE.social.facebook} label="Facebook">
                  <FaFacebookF className="h-4 w-4" />
                </Social>
                <Social href={SITE.social.youtube} label="YouTube">
                  <FaYoutube className="h-4 w-4" />
                </Social>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Visit G Laban Today for a Dessert Experience Like Never Before"
        subtitle="Step inside, and the rest of Chennai will wait."
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
          highlight
            ? "bg-accent text-primary"
            : "bg-secondary text-primary"
        }`}
      >
        <Icon className="h-6 w-6" strokeWidth={1.6} />
      </div>
      <div className={`text-[11px] uppercase tracking-[0.22em] mb-1.5 ${highlight ? "text-white/65" : "text-muted-foreground"}`}>
        {label}
      </div>
      <div className={`font-serif text-2xl md:text-[26px] font-semibold leading-tight ${highlight ? "text-white" : "text-primary"}`}>
        {value}
      </div>
      <div className={`mt-5 inline-flex items-center gap-2 text-sm font-medium ${highlight ? "text-accent" : "text-primary"}`}>
        {cta}
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.a>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="h-11 w-11 rounded-full grid place-items-center bg-secondary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}
