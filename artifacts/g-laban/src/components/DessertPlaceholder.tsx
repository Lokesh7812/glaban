type Props = {
  variant?: number;
  className?: string;
};

const palettes = [
  "from-[hsl(224,40%,94%)] via-[hsl(38,40%,96%)] to-[hsl(224,30%,90%)]",
  "from-[hsl(38,50%,94%)] via-white to-[hsl(224,40%,94%)]",
  "from-[hsl(224,50%,92%)] via-[hsl(38,40%,96%)] to-[hsl(224,30%,88%)]",
  "from-[hsl(41,55%,90%)] via-white to-[hsl(224,40%,92%)]",
];

export function DessertPlaceholder({ variant = 0, className = "" }: Props) {
  const palette = palettes[variant % palettes.length];
  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-gradient-to-br ${palette} ${className}`}
      aria-hidden="true"
    >
      {/* Decorative arabesque pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.18] text-primary"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id={`arab-${variant}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M20 0 L40 20 L20 40 L0 20 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.6"
            />
            <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="200" height="200" fill={`url(#arab-${variant})`} />
      </svg>

      {/* Glow */}
      <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />

      {/* Center medallion */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <div className="relative h-20 w-20 mb-3">
          <div className="absolute inset-0 rounded-full bg-white/70 backdrop-blur-sm border border-primary/15 shadow-lg" />
          <svg
            className="relative h-20 w-20 text-primary p-4"
            viewBox="0 0 64 64"
            fill="none"
          >
            <path
              d="M32 6 C 38 14, 46 18, 46 28 C 46 36, 40 42, 32 42 C 24 42, 18 36, 18 28 C 18 18, 26 14, 32 6 Z"
              fill="currentColor"
              opacity="0.85"
            />
            <ellipse cx="32" cy="48" rx="18" ry="3" fill="currentColor" opacity="0.25" />
            <circle cx="32" cy="22" r="2" fill="hsl(var(--accent))" />
          </svg>
        </div>
        <div className="font-serif text-base md:text-lg text-primary/80 font-medium leading-tight">
          Dessert Image
        </div>
        <div className="font-arabic text-[11px] tracking-[0.3em] text-primary/60 uppercase mt-1">
          Coming Soon
        </div>
      </div>
    </div>
  );
}
