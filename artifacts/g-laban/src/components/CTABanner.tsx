import { MapPin, MessageCircle } from "lucide-react";
import { Button } from "./Button";
import { SITE } from "@/lib/site";

export function CTABanner({
  title = "Visit G Laban Today for an Arabian Dessert Experience",
  subtitle = "Step into a world of laban, kunafa, and signature cakes — crafted with Middle Eastern soul, served with Chennai warmth.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative my-20 md:my-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[32px] bg-royal-deep text-white px-8 md:px-16 py-16 md:py-20 shadow-2xl">
          {/* Decorative arabesque */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.08]"
            viewBox="0 0 400 200"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <defs>
              <pattern id="cta-pat" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="white" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="400" height="200" fill="url(#cta-pat)" />
          </svg>

          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />

          <div className="relative max-w-3xl mx-auto text-center">
            <div className="font-arabic text-accent text-sm tracking-[0.3em] uppercase mb-4">
              ✦ G Läbän ✦
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-semibold leading-tight">
              {title}
            </h2>
            <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed">
              {subtitle}
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button as="a" href={SITE.mapDirections} target="_blank" rel="noopener noreferrer" variant="gold">
                <MapPin className="h-4 w-4" />
                Get Directions
              </Button>
              <Button
                as="a"
                href={SITE.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
              >
                <MessageCircle className="h-4 w-4" />
                Order on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
