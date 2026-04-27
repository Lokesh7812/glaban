import { Link } from "wouter";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" aria-label="G Laban — Home">
      <div className="flex items-center gap-3 group">
        <div className="relative">
          <div
            className={`absolute inset-0 rounded-full blur-md transition-opacity ${
              inverted
                ? "bg-white/20 opacity-0 group-hover:opacity-100"
                : "bg-primary/20 opacity-0 group-hover:opacity-100"
            }`}
          />
          <img
            src="/logo.png"
            alt="G Laban shield logo"
            className="relative h-11 w-11 md:h-12 md:w-12 object-contain"
            loading="eager"
          />
        </div>
        <div className="leading-tight">
          <div
            className={`font-serif text-xl md:text-2xl font-semibold tracking-wide ${
              inverted ? "text-white" : "text-primary"
            }`}
          >
            G L&auml;b&auml;n
          </div>
          <div
            className={`text-[10px] md:text-[11px] uppercase tracking-[0.22em] ${
              inverted ? "text-white/70" : "text-muted-foreground"
            }`}
          >
            Arabian Desserts
          </div>
        </div>
      </div>
    </Link>
  );
}
