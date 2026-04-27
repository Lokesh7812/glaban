export function SectionDivider({
  flip = false,
  fromColor = "white",
  toColor = "transparent",
  className = "",
}: {
  flip?: boolean;
  fromColor?: string;
  toColor?: string;
  className?: string;
}) {
  // fromColor/toColor unused stubs kept for future flexibility
  void fromColor;
  void toColor;
  return (
    <div className={`relative w-full h-12 md:h-20 ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className={`absolute inset-0 w-full h-full ${flip ? "rotate-180" : ""}`}
      >
        <path
          fill="currentColor"
          d="M0,32 C240,80 480,80 720,48 C960,16 1200,16 1440,48 L1440,80 L0,80 Z"
        />
      </svg>
    </div>
  );
}

export function OrnamentDivider({ label }: { label?: string }) {
  return (
    <div className="ornament-divider my-8">
      <Diamond />
      {label && (
        <span className="font-arabic text-sm tracking-widest text-accent uppercase">
          {label}
        </span>
      )}
      <Diamond />
    </div>
  );
}

function Diamond() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M7 0L9 5L14 7L9 9L7 14L5 9L0 7L5 5L7 0Z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}
