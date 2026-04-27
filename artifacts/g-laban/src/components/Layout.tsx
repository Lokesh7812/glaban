import { useLocation } from "wouter";
import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  // Only the home hero is dark — other pages also have a dark hero band, but
  // the header should stay transparent on top of any "/" route or any page
  // that opens with a deep band.
  const transparentHero =
    location === "/" || location === "/about" || location === "/menu" || location === "/contact";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header transparentOverHero={transparentHero} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
