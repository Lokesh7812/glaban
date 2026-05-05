import { Link } from "wouter";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative bg-royal-deep text-white mt-24">
      {/* curved top */}
      <div className="absolute -top-px inset-x-0 text-white pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-12 -translate-y-[1px] rotate-180"
        >
          <path
            fill="currentColor"
            d="M0,32 C240,80 480,80 720,48 C960,16 1200,16 1440,48 L1440,80 L0,80 Z"
          />
        </svg>
      </div>

      <div className="container-page pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="G Laban" className="h-12 w-12 object-contain" />
              <div>
                <div className="font-serif text-2xl font-semibold">G Läbän</div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-white/60">
                  Since {SITE.since}
                </div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/70 max-w-xs">
              {SITE.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 text-accent">Explore</h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">Our Story</Link></li>
              <li><Link href="/menu" className="hover:text-accent transition-colors">Menu</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Visit Us</Link></li>
              <li><Link href="/franchise" className="hover:text-accent transition-colors">Franchise Enquiry</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 text-accent">Visit</h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <span>{SITE.address.line1}, {SITE.address.line2}, {SITE.address.city}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <a href={SITE.phone.tel} className="hover:text-accent transition-colors">
                  {SITE.phone.display}
                </a>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <a
                  href={SITE.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {SITE.whatsapp.display}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
                <a href={SITE.email.href} className="hover:text-accent transition-colors">
                  {SITE.email.display}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4 text-accent">Follow</h4>
            <p className="text-sm text-white/70 mb-4">
              Catch every new dessert, behind-the-scenes, and Arabian recipe story.
            </p>
            <div className="flex gap-3">
              <SocialIcon href={SITE.social.instagram} label="Instagram">
                <FaInstagram className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={SITE.social.facebook} label="Facebook">
                <FaFacebookF className="h-4 w-4" />
              </SocialIcon>
              <SocialIcon href={SITE.social.youtube} label="YouTube">
                <FaYoutube className="h-4 w-4" />
              </SocialIcon>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/55">
          <p>© {SITE.since} G Laban. All rights reserved. Crafted with tradition in Chennai.</p>
          <p className="font-arabic text-sm text-white/70">حلويات عربية أصيلة</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
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
      className="h-10 w-10 rounded-full grid place-items-center bg-white/10 hover:bg-accent hover:text-primary text-white transition-all hover:-translate-y-0.5"
    >
      {children}
    </a>
  );
}
