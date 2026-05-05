import { FaWhatsapp } from "react-icons/fa";
import { SITE } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with G Laban on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
      <span className="relative flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 transition-transform">
        <FaWhatsapp className="h-7 w-7" />
      </span>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-primary text-primary-foreground text-xs font-medium px-3 py-1.5 shadow-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all hidden md:block">
        For contact
      </span>
    </a>
  );
}
