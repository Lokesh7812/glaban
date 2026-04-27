import { SITE } from "@/lib/site";

export function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden rounded-[24px] border border-card-border shadow-md bg-secondary ${className}`}>
      <iframe
        title="G Laban location on Google Maps"
        src={SITE.mapEmbed}
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0"
        allowFullScreen
      />
    </div>
  );
}
