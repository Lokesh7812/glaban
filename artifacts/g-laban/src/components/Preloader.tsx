import { useEffect, useState } from "react";

const SESSION_KEY = "glaban_preloader_shown";

export function Preloader() {
  const [shouldRender, setShouldRender] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(SESSION_KEY) !== "1";
  });
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    if (!shouldRender) return;

    document.body.style.overflow = "hidden";

    const fadeTimer = window.setTimeout(() => {
      setFadingOut(true);
    }, 2200);

    const removeTimer = window.setTimeout(() => {
      sessionStorage.setItem(SESSION_KEY, "1");
      document.body.style.overflow = "";
      setShouldRender(false);
    }, 2900);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, [shouldRender]);

  if (!shouldRender) return null;

  return (
    <div
      className={`preloader-root ${fadingOut ? "preloader-fade-out" : ""}`}
      aria-hidden="true"
      role="presentation"
    >
      <svg
        className="preloader-pattern"
        viewBox="0 0 600 400"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern id="pl-pat" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="white" strokeWidth="0.6" />
            <circle cx="30" cy="30" r="2.5" fill="white" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="600" height="400" fill="url(#pl-pat)" />
      </svg>

      <div className="preloader-content">
        <div className="preloader-logo-wrap">
          <span className="preloader-glow" aria-hidden="true" />
          <span className="preloader-sweep" aria-hidden="true" />
          <img
            src="/logo.png"
            alt="G Läbän"
            className="preloader-logo"
            draggable={false}
          />
        </div>
        <p className="preloader-text">Preparing your dessert experience…</p>
      </div>
    </div>
  );
}
