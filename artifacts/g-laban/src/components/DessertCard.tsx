import { motion } from "framer-motion";
import { DessertPlaceholder } from "./DessertPlaceholder";

export type DessertCardProps = {
  name: string;
  category: string;
  description: string;
  variant?: number;
  arabicName?: string;
  tamilName?: string;
};

export function DessertCard({ name, category, description, variant = 0, arabicName, tamilName }: DessertCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className="group relative bg-card border border-card-border rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
    >
      <div className="aspect-[4/3] w-full overflow-hidden">
        <DessertPlaceholder variant={variant} className="transition-transform duration-700 group-hover:scale-105" />
      </div>

      <div className="absolute top-4 left-4">
        <span className="inline-flex items-center rounded-full bg-primary/95 text-primary-foreground text-[10px] tracking-[0.18em] uppercase px-3 py-1.5 font-medium backdrop-blur shadow">
          {category}
        </span>
      </div>

      <div className="p-6">
        <div className="flex items-baseline justify-between gap-3 mb-1">
          <h3 className="font-serif text-xl md:text-2xl text-primary font-semibold leading-tight">
            {name}
          </h3>
          {arabicName && (
            <span className="font-arabic text-base text-accent shrink-0" dir="rtl">
              {arabicName}
            </span>
          )}
        </div>
        {tamilName && (
          <div className="font-tamil text-sm text-primary/65 mb-2.5" lang="ta">
            {tamilName}
          </div>
        )}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-medium">
            Signature
          </span>
          <span className="text-xs text-muted-foreground/70">
            Freshly prepared
          </span>
        </div>
      </div>
    </motion.article>
  );
}
