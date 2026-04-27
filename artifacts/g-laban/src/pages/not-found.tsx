import { Link } from "wouter";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/Button";
import { useSeo } from "@/lib/seo";

export default function NotFound() {
  useSeo("Page Not Found — G Laban", "The page you're looking for could not be found at G Laban.");
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-royal-deep text-white px-6 text-center relative overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07]"
        viewBox="0 0 600 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern id="nf-pat" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="white" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="600" height="400" fill="url(#nf-pat)" />
      </svg>

      <div className="relative max-w-xl">
        <img src="/logo.png" alt="G Laban" className="h-24 w-24 mx-auto rounded-2xl bg-white p-2 shadow-2xl" />
        <div className="font-arabic text-accent text-sm tracking-[0.3em] uppercase mt-6">
          ✦ G Läbän ✦
        </div>
        <div className="font-serif text-7xl md:text-8xl font-semibold mt-2 text-accent">404</div>
        <h1 className="font-serif text-3xl md:text-4xl font-semibold mt-3">
          This dessert isn't on the menu.
        </h1>
        <p className="mt-4 text-white/70">
          The page you're looking for has wandered off. Let's get you back to something delicious.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Button as="a" href="/" variant="gold">
            <Home className="h-4 w-4" />
            Back to Home
          </Button>
          <Link href="/menu">
            <Button variant="ghost">
              <ArrowLeft className="h-4 w-4" />
              Browse the Menu
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
